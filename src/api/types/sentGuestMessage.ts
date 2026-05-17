/**
 * SentGuestMessage class for Surfgram Telegram Bot SDK
 * @module types/sentGuestMessage
 * @description Describes an inline message sent by a guest bot.
 * @see {@link https://core.telegram.org/bots/api#sentguestmessage Telegram API Documentation}
 * @class SentGuestMessage
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a SentGuestMessage object from the Telegram Bot API
 * @class SentGuestMessage
 */
export class SentGuestMessage {
  /**
   * Identifier of the sent inline message
   * @type { string }
   * @memberof SentGuestMessage
   * @instance
   * @public
   */
  inlineMessageId!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof SentGuestMessage
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof SentGuestMessage
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new SentGuestMessage instance from raw Telegram API data
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
