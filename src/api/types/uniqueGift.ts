/**
 * UniqueGift class for Surfgram Telegram Bot SDK
 * @module types/uniqueGift
 * @description This object describes a unique gift that was upgraded from a regular gift.
 * @see {@link https://core.telegram.org/bots/api#uniquegift Telegram API Documentation}
 * @class UniqueGift
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { UniqueGiftModel } from './uniqueGiftModel';
import { UniqueGiftSymbol } from './uniqueGiftSymbol';
import { UniqueGiftBackdrop } from './uniqueGiftBackdrop';
import { Chat } from './chat';

/**
 * Represents a UniqueGift object from the Telegram Bot API
 * @class UniqueGift
 */
export class UniqueGift {
  /**
   * Human-readable name of the regular gift from which this unique gift was upgraded
   * @type { string }
   * @memberof UniqueGift
   * @instance
   * @public
   */
  baseName!: string;

  /**
   * Unique name of the gift. This name can be used in https://t.me/nft/... links and story areas
   * @type { string }
   * @memberof UniqueGift
   * @instance
   * @public
   */
  name!: string;

  /**
   * Unique number of the upgraded gift among gifts upgraded from the same regular gift
   * @type { number }
   * @memberof UniqueGift
   * @instance
   * @public
   */
  number!: number;

  /**
   * Model of the gift
   * @type { UniqueGiftModel }
   * @memberof UniqueGift
   * @instance
   * @public
   */
  model!: UniqueGiftModel;

  /**
   * Symbol of the gift
   * @type { UniqueGiftSymbol }
   * @memberof UniqueGift
   * @instance
   * @public
   */
  symbol!: UniqueGiftSymbol;

  /**
   * Backdrop of the gift
   * @type { UniqueGiftBackdrop }
   * @memberof UniqueGift
   * @instance
   * @public
   */
  backdrop!: UniqueGiftBackdrop;

  /**
   * Optional. Information about the chat that published the gift
   * @type { Chat }
   * @memberof UniqueGift
   * @instance
   * @public
   */
  publisherChat?: Chat;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof UniqueGift
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof UniqueGift
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new UniqueGift instance from raw Telegram API data
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
