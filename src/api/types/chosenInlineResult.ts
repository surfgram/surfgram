/**
 * ChosenInlineResult class for Surfgram Telegram Bot SDK
 * @module types/chosenInlineResult
 * @description Represents a result of an inline query that was chosen by the user and sent to their chat partner.
 * @see {@link https://core.telegram.org/bots/api#choseninlineresult Telegram API Documentation}
 * @class ChosenInlineResult
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';
import { Location } from './location';

/**
 * Represents a ChosenInlineResult object from the Telegram Bot API
 * @class ChosenInlineResult
 */
export class ChosenInlineResult {
  /**
   * The unique identifier for the result that was chosen
   * @type { string }
   * @memberof ChosenInlineResult
   * @instance
   * @public
   */
  resultId!: string;

  /**
   * The user that chose the result
   * @type { User }
   * @memberof ChosenInlineResult
   * @instance
   * @public
   */
  from!: User;

  /**
   * Optional. Sender location, only for bots that require user location
   * @type { Location }
   * @memberof ChosenInlineResult
   * @instance
   * @public
   */
  location?: Location;

  /**
   * Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message.
   * @type { string }
   * @memberof ChosenInlineResult
   * @instance
   * @public
   */
  inlineMessageId?: string;

  /**
   * The query that was used to obtain the result
   * @type { string }
   * @memberof ChosenInlineResult
   * @instance
   * @public
   */
  query!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChosenInlineResult
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChosenInlineResult
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChosenInlineResult instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
