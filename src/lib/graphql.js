const {
  GraphQLEnumType,
  GraphQLUnionType,
  GraphQLScalarType,
  isListType,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLFloat,
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLInputObjectType,
  isDirective: isDirectiveType,
  getNamedType,
  isScalarType,
  isEnumType,
  isUnionType,
  isInterfaceType,
  isObjectType,
  isInputObjectType: isInputType,
  isNullableType,
  printSchema,
} = require("graphql");
const { loadSchema } = require("@graphql-tools/load");

const { hasMethod, hasProperty } = require("../utils/scalars/object");

const SCHEMA_EXCLUDE_LIST_PATTERN =
  /^(?!Query$|Mutation$|Subscription$|__.+$).*$/;

const DefaultLoaders = {
  GraphQLFileLoader: "@graphql-tools/graphql-file-loader",
};

function getDocumentLoaders(extraLoaders = {}) {
  const loadersList = { ...DefaultLoaders, ...extraLoaders };

  var loaders = [];
  var loaderOptions = {};

  Object.entries(loadersList).forEach(([className, graphqlDocumentLoader]) => {
    try {
      if (typeof graphqlDocumentLoader === "string") {
        const { [className]: Loader } = require(graphqlDocumentLoader);
        loaders.push(new Loader());
      } else {
        if (!graphqlDocumentLoader.module) {
          throw new Error(
            `Wrong format for plugin loader "${className}", it should be {module: String, options?: Object}`,
          );
        }
        const { [className]: Loader } = require(graphqlDocumentLoader.module);
        loaders.push(new Loader());
        Object.assign(loaderOptions, graphqlDocumentLoader.options);
      }
    } catch (error) {
      console.warn(graphqlDocumentLoader, error.message);
    }
  });

  if (loaders.length < 1) {
    throw new Error("No GraphQL document loaders available.");
  }

  return { loaders, loaderOptions };
}

function getListDefaultValues(type, value) {
  const defaultValues = Array.isArray(value) ? value : [value];

  const defaultValuesString = defaultValues.map((defaultValue) =>
    getDefaultValue({ type, defaultValue }),
  );

  return `[${defaultValuesString.join(", ")}]`;
}

function getDefaultValue({ type, defaultValue }) {
  if (defaultValue === null || typeof defaultValue === "undefined") {
    return undefined;
  }

  if (isListType(type)) {
    return getListDefaultValues(getNamedType(type), defaultValue);
  }

  return formatDefaultValue(type, defaultValue);
}

function formatDefaultValue(type, defaultValue) {
  if (isEnumType(type)) {
    return defaultValue;
  }

  switch (type) {
    case GraphQLInt:
    case GraphQLFloat:
    case GraphQLBoolean:
      return defaultValue;
    case GraphQLID:
    case GraphQLString:
      return `"${defaultValue}"`;
    default:
      return defaultValue;
  }
}

function getFilteredTypeMap(
  typeMap,
  excludeList = SCHEMA_EXCLUDE_LIST_PATTERN,
) {
  if (typeof typeMap == "undefined" || typeMap == null) {
    return undefined;
  }
  return Object.keys(typeMap)
    .filter((key) => excludeList.test(key))
    .reduce((res, key) => ({ ...res, [key]: typeMap[key] }), {});
}

function getIntrospectionFieldsList(queryType) {
  if (
    typeof queryType == "undefined" ||
    queryType == null ||
    !hasMethod(queryType, "getFields")
  ) {
    return undefined;
  }
  return queryType.getFields();
}

function getFields(type) {
  if (!hasMethod(type, "getFields")) {
    return [];
  }
  const fieldMap = type.getFields();
  return Object.keys(fieldMap).map((name) => fieldMap[name]);
}

function getTypeName(type, defaultName = "") {
  switch (true) {
    case hasProperty(type, "name"):
      return type.name;
    case hasMethod(type, "toString"):
      return type.toString();
    case typeof type === "undefined":
    case type == null:
    default:
      return defaultName;
  }
}

function getTypeFromTypeMap(typeMap, type) {
  if (typeof typeMap == "undefined" || typeMap == null) {
    return undefined;
  }
  return Object.keys(typeMap)
    .filter((key) => typeMap[key] instanceof type)
    .reduce((res, key) => ({ ...res, [key]: typeMap[key] }), {});
}

function getSchemaMap(schema) {
  const typeMap = getFilteredTypeMap(schema.getTypeMap());
  return {
    queries: getIntrospectionFieldsList(
      schema.getQueryType && schema.getQueryType(),
    ),
    mutations: getIntrospectionFieldsList(
      schema.getMutationType && schema.getMutationType(),
    ),
    subscriptions: getIntrospectionFieldsList(
      schema.getSubscriptionType && schema.getSubscriptionType(),
    ),
    directives: schema.getDirectives(),
    objects: getTypeFromTypeMap(typeMap, GraphQLObjectType),
    unions: getTypeFromTypeMap(typeMap, GraphQLUnionType),
    interfaces: getTypeFromTypeMap(typeMap, GraphQLInterfaceType),
    enums: getTypeFromTypeMap(typeMap, GraphQLEnumType),
    inputs: getTypeFromTypeMap(typeMap, GraphQLInputObjectType),
    scalars: getTypeFromTypeMap(typeMap, GraphQLScalarType),
  };
}

function isParametrizedField(type) {
  return hasProperty(type, "args") && type.args.length > 0;
}

function isOperation(type) {
  return hasProperty(type, "type");
}

module.exports = {
  loadSchema,
  getDocumentLoaders,
  isDirectiveType,
  isObjectType,
  getNamedType,
  isScalarType,
  isEnumType,
  isUnionType,
  getSchemaMap,
  getTypeName,
  isParametrizedField,
  getFields,
  getDefaultValue,
  isOperation,
  isInterfaceType,
  isInputType,
  isNullableType,
  isListType,
  printSchema,
  getFilteredTypeMap,
  getIntrospectionFieldsList,
  getTypeFromTypeMap,
  SCHEMA_EXCLUDE_LIST_PATTERN,
};
