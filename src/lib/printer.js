const {
  isEnumType,
  isUnionType,
  isObjectType,
  isScalarType,
  isOperation,
  getDefaultValue,
  getTypeName,
  getFields,
  isDirectiveType,
  isParametrizedField,
  isInterfaceType,
  getNamedType,
  isInputType,
  isListType,
  isNonNullType,
  isLeafType,
  getRelationOfReturn,
  getRelationOfField,
  getRelationOfImplementation,
} = require("./graphql");

const { toSlug, escapeMDX, capitalize } = require("../utils/scalars/string");
const { hasProperty, hasMethod } = require("../utils/scalars/object");
const { pathUrl } = require("../utils/scalars/url");

const HEADER_SECTION_LEVEL = "###";
const HEADER_SECTION_SUB_LEVEL = "####";
const HEADER_SECTION_ITEM_LEVEL = "- #####";
const NO_DESCRIPTION_TEXT = "No description";
const MARKDOWN_EOL = "\n";
const MARKDOWN_EOP = "\n\n";
const BULLET_SEPARATOR =
  "<span style={{ fontWeight: 'normal', fontSize: '.5em', color: 'var(--ifm-color-secondary-darkest)' }}>●</span>";

module.exports = class Printer {
  constructor(
    schema,
    baseURL,
    linkRoot = "/",
    options = {
      group: undefined,
      printParentType: true,
      printRelatedTypes: true,
    },
  ) {
    this.schema = schema;
    this.baseURL = baseURL;
    this.linkRoot = linkRoot;
    this.group = options.group;
    this.printParentType = options.printParentType ?? true;
    this.printRelatedTypes = options.printRelatedTypes ?? true;
  }

  getLinkCategory(graphLQLNamedType) {
    switch (true) {
      case isEnumType(graphLQLNamedType):
        return "enums";
      case isUnionType(graphLQLNamedType):
        return "unions";
      case isInterfaceType(graphLQLNamedType):
        return "interfaces";
      case isObjectType(graphLQLNamedType):
        return "objects";
      case isInputType(graphLQLNamedType):
        return "inputs";
      case isScalarType(graphLQLNamedType):
        return "scalars";
      case isDirectiveType(graphLQLNamedType):
        return "directives";
      case isOperation(graphLQLNamedType):
        return "operation";
    }
    return undefined;
  }

  toLink(type, name, operation) {
    const fallback = {
      text: name,
      url: "#",
    };

    const graphLQLNamedType = getNamedType(type);

    let category = this.getLinkCategory(graphLQLNamedType);

    if (
      typeof category === "undefined" ||
      typeof graphLQLNamedType === "undefined" ||
      graphLQLNamedType === null
    ) {
      return fallback;
    }

    // special case for support relation map
    if (category === "operation") {
      if (typeof operation === "undefined") {
        return fallback;
      }
      category = operation;
    }

    const text = graphLQLNamedType.name || graphLQLNamedType;
    const group = toSlug(hasProperty(this.group, text) ? this.group[text] : "");
    const url = pathUrl.join(
      this.linkRoot,
      this.baseURL,
      group,
      category,
      toSlug(text),
    );

    return {
      text: text,
      url: url,
    };
  }

  printSection(
    values,
    section,
    { level, parentType } = {
      level: HEADER_SECTION_LEVEL,
      parentType: undefined,
    },
  ) {
    if (values.length === 0) {
      return "";
    }

    if (typeof level === "undefined") {
      level = HEADER_SECTION_LEVEL;
    }

    return `${level} ${section}${MARKDOWN_EOP}${this.printSectionItems(values, {
      parentType,
    })}${MARKDOWN_EOP}`;
  }

  printSectionItems(
    values,
    { level, parentType } = {
      level: HEADER_SECTION_SUB_LEVEL,
      parentType: undefined,
    },
  ) {
    if (!Array.isArray(values)) {
      return "";
    }

    if (typeof level === "undefined") {
      level = HEADER_SECTION_SUB_LEVEL;
    }

    return values
      .map((v) => v && this.printSectionItem(v, { level, parentType }))
      .join(MARKDOWN_EOP);
  }

  printLinkAttributes(type, text) {
    if (typeof type == "undefined") {
      return text ?? "";
    }

    if (!isLeafType(type, text) && typeof type.ofType != "undefined") {
      text = this.printLinkAttributes(type.ofType, text);
    }

    if (isListType(type)) {
      return `[${text}]`;
    }

    if (isNonNullType(type)) {
      return `${text}!`;
    }

    return text;
  }

  printLink(type, withAttributes = false, parentType = undefined) {
    const link = this.toLink(type, getTypeName(type));

    if (!withAttributes) {
      const printParentType =
        this.printParentType && typeof parentType !== "undefined";
      const text = printParentType
        ? `<code style={{ fontWeight: 'normal' }}>${parentType}.<b>${link.text}</b></code>`
        : `\`${link.text}\``;
      return `[${text}](${link.url})`;
    }

    const text = this.printLinkAttributes(type, link.text);

    return `[\`${text}\`](${link.url})`;
  }

  printSectionItem(
    type,
    { level, parentType } = {
      level: HEADER_SECTION_SUB_LEVEL,
      parentType: undefined,
    },
  ) {
    if (typeof type === "undefined" || type === null) {
      return "";
    }

    if (typeof level === "undefined") {
      level = HEADER_SECTION_SUB_LEVEL;
    }

    const typeNameLink = this.printLink(type, false, parentType);
    const description = this.printDescription(type, "");
    const parentTypeLink = hasProperty(type, "type")
      ? ` ${BULLET_SEPARATOR} ${this.printLink(type.type, true)}`
      : "";

    let section = `${level} ${typeNameLink}${parentTypeLink}${MARKDOWN_EOP}${description}${MARKDOWN_EOL}`;
    if (isParametrizedField(type)) {
      section += this.printSectionItems(type.args, {
        level: HEADER_SECTION_ITEM_LEVEL,
        parentType:
          typeof parentType === "undefined"
            ? undefined
            : `${parentType}.${type.name}`,
      });
    }

    return section;
  }

  printCodeEnum(type) {
    if (!isEnumType(type)) {
      return "";
    }

    let code = `enum ${getTypeName(type)} {${MARKDOWN_EOL}`;
    code += type
      .getValues()
      .map((v) => `  ${getTypeName(v)}`)
      .join(MARKDOWN_EOL);
    code += `${MARKDOWN_EOL}}`;

    return code;
  }

  printCodeUnion(type) {
    if (!isUnionType(type)) {
      return "";
    }

    let code = `union ${getTypeName(type)} = `;
    code += type
      .getTypes()
      .map((v) => getTypeName(v))
      .join(" | ");

    return code;
  }

  printCodeScalar(type) {
    return `scalar ${getTypeName(type)}`;
  }

  printCodeArguments(type) {
    if (!hasProperty(type, "args") || type.args.length === 0) {
      return "";
    }

    let code = `(${MARKDOWN_EOL}`;
    code += type.args.reduce((r, v) => {
      const defaultValue = getDefaultValue(v);
      const hasDefaultValue =
        typeof defaultValue !== "undefined" && defaultValue !== null;
      const printedDefault = hasDefaultValue ? ` = ${getDefaultValue(v)}` : "";
      const propType = v.type.toString();
      const propName = v.name.toString();
      return `${r}  ${propName}: ${propType}${printedDefault}${MARKDOWN_EOL}`;
    }, "");
    code += `)`;

    return code;
  }

  printCodeField(type) {
    let code = `${getTypeName(type)}`;
    code += this.printCodeArguments(type);
    code += `: ${getTypeName(type.type)}${MARKDOWN_EOL}`;

    return code;
  }

  printCodeDirective(type) {
    let code = `directive @${getTypeName(type)}`;
    code += this.printCodeArguments(type);

    return code;
  }

  printCodeType(type) {
    let entity;

    switch (true) {
      case isInputType(type):
        entity = "input";
        break;
      case isInterfaceType(type):
        entity = "interface";
        break;
      default:
        entity = "type";
    }

    const name = getTypeName(type);
    const extendsInterface =
      hasMethod(type, "getInterfaces") && type.getInterfaces().length > 0
        ? ` implements ${type
            .getInterfaces()
            .map((field) => getTypeName(field))
            .join(", ")}`
        : "";
    const typeFields = getFields(type)
      .map((v) => `  ${this.printCodeField(v)}`)
      .join("");

    return `${entity} ${name}${extendsInterface} {${MARKDOWN_EOL}${typeFields}}`;
  }

  printHeader(id, title, options) {
    const { toc, pagination } = { toc: true, pagination: true, ...options };
    const pagination_buttons = pagination
      ? ""
      : `pagination_next: null${MARKDOWN_EOL}pagination_prev: null${MARKDOWN_EOL}`;
    return `---${MARKDOWN_EOL}id: ${id}${MARKDOWN_EOL}title: ${title}\nhide_table_of_contents: ${!toc}${MARKDOWN_EOL}${pagination_buttons}---${MARKDOWN_EOL}`;
  }

  printDeprecation(type) {
    if (!type.isDeprecated) {
      return "";
    }

    const reason = type.deprecationReason
      ? ": " + escapeMDX(type.deprecationReason)
      : "";
    return `<span class="badge badge--warning">DEPRECATED${reason}</span>${MARKDOWN_EOP}`;
  }

  printDescription(type, noText = NO_DESCRIPTION_TEXT) {
    const description =
      hasProperty(type, "description") && escapeMDX(type.description);
    return `${this.printDeprecation(type)}${description || noText}`;
  }

  printSpecification(type) {
    if (!type.specifiedByURL && !type.specifiedByUrl) {
      return "";
    }

    const url = type.specifiedByURL || type.specifiedByUrl;

    // Needs newline between "export const specifiedByLinkCss" and markdown header to prevent compilation error in docusaurus
    return `
export const specifiedByLinkCss = { fontSize:'1.5em', paddingLeft:'4px' };

${HEADER_SECTION_LEVEL} Specification<a className="link" style={specifiedByLinkCss} target="_blank" href="${url}" title="Specified by ${url}">⎘</a>${MARKDOWN_EOP}
      `;
  }

  printCode(type) {
    let code = `${MARKDOWN_EOL}\`\`\`graphql${MARKDOWN_EOL}`;
    switch (true) {
      case isOperation(type):
        code += this.printCodeField(type);
        break;
      case isEnumType(type):
        code += this.printCodeEnum(type);
        break;
      case isUnionType(type):
        code += this.printCodeUnion(type);
        break;
      case isInterfaceType(type):
      case isObjectType(type):
      case isInputType(type):
        code += this.printCodeType(type);
        break;
      case isScalarType(type):
        code += this.printCodeScalar(type);
        break;
      case isDirectiveType(type):
        code += this.printCodeDirective(type);
        break;
      default:
        code += `"${getTypeName(type)}" not supported`;
    }
    return code.trim() + `${MARKDOWN_EOL}\`\`\`${MARKDOWN_EOL}`;
  }

  printTypeMetadata(type) {
    let metadata;
    switch (true) {
      case isScalarType(type):
        return this.printSpecification(type);
      case isEnumType(type):
        return this.printSection(type.getValues(), "Values", {
          parentType: type.name,
        });
      case isUnionType(type):
        return this.printSection(type.getTypes(), "Possible types");
      case isObjectType(type):
      case isInterfaceType(type):
      case isInputType(type):
        metadata = this.printSection(getFields(type), "Fields", {
          parentType: type.name,
        });
        if (hasMethod(type, "getInterfaces")) {
          metadata += this.printSection(type.getInterfaces(), "Interfaces");
        }
        return metadata;
      case isDirectiveType(type):
      case isOperation(type):
        metadata = this.printSection(type.args, "Arguments", {
          parentType: type.name,
        });

        if (isOperation(type)) {
          const queryType = getTypeName(type.type).replace(/[![\]]*/g, "");
          metadata += this.printSection(
            [this.schema.getType(queryType)],
            "Type",
          );
        }
        return metadata;
    }
    return metadata;
  }

  printRelations(type) {
    const relations = {
      "Return of": getRelationOfReturn,
      "Field of": getRelationOfField,
      "Implemented by": getRelationOfImplementation,
    };

    let data = "";
    for (const [section, getRelation] of Object.entries(relations)) {
      data += this.printRelationOf(type, section, getRelation);
    }

    return data;
  }

  printRelationOf(type, section, getRelation) {
    if (
      typeof type === "undefined" ||
      typeof getRelation !== "function" ||
      isOperation(type)
    ) {
      return "";
    }

    const relations = getRelation(type, this.schema);

    if (typeof relations === "undefined") {
      return "";
    }

    const getRelationLink = (relation, type) => {
      const operation = isOperation(type) ? relation : undefined;
      const link = this.toLink(type, type.name, operation);
      return `[\`${link.text}\`](${link.url})`;
    };

    let data = "";
    let hasRelation = false;
    for (const [relation, types] of Object.entries(relations)) {
      if (types.length === 0) {
        continue;
      }
      const content = types.map((t) => getRelationLink(relation, t)).join(", ");
      data += `- **${capitalize(relation)}**: ${content}${MARKDOWN_EOL}`;
      hasRelation = true;
    }

    if (!hasRelation) {
      return "";
    }

    return `${HEADER_SECTION_LEVEL} ${section}${MARKDOWN_EOP}${data}${MARKDOWN_EOP}`;
  }

  printType(name, type, options) {
    if (typeof type === "undefined" || type === null) {
      return "";
    }

    const header = this.printHeader(name, getTypeName(type), options);
    const description = this.printDescription(type);
    const code = this.printCode(type);
    const metadata = this.printTypeMetadata(type);
    const relations = this.printRelatedTypes ? this.printRelations(type) : "";

    return `${header}${MARKDOWN_EOP}${description}${MARKDOWN_EOP}${code}${MARKDOWN_EOP}${metadata}${MARKDOWN_EOP}${relations}${MARKDOWN_EOP}`;
  }
};
