/**
 * VideoChatScheduled class for Surfgram Telegram Bot SDK
 * @module types/videoChatScheduled
 * @description This object represents a service message about a video chat scheduled in the chat.
 * @see {@link https://core.telegram.org/bots/api#videochatscheduled Telegram API Documentation}
 * @class VideoChatScheduled
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a VideoChatScheduled object from the Telegram Bot API
 * @class VideoChatScheduled
 */
export class VideoChatScheduled {
  /**
   * Point in time \(Unix timestamp\) when the video chat is supposed to be started by a chat administrator
   * @type { number }
   * @memberof VideoChatScheduled
   * @instance
   * @public
   */
  startDate!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof VideoChatScheduled
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof VideoChatScheduled
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new VideoChatScheduled instance from raw Telegram API data
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
