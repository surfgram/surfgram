/**
 * PaidMediaPhoto class for Surfgram Telegram Bot SDK
 * @module types/paidMediaPhoto
 * @description The paid media is a photo.
 * @see {@link https://core.telegram.org/bots/api#paidmediaphoto Telegram API Documentation}
 * @class PaidMediaPhoto
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { PhotoSize } from './photoSize';

/**
 * Represents a PaidMediaPhoto object from the Telegram Bot API
 * @class PaidMediaPhoto
 */
export class PaidMediaPhoto {
  /**
   * Type of the paid media, always “photo”
   * @type { string }
   * @memberof PaidMediaPhoto
   * @instance
   * @public
   */
  type!: string;
  /**
   * The photo
   * @type { PhotoSize[] }
   * @memberof PaidMediaPhoto
   * @instance
   * @public
   */
  photo!: PhotoSize[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PaidMediaPhoto
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PaidMediaPhoto
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PaidMediaPhoto instance from raw Telegram API data
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
      this.photo = data.photo;
    }
  }
}
