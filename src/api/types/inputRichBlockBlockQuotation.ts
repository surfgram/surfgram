/**
 * InputRichBlockBlockQuotation class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockBlockQuotation
 * @description A block quotation, corresponding to the HTML tag &lt;blockquote&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockblockquotation Telegram API Documentation}
 * @class InputRichBlockBlockQuotation
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputRichBlock } from './inputRichBlock';
import { RichText } from './richText';

/**
 * Represents a InputRichBlockBlockQuotation object from the Telegram Bot API
 * @class InputRichBlockBlockQuotation
 */
export class InputRichBlockBlockQuotation {
  /**
   * Type of the block, always “blockquote”
   * @type { string }
   * @memberof InputRichBlockBlockQuotation
   * @instance
   * @public
   */
  type!: string;

  /**
   * Content of the block
   * @type { InputRichBlock[] }
   * @memberof InputRichBlockBlockQuotation
   * @instance
   * @public
   */
  blocks!: InputRichBlock[];

  /**
   * Optional. Credit of the block
   * @type { RichText }
   * @memberof InputRichBlockBlockQuotation
   * @instance
   * @public
   */
  credit?: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockBlockQuotation
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockBlockQuotation
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockBlockQuotation instance from raw Telegram API data
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
