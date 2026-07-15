/**
 * InputRichBlockSectionHeading class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockSectionHeading
 * @description A section heading, corresponding to the HTML tags &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, or &lt;h6&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblocksectionheading Telegram API Documentation}
 * @class InputRichBlockSectionHeading
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a InputRichBlockSectionHeading object from the Telegram Bot API
 * @class InputRichBlockSectionHeading
 */
export class InputRichBlockSectionHeading {
  /**
   * Type of the block, always “heading”
   * @type { string }
   * @memberof InputRichBlockSectionHeading
   * @instance
   * @public
   */
  type!: string;

  /**
   * Text of the block
   * @type { RichText }
   * @memberof InputRichBlockSectionHeading
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Relative size of the text font; 1-6, 1 is the largest, 6 is the smallest
   * @type { number }
   * @memberof InputRichBlockSectionHeading
   * @instance
   * @public
   */
  size!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockSectionHeading
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockSectionHeading
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockSectionHeading instance from raw Telegram API data
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
