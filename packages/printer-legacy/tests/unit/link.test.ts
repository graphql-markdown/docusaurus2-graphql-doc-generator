import type { GraphQLNamedType } from "graphql";
import {
  GraphQLList,
  GraphQLDirective,
  GraphQLObjectType,
  GraphQLScalarType,
} from "graphql";

import type { PrintLinkOptions, TypeLocale } from "@graphql-markdown/types";

import * as Utils from "@graphql-markdown/utils";
jest.mock("@graphql-markdown/utils", () => {
  return {
    slugify: jest.fn(),
    pathUrl: jest.requireActual("path").posix,
  };
});
const mockUtils = jest.mocked(Utils);

import * as GraphQL from "@graphql-markdown/graphql";
jest.mock("@graphql-markdown/graphql", () => {
  return {
    hasDirective: jest.fn(),
    getTypeName: jest.fn(),
    getNamedType: jest.fn(),
    isOperation: jest.fn(),
    isEnumType: jest.fn(),
    isUnionType: jest.fn(),
    isInterfaceType: jest.fn(),
    isObjectType: jest.fn(),
    isInputType: jest.fn(),
    isScalarType: jest.fn(),
    isDirectiveType: jest.fn(),
    isLeafType: jest.fn(),
    isListType: jest.fn(),
    isNonNullType: jest.fn(),
    isDeprecated: jest.fn(),
  };
});
const mockGraphQL = jest.mocked(GraphQL);

import { DEFAULT_OPTIONS } from "../../src/const/options";

import * as Group from "../../src/group";
jest.mock("../../src/group", () => {
  return {
    getGroup: jest.fn(() => {
      return "";
    }),
  };
});
const mockGroup = jest.mocked(Group);

import * as Link from "../../src/link";
import * as Common from "../../src/common";

describe("link", () => {
  const basePath: string = "docs/graphql";

  enum TypeGuard {
    DIRECTIVE = "isDirectiveType",
    ENUM = "isEnumType",
    INPUT = "isInputType",
    INTERFACE = "isInterfaceType",
    OBJECT = "isObjectType",
    SCALAR = "isScalarType",
    UNION = "isUnionType",
    OPERATION = "isOperation",
  }

  const types = [
    {
      name: "Directive",
      guard: TypeGuard.DIRECTIVE,
    },
    {
      name: "Enum",
      guard: TypeGuard.ENUM,
    },
    {
      name: "Input",
      guard: TypeGuard.INPUT,
    },
    {
      name: "Interface",
      guard: TypeGuard.INTERFACE,
    },
    {
      name: "Object",
      guard: TypeGuard.OBJECT,
    },
    {
      name: "Scalar",
      guard: TypeGuard.SCALAR,
    },
    {
      name: "Union",
      guard: TypeGuard.UNION,
    },
    {
      name: "Operation",
      guard: TypeGuard.OPERATION,
      operation: { singular: "query", plural: "queries" } as TypeLocale,
    },
  ];

  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  describe("getLinkCategory()", () => {
    test.each(types)(
      "returns a category object matching the graphLQLNamedType $name",
      ({ guard }) => {
        expect.assertions(1);

        jest.spyOn(Common, "hasPrintableDirective").mockReturnValue(true);

        mockGraphQL[guard].mockReturnValueOnce(true);

        const category = Link.getLinkCategory(
          {} as unknown as GraphQLNamedType,
        );

        expect(category).toMatchSnapshot();
      },
    );

    test("returns undefined if unknown", () => {
      expect.assertions(1);

      const category = Link.getLinkCategory({} as unknown as GraphQLNamedType);

      expect(category).toBeUndefined();
    });
  });

  describe("toLink()", () => {
    beforeEach(() => {
      mockGroup.getGroup.mockReturnValue("");
      jest.spyOn(Common, "hasPrintableDirective").mockReturnValue(true);
    });

    test.each(types)(
      "returns markdown link for GraphQL $name",
      ({ name, guard, operation }) => {
        expect.hasAssertions();

        const entityName = `Test${name}`;
        const slug = `test-${name.toLowerCase()}`;
        const type = new GraphQLDirective({
          name: entityName,
          locations: [],
        });

        mockGraphQL.getNamedType.mockReturnValue(
          entityName as unknown as GraphQLNamedType,
        );
        mockGraphQL[guard].mockReturnValue(true);
        mockUtils.slugify.mockReturnValueOnce(slug);

        const link = Link.toLink(type, entityName, operation, {
          ...DEFAULT_OPTIONS,
          basePath,
        });

        expect(link).toMatchSnapshot();
      },
    );

    test("returns markdown link surrounded by [] for GraphQL list/array", () => {
      expect.hasAssertions();

      const entityName = "TestObjectList";
      const slug = "test-object-list";
      const type = new GraphQLList(
        new GraphQLObjectType({
          name: entityName,
          fields: {},
        }),
      );

      mockGraphQL.getNamedType.mockReturnValue(
        entityName as unknown as GraphQLNamedType,
      );
      mockGraphQL.isObjectType.mockReturnValue(true);
      mockUtils.slugify.mockReturnValueOnce(slug);

      const link = Link.toLink(type, entityName, undefined, {
        ...DEFAULT_OPTIONS,
        basePath,
      });

      expect(link).toMatchInlineSnapshot(`
        {
          "text": "TestObjectList",
          "url": "docs/graphql/objects/test-object-list",
        }
      `);
    });

    test("returns plain text for unknown entities", () => {
      expect.hasAssertions();

      const type = "any";
      const entityName = "fooBar";

      const link = Link.toLink(type, entityName, undefined, {
        ...DEFAULT_OPTIONS,
        basePath,
      });

      expect(link).toMatchInlineSnapshot(`
        {
          "text": "fooBar",
          "url": "#",
        }
      `);
    });

    test("returns plain text for type without printable directive", () => {
      expect.hasAssertions();

      const entityName = `Test`;
      const type = new GraphQLDirective({
        name: entityName,
        locations: [],
      });

      mockGraphQL.getNamedType.mockReturnValue(
        entityName as unknown as GraphQLNamedType,
      );
      mockGraphQL[TypeGuard.DIRECTIVE].mockReturnValue(true);
      jest.spyOn(Common, "hasPrintableDirective").mockReturnValueOnce(false);

      const link = Link.toLink(type, entityName, undefined, {
        ...DEFAULT_OPTIONS,
        basePath,
      });

      expect(link).toMatchInlineSnapshot(`
        {
          "text": "Test",
          "url": "#",
        }
      `);
    });

    test("returns markdown link with group in path", () => {
      expect.hasAssertions();

      const entityName = `TestDirective`;
      const slug = `test-directive`;
      const type = new GraphQLDirective({
        name: entityName,
        locations: [],
      });

      mockGraphQL.getNamedType.mockReturnValue(
        entityName as unknown as GraphQLNamedType,
      );
      mockGraphQL.isDirectiveType.mockReturnValue(true);
      mockUtils.slugify.mockReturnValueOnce(slug);
      mockGroup.getGroup.mockReturnValueOnce("group");

      const link = Link.toLink(type, entityName, undefined, {
        ...DEFAULT_OPTIONS,
        basePath,
        groups: {},
      });

      expect(link).toMatchInlineSnapshot(`
        {
          "text": "TestDirective",
          "url": "docs/graphql/group/directives/test-directive",
        }
      `);
    });

    test("returns markdown link with deprecated in path", () => {
      expect.hasAssertions();

      const entityName = `TestDirective`;
      const slug = `test-directive`;
      const type = new GraphQLDirective({
        name: entityName,
        locations: [],
      });

      mockGraphQL.getNamedType.mockReturnValue(
        entityName as unknown as GraphQLNamedType,
      );
      mockGraphQL.isDirectiveType.mockReturnValue(true);
      mockUtils.slugify.mockReturnValueOnce(slug);
      mockGraphQL.isDeprecated.mockReturnValue(true);

      const link = Link.toLink(type, entityName, undefined, {
        ...DEFAULT_OPTIONS,
        deprecated: "group",
        basePath,
      });

      expect(link).toMatchInlineSnapshot(`
        {
          "text": "TestDirective",
          "url": "docs/graphql/deprecated/directives/test-directive",
        }
      `);
    });
  });

  describe("printLinkAttributes()", () => {
    test.each([[null], [undefined]])(
      "returns default text when set if type is %p",
      (value) => {
        expect.hasAssertions();

        const text = "foobar";

        expect(Link.printLinkAttributes(value, text)).toBe(text);
      },
    );

    test.each([[null], [undefined]])(
      "returns empty text if type is %p",
      (value) => {
        expect.hasAssertions();

        expect(Link.printLinkAttributes(value)).toBe("");
      },
    );

    test("calls recursively if not a leaf node", () => {
      expect.hasAssertions();

      mockGraphQL.isLeafType.mockReturnValueOnce(false);

      const type = { ofType: "test" };
      const text = "baz";

      const result = Link.printLinkAttributes(type, text);

      expect(result).toBe(text);
    });

    test("returns a format [text] if type is list", () => {
      expect.hasAssertions();

      mockGraphQL.isListType.mockReturnValueOnce(true);

      const type = { ofType: "test" };
      const text = "baz";

      const result = Link.printLinkAttributes(type, text);

      expect(result).toBe(`[${text}]`);
    });

    test("returns a format text! if type is non-null", () => {
      expect.hasAssertions();

      mockGraphQL.isNonNullType.mockReturnValueOnce(true);

      const type = { ofType: "test" };
      const text = "baz";

      const result = Link.printLinkAttributes(type, text);

      expect(result).toBe(`${text}!`);
    });
  });

  describe("printLink()", () => {
    test("returns formatted markdown link", () => {
      expect.hasAssertions();

      jest.spyOn(Link, "toLink").mockReturnValue({ text: "foo", url: "/bar" });
      jest.spyOn(Link, "hasOptionWithAttributes").mockReturnValue(false);
      jest.spyOn(Link, "hasOptionParentType").mockReturnValue(false);

      const result = Link.printLink({}, DEFAULT_OPTIONS);

      expect(result).toBe("[`foo`](/bar)");
    });

    test("returns formatted markdown link parentType", () => {
      expect.hasAssertions();

      jest.spyOn(Link, "toLink").mockReturnValue({ text: "foo", url: "/bar" });
      jest.spyOn(Link, "hasOptionWithAttributes").mockReturnValue(false);
      jest.spyOn(Link, "hasOptionParentType").mockReturnValue(true);

      const result = Link.printLink(
        {},
        { ...DEFAULT_OPTIONS, parentTypePrefix: true, parentType: "baz" },
      );

      expect(result).toBe(
        "[<code style={{ fontWeight: 'normal' }}>baz.<b>foo</b></code>](/bar)",
      );
    });

    test("returns formatted markdown link withAttributes", () => {
      expect.hasAssertions();

      jest.spyOn(Link, "toLink").mockReturnValue({ text: "foo", url: "/bar" });
      jest.spyOn(Link, "hasOptionWithAttributes").mockReturnValue(true);
      jest.spyOn(Link, "printLinkAttributes").mockReturnValue("barfoo");

      const result = Link.printLink(
        {},
        { ...DEFAULT_OPTIONS, withAttributes: true },
      );

      expect(result).toBe("[`barfoo`](/bar)");
    });
  });

  describe("hasOptionWithAttributes()", () => {
    test("returns false when options has no prop withAttributes", () => {
      expect.hasAssertions();

      expect(
        Link.hasOptionWithAttributes({} as unknown as PrintLinkOptions),
      ).toBeFalsy();
    });

    test("returns false when options withAttributes is false", () => {
      expect.hasAssertions();

      expect(
        Link.hasOptionWithAttributes({
          ...DEFAULT_OPTIONS,
          withAttributes: false,
        }),
      ).toBeFalsy();
    });

    test("returns true when options withAttributes is true", () => {
      expect.hasAssertions();

      expect(
        Link.hasOptionWithAttributes({
          ...DEFAULT_OPTIONS,
          withAttributes: true,
        }),
      ).toBeTruthy();
    });
  });

  describe("hasOptionParentType()", () => {
    test("returns false when options has no prop parentTypePrefix", () => {
      expect.hasAssertions();

      expect(
        Link.hasOptionParentType({} as unknown as PrintLinkOptions),
      ).toBeFalsy();
    });

    test("returns false when options parentTypePrefix is false", () => {
      expect.hasAssertions();

      expect(
        Link.hasOptionParentType({
          ...DEFAULT_OPTIONS,
          parentTypePrefix: false,
          parentType: "not null",
        }),
      ).toBeFalsy();
    });

    test("returns false when options has no prop parentType", () => {
      expect.hasAssertions();

      expect(
        Link.hasOptionParentType({
          parentTypePrefix: true,
        } as unknown as PrintLinkOptions),
      ).toBeFalsy();
    });

    test("returns false when options parentType is %p", () => {
      expect.hasAssertions();

      expect(
        Link.hasOptionParentType({
          ...DEFAULT_OPTIONS,
          parentTypePrefix: true,
          parentType: undefined,
        }),
      ).toBeFalsy();
    });

    test("returns true when options parentTypePrefix is true with parentType defined", () => {
      expect.hasAssertions();

      expect(
        Link.hasOptionParentType({
          ...DEFAULT_OPTIONS,
          parentTypePrefix: true,
          parentType: "not null",
        }),
      ).toBeTruthy();
    });
  });

  describe("printParentLink()", () => {
    test("returns a MDX Bullet component with parent link if type defined", () => {
      expect.hasAssertions();

      jest.spyOn(Link, "printLink").mockReturnValueOnce("[`foo`](/bar)");

      expect(
        Link.printParentLink({ type: "foo" }, DEFAULT_OPTIONS),
      ).toMatchInlineSnapshot(`"<Bullet />[\`foo\`](/bar)"`);
    });

    test("returns an empty string if parent link undefined", () => {
      expect.hasAssertions();

      expect(Link.printParentLink({}, DEFAULT_OPTIONS)).toBe("");
    });
  });

  describe("getRelationLink()", () => {
    test("returns a link object from a relation type", () => {
      expect.hasAssertions();

      const entityName = "TestScalar";
      const slug = "test-scalar";
      const type = new GraphQLScalarType({
        name: entityName,
      });

      jest.spyOn(Common, "hasPrintableDirective").mockReturnValue(true);

      mockGraphQL.getNamedType.mockReturnValue(
        entityName as unknown as GraphQLNamedType,
      );
      mockGraphQL.isScalarType.mockReturnValue(true);
      mockUtils.slugify.mockReturnValue(slug);

      const link = Link.getRelationLink("foo", type, {
        ...DEFAULT_OPTIONS,
        basePath: "docs/graphql",
      });

      expect(link).toStrictEqual({
        text: "TestScalar",
        url: "docs/graphql/scalars/test-scalar",
      });
    });

    test("returns undefined if category not defined", () => {
      expect.hasAssertions();

      const entityName = "TestScalar";
      const slug = "test-scalar";
      const type = new GraphQLScalarType({
        name: entityName,
      });

      mockGraphQL.getNamedType.mockReturnValue(
        entityName as unknown as GraphQLNamedType,
      );
      mockGraphQL.isScalarType.mockReturnValue(true);
      mockUtils.slugify.mockReturnValue(slug);

      const link = Link.getRelationLink(undefined, type, {
        ...DEFAULT_OPTIONS,
        basePath: "docs/graphql",
      });

      expect(link).toBeUndefined();
    });
  });
});
