/**
 * OwnedGifts class for Surfgram Telegram Bot SDK
 * @module types/ownedGifts
 * @description Contains the list of gifts received and owned by a user or a chat.
 * @see {@link https://core.telegram.org/bots/api#ownedgifts Telegram API Documentation}
 * @class OwnedGifts
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { OwnedGift } from './ownedGift';

/**
 * Represents a OwnedGifts object from the Telegram Bot API
 * @class OwnedGifts
 */
export class OwnedGifts {
  /**
   * The total number of gifts owned by the user or the chat
   * @type { number }
   * @memberof OwnedGifts
   * @instance
   * @public
   */
  totalCount!: number;
  /**
   * The list of gifts
   * @type { OwnedGift[] }
   * @memberof OwnedGifts
   * @instance
   * @public
   */
  gifts!: OwnedGift[];
  /**
   * Optional. Offset for the next request. If empty, then there are no more results
   * @type { string }
   * @memberof OwnedGifts
   * @instance
   * @public
   */
  nextOffset?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof OwnedGifts
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof OwnedGifts
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new OwnedGifts instance from raw Telegram API data
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

      this.totalCount = data.totalCount;
      this.gifts = data.gifts;
      this.nextOffset = data.nextOffset;
    }
  }
}
