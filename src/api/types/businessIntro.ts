/**
 * BusinessIntro class for Surfgram Telegram Bot SDK
 * @module types/businessIntro
 * @description Contains information about the start page settings of a Telegram Business account.
 * @see {@link https://core.telegram.org/bots/api#businessintro Telegram API Documentation}
 * @class BusinessIntro
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Sticker } from './sticker';

/**
 * Represents a BusinessIntro object from the Telegram Bot API
 * @class BusinessIntro
 */
export class BusinessIntro {
  /**
   * Optional. Title text of the business intro
   * @type { string }
   * @memberof BusinessIntro
   * @instance
   * @public
   */
  title?: string;
  /**
   * Optional. Message text of the business intro
   * @type { string }
   * @memberof BusinessIntro
   * @instance
   * @public
   */
  message?: string;
  /**
   * Optional. Sticker of the business intro
   * @type { Sticker }
   * @memberof BusinessIntro
   * @instance
   * @public
   */
  sticker?: Sticker;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BusinessIntro
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BusinessIntro
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BusinessIntro instance from raw Telegram API data
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

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.title = data.title;
      this.message = data.message;
      this.sticker = data.sticker;
    }
  }
}
