/**
 * InlineQueryResultContact class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultContact
 * @description Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the contact.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcontact Telegram API Documentation}
 * @class InlineQueryResultContact
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';
import { InputMessageContent } from './inputMessageContent';

/**
 * Represents a InlineQueryResultContact object from the Telegram Bot API
 * @class InlineQueryResultContact
 */
export class InlineQueryResultContact {
  /**
   * Type of the result, must be contact
   * @type { string }
   * @memberof InlineQueryResultContact
   * @instance
   * @public
   */
  type!: string;

  /**
   * Unique identifier for this result, 1-64 Bytes
   * @type { string }
   * @memberof InlineQueryResultContact
   * @instance
   * @public
   */
  id!: string;

  /**
   * Contact's phone number
   * @type { string }
   * @memberof InlineQueryResultContact
   * @instance
   * @public
   */
  phoneNumber!: string;

  /**
   * Contact's first name
   * @type { string }
   * @memberof InlineQueryResultContact
   * @instance
   * @public
   */
  firstName!: string;

  /**
   * Optional. Contact's last name
   * @type { string }
   * @memberof InlineQueryResultContact
   * @instance
   * @public
   */
  lastName?: string;

  /**
   * Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
   * @type { string }
   * @memberof InlineQueryResultContact
   * @instance
   * @public
   */
  vcard?: string;

  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultContact
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the contact
   * @type { InputMessageContent }
   * @memberof InlineQueryResultContact
   * @instance
   * @public
   */
  inputMessageContent?: InputMessageContent;

  /**
   * Optional. Url of the thumbnail for the result
   * @type { string }
   * @memberof InlineQueryResultContact
   * @instance
   * @public
   */
  thumbnailUrl?: string;

  /**
   * Optional. Thumbnail width
   * @type { number }
   * @memberof InlineQueryResultContact
   * @instance
   * @public
   */
  thumbnailWidth?: number;

  /**
   * Optional. Thumbnail height
   * @type { number }
   * @memberof InlineQueryResultContact
   * @instance
   * @public
   */
  thumbnailHeight?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultContact
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultContact
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultContact instance from raw Telegram API data
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
    this.bot = bot;
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
