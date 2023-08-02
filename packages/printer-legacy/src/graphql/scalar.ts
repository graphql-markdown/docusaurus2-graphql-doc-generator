import type { PrintTypeOptions, MDXString } from "@graphql-markdown/types";

import { getTypeName } from "@graphql-markdown/utils";

import { MARKDOWN_EOP } from "../const/strings";
import { SectionLevels } from "../const/options";

export const printSpecification = (type: unknown): string | MDXString => {
  if (
    typeof type !== "object" ||
    type === null ||
    !("specifiedByURL" in type) ||
    !type.specifiedByURL
  ) {
    return "";
  }

  const url = type.specifiedByURL;

  // Needs newline between "export const specifiedByLinkCss" and markdown header to prevent compilation error in docusaurus
  return `${SectionLevels.LEVEL_3} <SpecifiedBy url="${url}"/>${MARKDOWN_EOP}` as MDXString;
};

export const printScalarMetadata = (type: unknown): string | MDXString => {
  return printSpecification(type);
};

export const printCodeScalar = (
  type: unknown,
  options?: PrintTypeOptions, // eslint-disable-line @typescript-eslint/no-unused-vars
): string => {
  return `scalar ${getTypeName(type)}`;
};
