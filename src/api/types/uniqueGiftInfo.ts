/**
 * UniqueGiftInfo class for Surfgram Telegram Bot SDK
 * @module types/uniqueGiftInfo
 * @description Describes a service message about a unique gift that was sent or received.
 * @see {@link https://core.telegram.org/bots/api#uniquegiftinfo Telegram API Documentation}
 * @class UniqueGiftInfo
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { UniqueGift } from './uniqueGift';

/**
 * Represents a UniqueGiftInfo object from the Telegram Bot API
 * @class UniqueGiftInfo
 */
export class UniqueGiftInfo {
  /**
   * Information about the gift
   * @type { UniqueGift }
   * @memberof UniqueGiftInfo
   * @instance
   * @public
   */
  gift!: UniqueGift;

  /**
   * Origin of the gift. Currently, either “upgrade” for gifts upgraded from regular gifts, “transfer” for gifts transferred from other users or channels, or “resale” for gifts bought from other users
   * @type { string }
   * @memberof UniqueGiftInfo
   * @instance
   * @public
   */
  origin!: string;

  /**
   * Optional. For gifts bought from other users, the price paid for the gift
   * @type { number }
   * @memberof UniqueGiftInfo
   * @instance
   * @public
   */
  lastResaleStarCount?: number;

  /**
   * Optional. Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts
   * @type { string }
   * @memberof UniqueGiftInfo
   * @instance
   * @public
   */
  ownedGiftId?: string;

  /**
   * Optional. Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift
   * @type { number }
   * @memberof UniqueGiftInfo
   * @instance
   * @public
   */
  transferStarCount?: number;

  /**
   * Optional. Point in time \(Unix timestamp\) when the gift can be transferred. If it is in the past, then the gift can be transferred now
   * @type { number }
   * @memberof UniqueGiftInfo
   * @instance
   * @public
   */
  nextTransferDate?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof UniqueGiftInfo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof UniqueGiftInfo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new UniqueGiftInfo instance from raw Telegram API data
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
