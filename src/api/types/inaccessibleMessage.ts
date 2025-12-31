/**
 * InaccessibleMessage class for Surfgram Telegram Bot SDK
 * @module types/inaccessibleMessage
 * @description This object describes a message that was deleted or is otherwise inaccessible to the bot.
 * @see {@link https://core.telegram.org/bots/api#inaccessiblemessage Telegram API Documentation}
 * @class InaccessibleMessage
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Chat } from './chat';

/**
 * Represents a InaccessibleMessage object from the Telegram Bot API
 * @class InaccessibleMessage
 */
export class InaccessibleMessage {
  /**
   * Chat the message belonged to
   * @type { Chat }
   * @memberof InaccessibleMessage
   * @instance
   * @public
   */
  chat!: Chat;

  /**
   * Unique message identifier inside the chat
   * @type { number }
   * @memberof InaccessibleMessage
   * @instance
   * @public
   */
  messageId!: number;

  /**
   * Always 0. The field can be used to differentiate regular and inaccessible messages.
   * @type { number }
   * @memberof InaccessibleMessage
   * @instance
   * @public
   */
  date!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InaccessibleMessage
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InaccessibleMessage
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InaccessibleMessage instance from raw Telegram API data
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
