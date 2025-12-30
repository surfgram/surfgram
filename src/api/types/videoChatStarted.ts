/**
 * VideoChatStarted class for Surfgram Telegram Bot SDK
 * @module types/videoChatStarted
 * @description This object represents a service message about a video chat started in the chat. Currently holds no information.
 * @see {@link https://core.telegram.org/bots/api#videochatstarted Telegram API Documentation}
 * @class VideoChatStarted
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a VideoChatStarted object from the Telegram Bot API
 * @class VideoChatStarted
 */
export class VideoChatStarted {
  /**
   * Video chat duration in seconds
   * @type { number }
   * @memberof VideoChatStarted
   * @instance
   * @public
   */
  duration!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof VideoChatStarted
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof VideoChatStarted
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new VideoChatStarted instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.duration = data.duration;
    }
  }
}
