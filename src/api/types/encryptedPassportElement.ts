/**
 * EncryptedPassportElement class for Surfgram Telegram Bot SDK
 * @module types/encryptedPassportElement
 * @description Describes documents or other Telegram Passport elements shared with the bot by the user.
 * @see {@link https://core.telegram.org/bots/api#encryptedpassportelement Telegram API Documentation}
 * @class EncryptedPassportElement
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { PassportFile } from './passportFile';

/**
 * Represents a EncryptedPassportElement object from the Telegram Bot API
 * @class EncryptedPassportElement
 */
export class EncryptedPassportElement {
  /**
   * Element type. One of “personal\_details”, “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “address”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration”, “phone\_number”, “email”.
   * @type { string }
   * @memberof EncryptedPassportElement
   * @instance
   * @public
   */
  type!: string;

  /**
   * Optional. Base64-encoded encrypted Telegram Passport element data provided by the user; available only for “personal\_details”, “passport”, “driver\_license”, “identity\_card”, “internal\_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials.
   * @type { string }
   * @memberof EncryptedPassportElement
   * @instance
   * @public
   */
  data?: string;

  /**
   * Optional. User's verified phone number; available only for “phone\_number” type
   * @type { string }
   * @memberof EncryptedPassportElement
   * @instance
   * @public
   */
  phoneNumber?: string;

  /**
   * Optional. User's verified email address; available only for “email” type
   * @type { string }
   * @memberof EncryptedPassportElement
   * @instance
   * @public
   */
  email?: string;

  /**
   * Optional. Array of encrypted files with documents provided by the user; available only for “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration” and “temporary\_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
   * @type { PassportFile[] }
   * @memberof EncryptedPassportElement
   * @instance
   * @public
   */
  files?: PassportFile[];

  /**
   * Optional. Encrypted file with the front side of the document, provided by the user; available only for “passport”, “driver\_license”, “identity\_card” and “internal\_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
   * @type { PassportFile }
   * @memberof EncryptedPassportElement
   * @instance
   * @public
   */
  frontSide?: PassportFile;

  /**
   * Optional. Encrypted file with the reverse side of the document, provided by the user; available only for “driver\_license” and “identity\_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
   * @type { PassportFile }
   * @memberof EncryptedPassportElement
   * @instance
   * @public
   */
  reverseSide?: PassportFile;

  /**
   * Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available if requested for “passport”, “driver\_license”, “identity\_card” and “internal\_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
   * @type { PassportFile }
   * @memberof EncryptedPassportElement
   * @instance
   * @public
   */
  selfie?: PassportFile;

  /**
   * Optional. Array of encrypted files with translated versions of documents provided by the user; available if requested for “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration” and “temporary\_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
   * @type { PassportFile[] }
   * @memberof EncryptedPassportElement
   * @instance
   * @public
   */
  translation?: PassportFile[];

  /**
   * Base64-encoded element hash for using in PassportElementErrorUnspecified
   * @type { string }
   * @memberof EncryptedPassportElement
   * @instance
   * @public
   */
  hash!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof EncryptedPassportElement
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof EncryptedPassportElement
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new EncryptedPassportElement instance from raw Telegram API data
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
