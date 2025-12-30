/**
 * PaidMediaVideo class for Surfgram Telegram Bot SDK
 * @module types/paidMediaVideo
 * @description The paid media is a video.
 * @see {@link https://core.telegram.org/bots/api#paidmediavideo Telegram API Documentation}
 * @class PaidMediaVideo
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Video } from './video';

/**
 * Represents a PaidMediaVideo object from the Telegram Bot API
 * @class PaidMediaVideo
 */
export class PaidMediaVideo {
  /**
   * Type of the paid media, always “video”
   * @type { string }
   * @memberof PaidMediaVideo
   * @instance
   * @public
   */
  type!: string;
  /**
   * The video
   * @type { Video }
   * @memberof PaidMediaVideo
   * @instance
   * @public
   */
  video!: Video;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PaidMediaVideo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PaidMediaVideo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PaidMediaVideo instance from raw Telegram API data
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

      this.type = data.type;
      this.video = data.video;
    }
  }
}
