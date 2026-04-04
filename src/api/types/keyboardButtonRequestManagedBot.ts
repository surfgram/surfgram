/**
 * KeyboardButtonRequestManagedBot class for Surfgram Telegram Bot SDK
 * @module types/keyboardButtonRequestManagedBot
 * @description This object defines the parameters for the creation of a managed bot. Information about the created bot will be shared with the bot using the update managed\_bot and a Message with the field managed\_bot\_created.
 * @see {@link https://core.telegram.org/bots/api#keyboardbuttonrequestmanagedbot Telegram API Documentation}
 * @class KeyboardButtonRequestManagedBot
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a KeyboardButtonRequestManagedBot object from the Telegram Bot API
 * @class KeyboardButtonRequestManagedBot
 */
export class KeyboardButtonRequestManagedBot {
  /**
   * Signed 32-bit identifier of the request. Must be unique within the message
   * @type { number }
   * @memberof KeyboardButtonRequestManagedBot
   * @instance
   * @public
   */
  requestId!: number;

  /**
   * Optional. Suggested name for the bot
   * @type { string }
   * @memberof KeyboardButtonRequestManagedBot
   * @instance
   * @public
   */
  suggestedName?: string;

  /**
   * Optional. Suggested username for the bot
   * @type { string }
   * @memberof KeyboardButtonRequestManagedBot
   * @instance
   * @public
   */
  suggestedUsername?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof KeyboardButtonRequestManagedBot
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof KeyboardButtonRequestManagedBot
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new KeyboardButtonRequestManagedBot instance from raw Telegram API data
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
