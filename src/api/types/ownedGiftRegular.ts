/**
 * OwnedGiftRegular class for Surfgram Telegram Bot SDK
 * @module types/ownedGiftRegular
 * @description Describes a regular gift owned by a user or a chat.
 * @see {@link https://core.telegram.org/bots/api#ownedgiftregular Telegram API Documentation}
 * @class OwnedGiftRegular
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Gift } from './gift';
import { User } from './user';
import { MessageEntity } from './messageEntity';

/**
 * Represents a OwnedGiftRegular object from the Telegram Bot API
 * @class OwnedGiftRegular
 */
export class OwnedGiftRegular {
  /**
   * Type of the gift, always “regular”
   * @type { string }
   * @memberof OwnedGiftRegular
   * @instance
   * @public
   */
  type!: string;
  /**
   * Information about the regular gift
   * @type { Gift }
   * @memberof OwnedGiftRegular
   * @instance
   * @public
   */
  gift!: Gift;
  /**
   * Optional. Unique identifier of the gift for the bot; for gifts received on behalf of business accounts only
   * @type { string }
   * @memberof OwnedGiftRegular
   * @instance
   * @public
   */
  ownedGiftId?: string;
  /**
   * Optional. Sender of the gift if it is a known user
   * @type { User }
   * @memberof OwnedGiftRegular
   * @instance
   * @public
   */
  senderUser?: User;
  /**
   * Date the gift was sent in Unix time
   * @type { number }
   * @memberof OwnedGiftRegular
   * @instance
   * @public
   */
  sendDate!: number;
  /**
   * Optional. Text of the message that was added to the gift
   * @type { string }
   * @memberof OwnedGiftRegular
   * @instance
   * @public
   */
  text?: string;
  /**
   * Optional. Special entities that appear in the text
   * @type { MessageEntity[] }
   * @memberof OwnedGiftRegular
   * @instance
   * @public
   */
  entities?: MessageEntity[];
  /**
   * Optional. True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them
   * @type { boolean }
   * @memberof OwnedGiftRegular
   * @instance
   * @public
   */
  isPrivate?: boolean;
  /**
   * Optional. True, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only
   * @type { boolean }
   * @memberof OwnedGiftRegular
   * @instance
   * @public
   */
  isSaved?: boolean;
  /**
   * Optional. True, if the gift can be upgraded to a unique gift; for gifts received on behalf of business accounts only
   * @type { boolean }
   * @memberof OwnedGiftRegular
   * @instance
   * @public
   */
  canBeUpgraded?: boolean;
  /**
   * Optional. True, if the gift was refunded and isn't available anymore
   * @type { boolean }
   * @memberof OwnedGiftRegular
   * @instance
   * @public
   */
  wasRefunded?: boolean;
  /**
   * Optional. Number of Telegram Stars that can be claimed by the receiver instead of the gift; omitted if the gift cannot be converted to Telegram Stars
   * @type { number }
   * @memberof OwnedGiftRegular
   * @instance
   * @public
   */
  convertStarCount?: number;
  /**
   * Optional. Number of Telegram Stars that were paid by the sender for the ability to upgrade the gift
   * @type { number }
   * @memberof OwnedGiftRegular
   * @instance
   * @public
   */
  prepaidUpgradeStarCount?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof OwnedGiftRegular
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof OwnedGiftRegular
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new OwnedGiftRegular instance from raw Telegram API data
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
      this.gift = data.gift;
      this.ownedGiftId = data.ownedGiftId;
      this.senderUser = data.senderUser;
      this.sendDate = data.sendDate;
      this.text = data.text;
      this.entities = data.entities;
      this.isPrivate = data.isPrivate;
      this.isSaved = data.isSaved;
      this.canBeUpgraded = data.canBeUpgraded;
      this.wasRefunded = data.wasRefunded;
      this.convertStarCount = data.convertStarCount;
      this.prepaidUpgradeStarCount = data.prepaidUpgradeStarCount;
    }
  }
}
