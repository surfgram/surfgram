/**
 * RichBlockPullQuotation class for Surfgram Telegram Bot SDK
 * @module types/richBlockPullQuotation
 * @description A quotation with centered text, loosely corresponding to the HTML tag &lt;aside&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockpullquotation Telegram API Documentation}
 * @class RichBlockPullQuotation
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichBlockPullQuotation object from the Telegram Bot API
 * @class RichBlockPullQuotation
 */
export class RichBlockPullQuotation {
  /**
   * Type of the block, always “pullquote”
   * @type { string }
   * @memberof RichBlockPullQuotation
   * @instance
   * @public
   */
  type!: string;

  /**
   * Text of the block
   * @type { RichText }
   * @memberof RichBlockPullQuotation
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Optional. Credit of the block
   * @type { RichText }
   * @memberof RichBlockPullQuotation
   * @instance
   * @public
   */
  credit?: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockPullQuotation
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockPullQuotation
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockPullQuotation instance from raw Telegram API data
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
