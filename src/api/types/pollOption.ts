/**
 * PollOption class for Surfgram Telegram Bot SDK
 * @module types/pollOption
 * @description This object contains information about one answer option in a poll.
 * @see {@link https://core.telegram.org/bots/api#polloption Telegram API Documentation}
 * @class PollOption
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';

/**
 * Represents a PollOption object from the Telegram Bot API
 * @class PollOption
 */
export class PollOption {
  /**
   * Option text, 1-100 characters
   * @type { string }
   * @memberof PollOption
   * @instance
   * @public
   */
  text!: string;
  /**
   * Optional. Special entities that appear in the option text. Currently, only custom emoji entities are allowed in poll option texts
   * @type { MessageEntity[] }
   * @memberof PollOption
   * @instance
   * @public
   */
  textEntities?: MessageEntity[];
  /**
   * Number of users that voted for this option
   * @type { number }
   * @memberof PollOption
   * @instance
   * @public
   */
  voterCount!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PollOption
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PollOption
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PollOption instance from raw Telegram API data
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

      this.text = data.text;
      this.textEntities = data.textEntities;
      this.voterCount = data.voterCount;
    }
  }
}
