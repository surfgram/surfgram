/**
 * InputRichBlockMathematicalExpression class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockMathematicalExpression
 * @description A block with a mathematical expression in LaTeX format, corresponding to the custom HTML tag &lt;tg-math-block&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockmathematicalexpression Telegram API Documentation}
 * @class InputRichBlockMathematicalExpression
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputRichBlockMathematicalExpression object from the Telegram Bot API
 * @class InputRichBlockMathematicalExpression
 */
export class InputRichBlockMathematicalExpression {
  /**
   * Type of the block, always “mathematical\_expression”
   * @type { string }
   * @memberof InputRichBlockMathematicalExpression
   * @instance
   * @public
   */
  type!: string;

  /**
   * The mathematical expression in LaTeX format
   * @type { string }
   * @memberof InputRichBlockMathematicalExpression
   * @instance
   * @public
   */
  expression!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockMathematicalExpression
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockMathematicalExpression
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockMathematicalExpression instance from raw Telegram API data
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
