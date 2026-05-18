/**
 * Poll class for Surfgram Telegram Bot SDK
 * @module types/poll
 * @description This object contains information about a poll.
 * @see {@link https://core.telegram.org/bots/api#poll Telegram API Documentation}
 * @class Poll
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { PollOption } from './pollOption';
import { PollMedia } from './pollMedia';

/**
 * Represents a Poll object from the Telegram Bot API
 * @class Poll
 */
export class Poll {
  /**
   * Unique poll identifier
   * @type { string }
   * @memberof Poll
   * @instance
   * @public
   */
  id!: string;

  /**
   * Poll question, 1-300 characters
   * @type { string }
   * @memberof Poll
   * @instance
   * @public
   */
  question!: string;

  /**
   * Optional. Special entities that appear in the question. Currently, only custom emoji entities are allowed in poll questions
   * @type { MessageEntity[] }
   * @memberof Poll
   * @instance
   * @public
   */
  questionEntities?: MessageEntity[];

  /**
   * List of poll options
   * @type { PollOption[] }
   * @memberof Poll
   * @instance
   * @public
   */
  options!: PollOption[];

  /**
   * Total number of users that voted in the poll
   * @type { number }
   * @memberof Poll
   * @instance
   * @public
   */
  totalVoterCount!: number;

  /**
   * True, if the poll is closed
   * @type { boolean }
   * @memberof Poll
   * @instance
   * @public
   */
  isClosed!: boolean;

  /**
   * True, if the poll is anonymous
   * @type { boolean }
   * @memberof Poll
   * @instance
   * @public
   */
  isAnonymous!: boolean;

  /**
   * Poll type, currently can be “regular” or “quiz”
   * @type { string }
   * @memberof Poll
   * @instance
   * @public
   */
  type!: string;

  /**
   * True, if the poll allows multiple answers
   * @type { boolean }
   * @memberof Poll
   * @instance
   * @public
   */
  allowsMultipleAnswers!: boolean;

  /**
   * True, if the poll allows to change the chosen answer options
   * @type { boolean }
   * @memberof Poll
   * @instance
   * @public
   */
  allowsRevoting!: boolean;

  /**
   * True if voting is limited to users who have been members of the chat where the poll was originally sent for more than 24 hours
   * @type { boolean }
   * @memberof Poll
   * @instance
   * @public
   */
  membersOnly!: boolean;

  /**
   * Optional. A list of two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which users can vote in the poll. The country code “FT” is used for users with anonymous numbers. If omitted, then users from any country can participate in the poll.
   * @type { string[] }
   * @memberof Poll
   * @instance
   * @public
   */
  countryCodes?: string[];

  /**
   * Optional. Array of 0-based identifiers of the correct answer options. Available only for polls in quiz mode which are closed or were sent \(not forwarded\) by the bot or to the private chat with the bot.
   * @type { number[] }
   * @memberof Poll
   * @instance
   * @public
   */
  correctOptionIds?: number[];

  /**
   * Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters
   * @type { string }
   * @memberof Poll
   * @instance
   * @public
   */
  explanation?: string;

  /**
   * Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation
   * @type { MessageEntity[] }
   * @memberof Poll
   * @instance
   * @public
   */
  explanationEntities?: MessageEntity[];

  /**
   * Optional. Media added to the quiz explanation
   * @type { PollMedia }
   * @memberof Poll
   * @instance
   * @public
   */
  explanationMedia?: PollMedia;

  /**
   * Optional. Amount of time in seconds the poll will be active after creation
   * @type { number }
   * @memberof Poll
   * @instance
   * @public
   */
  openPeriod?: number;

  /**
   * Optional. Point in time \(Unix timestamp\) when the poll will be automatically closed
   * @type { number }
   * @memberof Poll
   * @instance
   * @public
   */
  closeDate?: number;

  /**
   * Optional. Description of the poll; for polls inside the Message object only
   * @type { string }
   * @memberof Poll
   * @instance
   * @public
   */
  description?: string;

  /**
   * Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the description
   * @type { MessageEntity[] }
   * @memberof Poll
   * @instance
   * @public
   */
  descriptionEntities?: MessageEntity[];

  /**
   * Optional. Media added to the poll description; for polls inside the Message object only
   * @type { PollMedia }
   * @memberof Poll
   * @instance
   * @public
   */
  media?: PollMedia;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Poll
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Poll
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Poll instance from raw Telegram API data
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
