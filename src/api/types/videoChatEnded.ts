/**
 * VideoChatEnded class for Surfgram Telegram Bot SDK
 * @module types/videoChatEnded
 * @description This object represents a service message about a video chat ended in the chat.
 * @see {@link https://core.telegram.org/bots/api#videochatended Telegram API Documentation}
 * @class VideoChatEnded
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a VideoChatEnded object from the Telegram Bot API
 * @class VideoChatEnded
 */
export class VideoChatEnded {
  /**
   * Video chat duration in seconds
   * @type { number }
   * @memberof VideoChatEnded
   * @instance
   * @public
   */
  duration!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof VideoChatEnded
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof VideoChatEnded
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new VideoChatEnded instance from raw Telegram API data
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
