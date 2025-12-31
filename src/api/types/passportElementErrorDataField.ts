/**
 * PassportElementErrorDataField class for Surfgram Telegram Bot SDK
 * @module types/passportElementErrorDataField
 * @description Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field&#39;s value changes.
 * @see {@link https://core.telegram.org/bots/api#passportelementerrordatafield Telegram API Documentation}
 * @class PassportElementErrorDataField
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a PassportElementErrorDataField object from the Telegram Bot API
 * @class PassportElementErrorDataField
 */
export class PassportElementErrorDataField {
  /**
   * Error source, must be data
   * @type { string }
   * @memberof PassportElementErrorDataField
   * @instance
   * @public
   */
  source!: string;

  /**
   * The section of the user's Telegram Passport which has the error, one of “personal\_details”, “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “address”
   * @type { string }
   * @memberof PassportElementErrorDataField
   * @instance
   * @public
   */
  type!: string;

  /**
   * Name of the data field which has the error
   * @type { string }
   * @memberof PassportElementErrorDataField
   * @instance
   * @public
   */
  fieldName!: string;

  /**
   * Base64-encoded data hash
   * @type { string }
   * @memberof PassportElementErrorDataField
   * @instance
   * @public
   */
  dataHash!: string;

  /**
   * Error message
   * @type { string }
   * @memberof PassportElementErrorDataField
   * @instance
   * @public
   */
  message!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PassportElementErrorDataField
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PassportElementErrorDataField
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PassportElementErrorDataField instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
