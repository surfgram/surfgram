/**
 * InputRichBlockExpandableBlockQuotation class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockExpandableBlockQuotation
 * @description A block quotation, corresponding to the HTML tag &lt;blockquote&gt; with custom attribute &quot;collapsed&quot;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockexpandableblockquotation Telegram API Documentation}
 * @class InputRichBlockExpandableBlockQuotation
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a InputRichBlockExpandableBlockQuotation object from the Telegram Bot API
 * @class InputRichBlockExpandableBlockQuotation
 */
export class InputRichBlockExpandableBlockQuotation {
  /**
   * Type of the block, always “expandable\_blockquote”
   * @type { string }
   * @memberof InputRichBlockExpandableBlockQuotation
   * @instance
   * @public
   */
  type!: string;

  /**
   * Content of the block
   * @type { RichText }
   * @memberof InputRichBlockExpandableBlockQuotation
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Optional. Credit of the block
   * @type { RichText }
   * @memberof InputRichBlockExpandableBlockQuotation
   * @instance
   * @public
   */
  credit?: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockExpandableBlockQuotation
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockExpandableBlockQuotation
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockExpandableBlockQuotation instance from raw Telegram API data
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
