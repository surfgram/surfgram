/**
 * RichBlockSectionHeading class for Surfgram Telegram Bot SDK
 * @module types/richBlockSectionHeading
 * @description A section heading, corresponding to the HTML tags &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, or &lt;h6&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblocksectionheading Telegram API Documentation}
 * @class RichBlockSectionHeading
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichBlockSectionHeading object from the Telegram Bot API
 * @class RichBlockSectionHeading
 */
export class RichBlockSectionHeading {
  /**
   * Type of the block, always “heading”
   * @type { string }
   * @memberof RichBlockSectionHeading
   * @instance
   * @public
   */
  type!: string;

  /**
   * Text of the block
   * @type { RichText }
   * @memberof RichBlockSectionHeading
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Relative size of the text font; 1-6, 1 is the largest, 6 is the smallest
   * @type { number }
   * @memberof RichBlockSectionHeading
   * @instance
   * @public
   */
  size!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockSectionHeading
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockSectionHeading
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockSectionHeading instance from raw Telegram API data
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
