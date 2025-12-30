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
   * Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent \(not forwarded\) by the bot or to the private chat with the bot.
   * @type { number }
   * @memberof Poll
   * @instance
   * @public
   */
  correctOptionId?: number;
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
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.id = data.id;
      this.question = data.question;
      this.questionEntities = data.questionEntities;
      this.options = data.options;
      this.totalVoterCount = data.totalVoterCount;
      this.isClosed = data.isClosed;
      this.isAnonymous = data.isAnonymous;
      this.type = data.type;
      this.allowsMultipleAnswers = data.allowsMultipleAnswers;
      this.correctOptionId = data.correctOptionId;
      this.explanation = data.explanation;
      this.explanationEntities = data.explanationEntities;
      this.openPeriod = data.openPeriod;
      this.closeDate = data.closeDate;
    }
  }
}
