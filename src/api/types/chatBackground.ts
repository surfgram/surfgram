/**
 * ChatBackground class for Surfgram Telegram Bot SDK
 * @module types/chatBackground
 * @description This object represents a chat background.
 * @see {@link https://core.telegram.org/bots/api#chatbackground Telegram API Documentation}
 * @class ChatBackground
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { BackgroundType } from './backgroundType';

/**
 * Represents a ChatBackground object from the Telegram Bot API
 * @class ChatBackground
 */
export class ChatBackground {
  /**
   * Type of the background
   * @type { BackgroundType }
   * @memberof ChatBackground
   * @instance
   * @public
   */
  type!: BackgroundType;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatBackground
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatBackground
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatBackground instance from raw Telegram API data
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
