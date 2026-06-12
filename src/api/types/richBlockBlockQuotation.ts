/**
 * RichBlockBlockQuotation class for Surfgram Telegram Bot SDK
 * @module types/richBlockBlockQuotation
 * @description A block quotation, corresponding to the HTML tag &lt;blockquote&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockblockquotation Telegram API Documentation}
 * @class RichBlockBlockQuotation
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichBlock } from './richBlock';
import { RichText } from './richText';

/**
 * Represents a RichBlockBlockQuotation object from the Telegram Bot API
 * @class RichBlockBlockQuotation
 */
export class RichBlockBlockQuotation {
  /**
   * Type of the block, always “blockquote”
   * @type { string }
   * @memberof RichBlockBlockQuotation
   * @instance
   * @public
   */
  type!: string;

  /**
   * Content of the block
   * @type { RichBlock[] }
   * @memberof RichBlockBlockQuotation
   * @instance
   * @public
   */
  blocks!: RichBlock[];

  /**
   * Optional. Credit of the block
   * @type { RichText }
   * @memberof RichBlockBlockQuotation
   * @instance
   * @public
   */
  credit?: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockBlockQuotation
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockBlockQuotation
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockBlockQuotation instance from raw Telegram API data
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
