/**
 * OwnedGift class for Surfgram Telegram Bot SDK
 * @module types/ownedGift
 * @description This object describes a gift received and owned by a user or a chat. Currently, it can be one of
 * @see {@link https://core.telegram.org/bots/api#ownedgift Telegram API Documentation}
 * @class OwnedGift
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Gift } from './gift';
import { User } from './user';
import { MessageEntity } from './messageEntity';

/**
 * Represents a OwnedGift object from the Telegram Bot API
 * @class OwnedGift
 */
export class OwnedGift {
  /**
   * Type of the gift, always “regular”
   * @type { string }
   * @memberof OwnedGift
   * @instance
   * @public
   */
  type!: string;

  /**
   * Information about the regular gift
   * @type { Gift }
   * @memberof OwnedGift
   * @instance
   * @public
   */
  gift!: Gift;

  /**
   * Optional. Unique identifier of the gift for the bot; for gifts received on behalf of business accounts only
   * @type { string }
   * @memberof OwnedGift
   * @instance
   * @public
   */
  ownedGiftId?: string;

  /**
   * Optional. Sender of the gift if it is a known user
   * @type { User }
   * @memberof OwnedGift
   * @instance
   * @public
   */
  senderUser?: User;

  /**
   * Date the gift was sent in Unix time
   * @type { number }
   * @memberof OwnedGift
   * @instance
   * @public
   */
  sendDate!: number;

  /**
   * Optional. Text of the message that was added to the gift
   * @type { string }
   * @memberof OwnedGift
   * @instance
   * @public
   */
  text?: string;

  /**
   * Optional. Special entities that appear in the text
   * @type { MessageEntity[] }
   * @memberof OwnedGift
   * @instance
   * @public
   */
  entities?: MessageEntity[];

  /**
   * Optional. True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them
   * @type { boolean }
   * @memberof OwnedGift
   * @instance
   * @public
   */
  isPrivate?: boolean;

  /**
   * Optional. True, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only
   * @type { boolean }
   * @memberof OwnedGift
   * @instance
   * @public
   */
  isSaved?: boolean;

  /**
   * Optional. True, if the gift can be upgraded to a unique gift; for gifts received on behalf of business accounts only
   * @type { boolean }
   * @memberof OwnedGift
   * @instance
   * @public
   */
  canBeUpgraded?: boolean;

  /**
   * Optional. True, if the gift was refunded and isn't available anymore
   * @type { boolean }
   * @memberof OwnedGift
   * @instance
   * @public
   */
  wasRefunded?: boolean;

  /**
   * Optional. Number of Telegram Stars that can be claimed by the receiver instead of the gift; omitted if the gift cannot be converted to Telegram Stars
   * @type { number }
   * @memberof OwnedGift
   * @instance
   * @public
   */
  convertStarCount?: number;

  /**
   * Optional. Number of Telegram Stars that were paid by the sender for the ability to upgrade the gift
   * @type { number }
   * @memberof OwnedGift
   * @instance
   * @public
   */
  prepaidUpgradeStarCount?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof OwnedGift
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof OwnedGift
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new OwnedGift instance from raw Telegram API data
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
