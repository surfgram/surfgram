/**
 * CallbackGame class for Surfgram Telegram Bot SDK
 * @module types/callbackGame
 * @description A placeholder, currently holds no information. Use BotFather to set up your game.
 * @see {@link https://core.telegram.org/bots/api#callbackgame Telegram API Documentation}
 * @class CallbackGame
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a CallbackGame object from the Telegram Bot API
 * @class CallbackGame
 */
export class CallbackGame {
  /**
   * User identifier
   * @type { number }
   * @memberof CallbackGame
   * @instance
   * @public
   */
  userId!: number;

  /**
   * New score, must be non-negative
   * @type { number }
   * @memberof CallbackGame
   * @instance
   * @public
   */
  score!: number;

  /**
   * Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
   * @type { boolean }
   * @memberof CallbackGame
   * @instance
   * @public
   */
  force?: boolean;

  /**
   * Pass True if the game message should not be automatically edited to include the current scoreboard
   * @type { boolean }
   * @memberof CallbackGame
   * @instance
   * @public
   */
  disableEditMessage?: boolean;

  /**
   * Required if inline\_message\_id is not specified. Unique identifier for the target chat
   * @type { number }
   * @memberof CallbackGame
   * @instance
   * @public
   */
  chatId?: number;

  /**
   * Required if inline\_message\_id is not specified. Identifier of the sent message
   * @type { number }
   * @memberof CallbackGame
   * @instance
   * @public
   */
  messageId?: number;

  /**
   * Required if chat\_id and message\_id are not specified. Identifier of the inline message
   * @type { string }
   * @memberof CallbackGame
   * @instance
   * @public
   */
  inlineMessageId?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof CallbackGame
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof CallbackGame
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new CallbackGame instance from raw Telegram API data
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
