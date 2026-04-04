/**
 * PollOptionDeleted class for Surfgram Telegram Bot SDK
 * @module types/pollOptionDeleted
 * @description Describes a service message about an option deleted from a poll.
 * @see {@link https://core.telegram.org/bots/api#polloptiondeleted Telegram API Documentation}
 * @class PollOptionDeleted
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MaybeInaccessibleMessage } from './maybeInaccessibleMessage';
import { MessageEntity } from './messageEntity';

/**
 * Represents a PollOptionDeleted object from the Telegram Bot API
 * @class PollOptionDeleted
 */
export class PollOptionDeleted {
  /**
   * Optional. Message containing the poll from which the option was deleted, if known. Note that the Message object in this field will not contain the reply\_to\_message field even if it itself is a reply.
   * @type { MaybeInaccessibleMessage }
   * @memberof PollOptionDeleted
   * @instance
   * @public
   */
  pollMessage?: MaybeInaccessibleMessage;

  /**
   * Unique identifier of the deleted option
   * @type { string }
   * @memberof PollOptionDeleted
   * @instance
   * @public
   */
  optionPersistentId!: string;

  /**
   * Option text
   * @type { string }
   * @memberof PollOptionDeleted
   * @instance
   * @public
   */
  optionText!: string;

  /**
   * Optional. Special entities that appear in the option\_text
   * @type { MessageEntity[] }
   * @memberof PollOptionDeleted
   * @instance
   * @public
   */
  optionTextEntities?: MessageEntity[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PollOptionDeleted
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PollOptionDeleted
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PollOptionDeleted instance from raw Telegram API data
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
