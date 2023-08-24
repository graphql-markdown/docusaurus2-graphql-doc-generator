import type {
  GraphQLDirective,
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLUnionType,
  GraphQLFieldMap,
  GraphQLInputFieldMap,
  GraphQLDirective,
  GraphQLNamedType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLUnionType,
  ObjectTypeDefinitionNode,
} from "graphql";

import type { BaseLoaderOptions } from "@graphql-tools/utils";

import type {
  ConfigOptions,
  GraphQLOperationType,
  GraphQLProjectConfig,
  Maybe,
} from ".";

export type CustomDirectiveFunction = <T>(
  directive?: GraphQLDirective,
  node?: unknown,
) => T;

export type CustomDirectiveResolver = "descriptor" | "tag";

export type CustomDirectiveOptions = {
  [name in CustomDirectiveResolver]?: CustomDirectiveFunction;
};

export type CustomDirective = {
  [name: DirectiveName]: CustomDirectiveOptions;
};

export type DirectiveName = string & { _opaque: typeof DirectiveName };
declare const DirectiveName: unique symbol;

export type CustomDirectiveMapItem = CustomDirectiveOptions & {
  type: GraphQLDirective;
};

export type CustomDirectiveMap = {
  [name: DirectiveName]: CustomDirectiveMapItem;
};

export type GroupByDirectiveOptions = {
  directive: DirectiveName;
  field: string;
  fallback?: string;
};

export type SchemaEntitiesGroupMap = Partial<
  Record<SchemaEntity, Record<string, Maybe<string>>>
>;

export type LoaderOption = {
  [name: ClassName]: PackageConfig | PackageName;
};

export type PackageOptionsConfig = BaseLoaderOptions & RootTypes;

export type PackageConfig = {
  module: PackageName;
  options?: PackageOptionsConfig;
};

export type RootTypes = {
  query?: string;
  mutation?: string;
  subscription?: string;
};

export type PackageName = string & { _opaque: typeof PackageName };
declare const PackageName: unique symbol;

export type ClassName = string & { _opaque: typeof ClassName };
declare const ClassName: unique symbol;

export type SchemaEntity =
  | "directives"
  | "enums"
  | "inputs"
  | "interfaces"
  | "mutations"
  | "objects"
  | "queries"
  | "scalars"
  | "subscriptions"
  | "unions";

export type SchemaMap = {
  queries?: Maybe<Record<string, GraphQLOperationType>>;
  mutations?: Maybe<Record<string, GraphQLOperationType>>;
  subscriptions?: Maybe<Record<string, GraphQLOperationType>>;
  directives?: Maybe<Record<string, GraphQLDirective>>;
  objects?: Maybe<Record<string, GraphQLObjectType<unknown, unknown>>>;
  unions?: Maybe<Record<string, GraphQLUnionType>>;
  interfaces?: Maybe<Record<string, GraphQLInterfaceType>>;
  enums?: Maybe<Record<string, GraphQLEnumType>>;
  inputs?: Maybe<Record<string, GraphQLInputObjectType>>;
  scalars?: Maybe<Record<string, GraphQLScalarType<unknown, unknown>>>;
};

export type IGetRelation<T> = (
  type: unknown,
  schemaMap: Maybe<SchemaMap>,
) => Partial<Record<SchemaEntity, T[]>>;

type LogLevel = "debug" | "error" | "info" | "log" | "success" | "warn";
export type LoggerType = {
  _log: (message: string, level?: LogLevel) => void;
  instance: {
    [level in LogLevel]?: (...unknown) => void;
  };
};

export type Category = { category: string; slug: string };

export type MDXString = string & { _opaque: typeof MDXString };
declare const MDXString: unique symbol;

export type GraphQLOperationType =
  | GraphQLFieldMap<unknown, unknown>
  | GraphQLInputFieldMap
  | Record<string, never>;

export type RelationOfField =
  | GraphQLDirective
  | GraphQLNamedType
  | GraphQLOperationType;
export type RelationOfInterface = GraphQLInterfaceType | GraphQLObjectType;
export type RelationOfImplementation = GraphQLUnionType | RelationOfInterface;

export type PrettifyCallbackFunction = (
  text: string,
  options?: unknown,
) => Promise<Maybe<string>>;

export type DeprecatedType<T> = Partial<{
  deprecationReason: string;
  isDeprecated: boolean;
}> &
  T;

export type AstNodeType<T> = Required<{
  astNode: ObjectTypeDefinitionNode;
}> &
  T;

type Writeable<T> = {
  -readonly [P in keyof T]: T[P];
};

export type ExtensionProjectConfig = Omit<ConfigOptions, "schema"> &
  Writeable<GraphQLProjectConfig>;

export type { LoadSchemaOptions } from "@graphql-tools/load";
