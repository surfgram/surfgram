/**
 * InputRichBlockDocument class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockDocument
 * @description A block with a general file, corresponding to the custom HTML tag &lt;tg-document&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockdocument Telegram API Documentation}
 * @class InputRichBlockDocument
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputMediaDocument } from './inputMediaDocument';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a InputRichBlockDocument object from the Telegram Bot API
 * @class InputRichBlockDocument
 */
export class InputRichBlockDocument {
  /**
   * Type of the block, always “document”
   * @type { string }
   * @memberof InputRichBlockDocument
   * @instance
   * @public
   */
  type!: string;

  /**
   * The document. Caption is ignored.
   * @type { InputMediaDocument }
   * @memberof InputRichBlockDocument
   * @instance
   * @public
   */
  document!: InputMediaDocument;

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof InputRichBlockDocument
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockDocument
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockDocument
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockDocument instance from raw Telegram API data
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
