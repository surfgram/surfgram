/**
 * ChatShared class for Surfgram Telegram Bot SDK
 * @module types/chatShared
 * @description This object contains information about a chat that was shared with the bot using a KeyboardButtonRequestChat button.
 * @see {@link https://core.telegram.org/bots/api#chatshared Telegram API Documentation}
 * @class ChatShared
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { PhotoSize } from './photoSize';

/**
 * Represents a ChatShared object from the Telegram Bot API
 * @class ChatShared
 */
export class ChatShared {
  /**
   * Identifier of the request
   * @type { number }
   * @memberof ChatShared
   * @instance
   * @public
   */
  requestId!: number;

  /**
   * Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means.
   * @type { number }
   * @memberof ChatShared
   * @instance
   * @public
   */
  chatId!: number;

  /**
   * Optional. Title of the chat, if the title was requested by the bot.
   * @type { string }
   * @memberof ChatShared
   * @instance
   * @public
   */
  title?: string;

  /**
   * Optional. Username of the chat, if the username was requested by the bot and available.
   * @type { string }
   * @memberof ChatShared
   * @instance
   * @public
   */
  username?: string;

  /**
   * Optional. Available sizes of the chat photo, if the photo was requested by the bot
   * @type { PhotoSize[] }
   * @memberof ChatShared
   * @instance
   * @public
   */
  photo?: PhotoSize[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatShared
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatShared
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatShared instance from raw Telegram API data
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
