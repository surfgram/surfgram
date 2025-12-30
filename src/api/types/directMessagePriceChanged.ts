/**
 * DirectMessagePriceChanged class for Surfgram Telegram Bot SDK
 * @module types/directMessagePriceChanged
 * @description Describes a service message about a change in the price of direct messages sent to a channel chat.
 * @see {@link https://core.telegram.org/bots/api#directmessagepricechanged Telegram API Documentation}
 * @class DirectMessagePriceChanged
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a DirectMessagePriceChanged object from the Telegram Bot API
 * @class DirectMessagePriceChanged
 */
export class DirectMessagePriceChanged {
  /**
   * True, if direct messages are enabled for the channel chat; false otherwise
   * @type { boolean }
   * @memberof DirectMessagePriceChanged
   * @instance
   * @public
   */
  areDirectMessagesEnabled!: boolean;
  /**
   * Optional. The new number of Telegram Stars that must be paid by users for each direct message sent to the channel. Does not apply to users who have been exempted by administrators. Defaults to 0.
   * @type { number }
   * @memberof DirectMessagePriceChanged
   * @instance
   * @public
   */
  directMessageStarCount?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof DirectMessagePriceChanged
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof DirectMessagePriceChanged
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new DirectMessagePriceChanged instance from raw Telegram API data
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

      this.areDirectMessagesEnabled = data.areDirectMessagesEnabled;
      this.directMessageStarCount = data.directMessageStarCount;
    }
  }
}
