/**
 * RichTextMathematicalExpression class for Surfgram Telegram Bot SDK
 * @module types/richTextMathematicalExpression
 * @description A mathematical expression.
 * @see {@link https://core.telegram.org/bots/api#richtextmathematicalexpression Telegram API Documentation}
 * @class RichTextMathematicalExpression
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a RichTextMathematicalExpression object from the Telegram Bot API
 * @class RichTextMathematicalExpression
 */
export class RichTextMathematicalExpression {
  /**
   * Type of the rich text, always “mathematical\_expression”
   * @type { string }
   * @memberof RichTextMathematicalExpression
   * @instance
   * @public
   */
  type!: string;

  /**
   * The expression in LaTeX format
   * @type { string }
   * @memberof RichTextMathematicalExpression
   * @instance
   * @public
   */
  expression!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextMathematicalExpression
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextMathematicalExpression
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextMathematicalExpression instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(
    raw?: TelegramObject,
    bot?: Bot
  ) {
    this.raw = raw;
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
    this.bot = bot;
  }
}
