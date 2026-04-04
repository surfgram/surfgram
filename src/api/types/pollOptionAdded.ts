/**
 * PollOptionAdded class for Surfgram Telegram Bot SDK
 * @module types/pollOptionAdded
 * @description Describes a service message about an option added to a poll.
 * @see {@link https://core.telegram.org/bots/api#polloptionadded Telegram API Documentation}
 * @class PollOptionAdded
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MaybeInaccessibleMessage } from './maybeInaccessibleMessage';
import { MessageEntity } from './messageEntity';

/**
 * Represents a PollOptionAdded object from the Telegram Bot API
 * @class PollOptionAdded
 */
export class PollOptionAdded {
  /**
   * Optional. Message containing the poll to which the option was added, if known. Note that the Message object in this field will not contain the reply\_to\_message field even if it itself is a reply.
   * @type { MaybeInaccessibleMessage }
   * @memberof PollOptionAdded
   * @instance
   * @public
   */
  pollMessage?: MaybeInaccessibleMessage;

  /**
   * Unique identifier of the added option
   * @type { string }
   * @memberof PollOptionAdded
   * @instance
   * @public
   */
  optionPersistentId!: string;

  /**
   * Option text
   * @type { string }
   * @memberof PollOptionAdded
   * @instance
   * @public
   */
  optionText!: string;

  /**
   * Optional. Special entities that appear in the option\_text
   * @type { MessageEntity[] }
   * @memberof PollOptionAdded
   * @instance
   * @public
   */
  optionTextEntities?: MessageEntity[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PollOptionAdded
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PollOptionAdded
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PollOptionAdded instance from raw Telegram API data
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
