/**
 * OwnedGiftUnique class for Surfgram Telegram Bot SDK
 * @module types/ownedGiftUnique
 * @description Describes a unique gift received and owned by a user or a chat.
 * @see {@link https://core.telegram.org/bots/api#ownedgiftunique Telegram API Documentation}
 * @class OwnedGiftUnique
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { UniqueGift } from './uniqueGift';
import { User } from './user';

/**
 * Represents a OwnedGiftUnique object from the Telegram Bot API
 * @class OwnedGiftUnique
 */
export class OwnedGiftUnique {
  /**
   * Type of the gift, always “unique”
   * @type { string }
   * @memberof OwnedGiftUnique
   * @instance
   * @public
   */
  type!: string;

  /**
   * Information about the unique gift
   * @type { UniqueGift }
   * @memberof OwnedGiftUnique
   * @instance
   * @public
   */
  gift!: UniqueGift;

  /**
   * Optional. Unique identifier of the received gift for the bot; for gifts received on behalf of business accounts only
   * @type { string }
   * @memberof OwnedGiftUnique
   * @instance
   * @public
   */
  ownedGiftId?: string;

  /**
   * Optional. Sender of the gift if it is a known user
   * @type { User }
   * @memberof OwnedGiftUnique
   * @instance
   * @public
   */
  senderUser?: User;

  /**
   * Date the gift was sent in Unix time
   * @type { number }
   * @memberof OwnedGiftUnique
   * @instance
   * @public
   */
  sendDate!: number;

  /**
   * Optional. True, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only
   * @type { boolean }
   * @memberof OwnedGiftUnique
   * @instance
   * @public
   */
  isSaved?: boolean;

  /**
   * Optional. True, if the gift can be transferred to another owner; for gifts received on behalf of business accounts only
   * @type { boolean }
   * @memberof OwnedGiftUnique
   * @instance
   * @public
   */
  canBeTransferred?: boolean;

  /**
   * Optional. Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift
   * @type { number }
   * @memberof OwnedGiftUnique
   * @instance
   * @public
   */
  transferStarCount?: number;

  /**
   * Optional. Point in time \(Unix timestamp\) when the gift can be transferred. If it is in the past, then the gift can be transferred now
   * @type { number }
   * @memberof OwnedGiftUnique
   * @instance
   * @public
   */
  nextTransferDate?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof OwnedGiftUnique
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof OwnedGiftUnique
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new OwnedGiftUnique instance from raw Telegram API data
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
