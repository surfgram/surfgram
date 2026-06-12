/**
 * RichBlockParagraph class for Surfgram Telegram Bot SDK
 * @module types/richBlockParagraph
 * @description A text paragraph, corresponding to the HTML tag &lt;p&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockparagraph Telegram API Documentation}
 * @class RichBlockParagraph
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichBlockParagraph object from the Telegram Bot API
 * @class RichBlockParagraph
 */
export class RichBlockParagraph {
  /**
   * Type of the block, always “paragraph”
   * @type { string }
   * @memberof RichBlockParagraph
   * @instance
   * @public
   */
  type!: string;

  /**
   * Text of the block
   * @type { RichText }
   * @memberof RichBlockParagraph
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockParagraph
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockParagraph
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockParagraph instance from raw Telegram API data
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
