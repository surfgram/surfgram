/**
 * Gift class for Surfgram Telegram Bot SDK
 * @module types/gift
 * @description This object represents a gift that can be sent by the bot.
 * @see {@link https://core.telegram.org/bots/api#gift Telegram API Documentation}
 * @class Gift
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Sticker } from './sticker';
import { Chat } from './chat';

/**
 * Represents a Gift object from the Telegram Bot API
 * @class Gift
 */
export class Gift {
  /**
   * Unique identifier of the gift
   * @type { string }
   * @memberof Gift
   * @instance
   * @public
   */
  id!: string;

  /**
   * The sticker that represents the gift
   * @type { Sticker }
   * @memberof Gift
   * @instance
   * @public
   */
  sticker!: Sticker;

  /**
   * The number of Telegram Stars that must be paid to send the sticker
   * @type { number }
   * @memberof Gift
   * @instance
   * @public
   */
  starCount!: number;

  /**
   * Optional. The number of Telegram Stars that must be paid to upgrade the gift to a unique one
   * @type { number }
   * @memberof Gift
   * @instance
   * @public
   */
  upgradeStarCount?: number;

  /**
   * Optional. The total number of the gifts of this type that can be sent; for limited gifts only
   * @type { number }
   * @memberof Gift
   * @instance
   * @public
   */
  totalCount?: number;

  /**
   * Optional. The number of remaining gifts of this type that can be sent; for limited gifts only
   * @type { number }
   * @memberof Gift
   * @instance
   * @public
   */
  remainingCount?: number;

  /**
   * Optional. Information about the chat that published the gift
   * @type { Chat }
   * @memberof Gift
   * @instance
   * @public
   */
  publisherChat?: Chat;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Gift
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Gift
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Gift instance from raw Telegram API data
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
