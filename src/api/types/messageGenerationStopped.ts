/**
 * MessageGenerationStopped class for Surfgram Telegram Bot SDK
 * @module types/messageGenerationStopped
 * @description This object describes an update about a user stopping message generation.
 * @see {@link https://core.telegram.org/bots/api#messagegenerationstopped Telegram API Documentation}
 * @class MessageGenerationStopped
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Chat } from './chat';

/**
 * Represents a MessageGenerationStopped object from the Telegram Bot API
 * @class MessageGenerationStopped
 */
export class MessageGenerationStopped {
  /**
   * Chat in which the message is generated
   * @type { Chat }
   * @memberof MessageGenerationStopped
   * @instance
   * @public
   */
  chat!: Chat;

  /**
   * Optional. Unique identifier of the message thread in which the message is generated
   * @type { number }
   * @memberof MessageGenerationStopped
   * @instance
   * @public
   */
  messageThreadId?: number;

  /**
   * Unique identifier of the message draft which was stopped
   * @type { number }
   * @memberof MessageGenerationStopped
   * @instance
   * @public
   */
  draftId!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof MessageGenerationStopped
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof MessageGenerationStopped
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new MessageGenerationStopped instance from raw Telegram API data
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
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
    this.bot = bot;
  }
}
