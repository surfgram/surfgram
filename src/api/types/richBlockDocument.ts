/**
 * RichBlockDocument class for Surfgram Telegram Bot SDK
 * @module types/richBlockDocument
 * @description A block with a general file, corresponding to the custom HTML tag &lt;tg-document&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockdocument Telegram API Documentation}
 * @class RichBlockDocument
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Document } from './document';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a RichBlockDocument object from the Telegram Bot API
 * @class RichBlockDocument
 */
export class RichBlockDocument {
  /**
   * Type of the block, always “document”
   * @type { string }
   * @memberof RichBlockDocument
   * @instance
   * @public
   */
  type!: string;

  /**
   * The document
   * @type { Document }
   * @memberof RichBlockDocument
   * @instance
   * @public
   */
  document!: Document;

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof RichBlockDocument
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockDocument
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockDocument
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockDocument instance from raw Telegram API data
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
