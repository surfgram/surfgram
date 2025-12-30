/**
 * InputContactMessageContent class for Surfgram Telegram Bot SDK
 * @module types/inputContactMessageContent
 * @description Represents the content of a contact message to be sent as the result of an inline query.
 * @see {@link https://core.telegram.org/bots/api#inputcontactmessagecontent Telegram API Documentation}
 * @class InputContactMessageContent
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputContactMessageContent object from the Telegram Bot API
 * @class InputContactMessageContent
 */
export class InputContactMessageContent {
  /**
   * Contact's phone number
   * @type { string }
   * @memberof InputContactMessageContent
   * @instance
   * @public
   */
  phoneNumber!: string;
  /**
   * Contact's first name
   * @type { string }
   * @memberof InputContactMessageContent
   * @instance
   * @public
   */
  firstName!: string;
  /**
   * Optional. Contact's last name
   * @type { string }
   * @memberof InputContactMessageContent
   * @instance
   * @public
   */
  lastName?: string;
  /**
   * Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
   * @type { string }
   * @memberof InputContactMessageContent
   * @instance
   * @public
   */
  vcard?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputContactMessageContent
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputContactMessageContent
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputContactMessageContent instance from raw Telegram API data
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

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.phoneNumber = data.phoneNumber;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.vcard = data.vcard;
    }
  }
}
