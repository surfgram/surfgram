/**
 * PassportData class for Surfgram Telegram Bot SDK
 * @module types/passportData
 * @description Describes Telegram Passport data shared with the bot by the user.
 * @see {@link https://core.telegram.org/bots/api#passportdata Telegram API Documentation}
 * @class PassportData
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { EncryptedPassportElement } from './encryptedPassportElement';
import { EncryptedCredentials } from './encryptedCredentials';

/**
 * Represents a PassportData object from the Telegram Bot API
 * @class PassportData
 */
export class PassportData {
  /**
   * Array with information about documents and other Telegram Passport elements that was shared with the bot
   * @type { EncryptedPassportElement[] }
   * @memberof PassportData
   * @instance
   * @public
   */
  data!: EncryptedPassportElement[];
  /**
   * Encrypted credentials required to decrypt the data
   * @type { EncryptedCredentials }
   * @memberof PassportData
   * @instance
   * @public
   */
  credentials!: EncryptedCredentials;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PassportData
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PassportData
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PassportData instance from raw Telegram API data
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

      this.data = data.data;
      this.credentials = data.credentials;
    }
  }
}
