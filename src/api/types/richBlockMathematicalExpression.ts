/**
 * RichBlockMathematicalExpression class for Surfgram Telegram Bot SDK
 * @module types/richBlockMathematicalExpression
 * @description A block with a mathematical expression in LaTeX format, corresponding to the custom HTML tag &lt;tg-math-block&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockmathematicalexpression Telegram API Documentation}
 * @class RichBlockMathematicalExpression
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a RichBlockMathematicalExpression object from the Telegram Bot API
 * @class RichBlockMathematicalExpression
 */
export class RichBlockMathematicalExpression {
  /**
   * Type of the block, always “mathematical\_expression”
   * @type { string }
   * @memberof RichBlockMathematicalExpression
   * @instance
   * @public
   */
  type!: string;

  /**
   * The mathematical expression in LaTeX format
   * @type { string }
   * @memberof RichBlockMathematicalExpression
   * @instance
   * @public
   */
  expression!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockMathematicalExpression
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockMathematicalExpression
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockMathematicalExpression instance from raw Telegram API data
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
