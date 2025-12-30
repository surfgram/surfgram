/**
 * PollAnswer class for Surfgram Telegram Bot SDK
 * @module types/pollAnswer
 * @description This object represents an answer of a user in a non-anonymous poll.
 * @see {@link https://core.telegram.org/bots/api#pollanswer Telegram API Documentation}
 * @class PollAnswer
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Chat } from './chat';
import { User } from './user';

/**
 * Represents a PollAnswer object from the Telegram Bot API
 * @class PollAnswer
 */
export class PollAnswer {
  /**
   * Unique poll identifier
   * @type { string }
   * @memberof PollAnswer
   * @instance
   * @public
   */
  pollId!: string;
  /**
   * Optional. The chat that changed the answer to the poll, if the voter is anonymous
   * @type { Chat }
   * @memberof PollAnswer
   * @instance
   * @public
   */
  voterChat?: Chat;
  /**
   * Optional. The user that changed the answer to the poll, if the voter isn't anonymous
   * @type { User }
   * @memberof PollAnswer
   * @instance
   * @public
   */
  user?: User;
  /**
   * 0-based identifiers of chosen answer options. May be empty if the vote was retracted.
   * @type { number[] }
   * @memberof PollAnswer
   * @instance
   * @public
   */
  optionIds!: number[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PollAnswer
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PollAnswer
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PollAnswer instance from raw Telegram API data
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

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.pollId = data.pollId;
      this.voterChat = data.voterChat;
      this.user = data.user;
      this.optionIds = data.optionIds;
    }
  }
}
