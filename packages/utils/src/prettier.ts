/**
 * Internal library for prettifying files using `prettier`.
 *
 * @packageDocumentation
 */

/* istanbul ignore file */

import { Logger } from "./logger";

const logger = Logger();

/**
 * Prettify a string using {@link https://prettier.io/docs/en/api#prettierformatsource-options | prettier.format}.
 *
 * @remarks
 * This function logs a warning message on error.
 *
 * @internal
 *
 * @see https://prettier.io/docs/en/options#parser for the list of parsers.
 *
 * @param content - the string to be prettified.
 * @param parser - the `prettier` parser to use.
 *
 * @returns a prettified string, or undefined if an error occurred.
 *
 */
export async function prettify(
  content: string,
  parser: string,
): Promise<string | undefined> {
  try {
    const { format } = await import("prettier");
    return await format(content, { parser });
  } catch (error: unknown) {
    logger.warn("Prettier is not found");
    return undefined;
  }
}

/**
 * Prettify a Markdown string using {@link prettify} and `markdown` parser.
 *
 * @remarks
 * Same as `prettify(content, "markdown")`.
 *
 * @internal
 *
 * @param content - the string to be prettified.
 *
 * @returns a prettified string, or undefined if an error occurred.
 *
 */
export async function prettifyMarkdown(
  content: string,
): Promise<string | undefined> {
  return prettify(content, "markdown");
}

/**
 * Prettify a Javascript string using {@link prettify} and `babel` parser.
 *
 * @remarks
 * Same as `prettify(content, "babel")`.
 *
 * @see prettify
 *
 * @internal
 *
 * @param content - the string to be prettified.
 *
 * @returns a prettified string, or undefined if an error occurred.
 *
 */
export async function prettifyJavascript(
  content: string,
): Promise<string | undefined> {
  return prettify(content, "babel");
}
