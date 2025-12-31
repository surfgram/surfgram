/**
 * EncryptedCredentials class for Surfgram Telegram Bot SDK
 * @module types/encryptedCredentials
 * @description Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.
 * @see {@link https://core.telegram.org/bots/api#encryptedcredentials Telegram API Documentation}
 * @class EncryptedCredentials
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a EncryptedCredentials object from the Telegram Bot API
 * @class EncryptedCredentials
 */
export class EncryptedCredentials {
  /**
   * Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication
   * @type { string }
   * @memberof EncryptedCredentials
   * @instance
   * @public
   */
  data!: string;

  /**
   * Base64-encoded data hash for data authentication
   * @type { string }
   * @memberof EncryptedCredentials
   * @instance
   * @public
   */
  hash!: string;

  /**
   * Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption
   * @type { string }
   * @memberof EncryptedCredentials
   * @instance
   * @public
   */
  secret!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof EncryptedCredentials
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof EncryptedCredentials
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new EncryptedCredentials instance from raw Telegram API data
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
