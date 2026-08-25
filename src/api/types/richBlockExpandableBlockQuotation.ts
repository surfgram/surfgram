/**
 * RichBlockExpandableBlockQuotation class for Surfgram Telegram Bot SDK
 * @module types/richBlockExpandableBlockQuotation
 * @description A block quotation, corresponding to the HTML tag &lt;blockquote&gt; with custom attribute &quot;collapsed&quot;.
 * @see {@link https://core.telegram.org/bots/api#richblockexpandableblockquotation Telegram API Documentation}
 * @class RichBlockExpandableBlockQuotation
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichBlockExpandableBlockQuotation object from the Telegram Bot API
 * @class RichBlockExpandableBlockQuotation
 */
export class RichBlockExpandableBlockQuotation {
  /**
   * Type of the block, always “expandable\_blockquote”
   * @type { string }
   * @memberof RichBlockExpandableBlockQuotation
   * @instance
   * @public
   */
  type!: string;

  /**
   * Content of the block
   * @type { RichText }
   * @memberof RichBlockExpandableBlockQuotation
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Optional. Credit of the block
   * @type { RichText }
   * @memberof RichBlockExpandableBlockQuotation
   * @instance
   * @public
   */
  credit?: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockExpandableBlockQuotation
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockExpandableBlockQuotation
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockExpandableBlockQuotation instance from raw Telegram API data
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
