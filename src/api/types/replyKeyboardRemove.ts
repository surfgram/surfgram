/**
 * ReplyKeyboardRemove class for Surfgram Telegram Bot SDK
 * @module types/replyKeyboardRemove
 * @description Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button \(see ReplyKeyboardMarkup\). Not supported in channels and for messages sent on behalf of a Telegram Business account.
 * @see {@link https://core.telegram.org/bots/api#replykeyboardremove Telegram API Documentation}
 * @class ReplyKeyboardRemove
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a ReplyKeyboardRemove object from the Telegram Bot API
 * @class ReplyKeyboardRemove
 */
export class ReplyKeyboardRemove {
  /**
   * Requests clients to remove the custom keyboard \(user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one\_time\_keyboard in ReplyKeyboardMarkup\)
   * @type { boolean }
   * @memberof ReplyKeyboardRemove
   * @instance
   * @public
   */
  removeKeyboard!: boolean;
  /**
   * Optional. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1\) users that are @mentioned in the text of the Message object; 2\) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.
   * @type { boolean }
   * @memberof ReplyKeyboardRemove
   * @instance
   * @public
   */
  selective?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ReplyKeyboardRemove
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ReplyKeyboardRemove
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ReplyKeyboardRemove instance from raw Telegram API data
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

      this.removeKeyboard = data.removeKeyboard;
      this.selective = data.selective;
    }
  }
}
