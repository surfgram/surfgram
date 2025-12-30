/**
 * Contact class for Surfgram Telegram Bot SDK
 * @module types/contact
 * @description This object represents a phone contact.
 * @see {@link https://core.telegram.org/bots/api#contact Telegram API Documentation}
 * @class Contact
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a Contact object from the Telegram Bot API
 * @class Contact
 */
export class Contact {
  /**
   * Contact's phone number
   * @type { string }
   * @memberof Contact
   * @instance
   * @public
   */
  phoneNumber!: string;
  /**
   * Contact's first name
   * @type { string }
   * @memberof Contact
   * @instance
   * @public
   */
  firstName!: string;
  /**
   * Optional. Contact's last name
   * @type { string }
   * @memberof Contact
   * @instance
   * @public
   */
  lastName?: string;
  /**
   * Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
   * @type { number }
   * @memberof Contact
   * @instance
   * @public
   */
  userId?: number;
  /**
   * Optional. Additional data about the contact in the form of a vCard
   * @type { string }
   * @memberof Contact
   * @instance
   * @public
   */
  vcard?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Contact
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Contact
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Contact instance from raw Telegram API data
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
      this.userId = data.userId;
      this.vcard = data.vcard;
    }
  }
}
