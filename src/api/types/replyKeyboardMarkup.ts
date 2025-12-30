/**
 * ReplyKeyboardMarkup class for Surfgram Telegram Bot SDK
 * @module types/replyKeyboardMarkup
 * @description This object represents a custom keyboard with reply options \(see Introduction to bots for details and examples\). Not supported in channels and for messages sent on behalf of a Telegram Business account.
 * @see {@link https://core.telegram.org/bots/api#replykeyboardmarkup Telegram API Documentation}
 * @class ReplyKeyboardMarkup
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { KeyboardButton } from './keyboardButton';

/**
 * Represents a ReplyKeyboardMarkup object from the Telegram Bot API
 * @class ReplyKeyboardMarkup
 */
export class ReplyKeyboardMarkup {
  /**
   * Array of button rows, each represented by an Array of KeyboardButton objects
   * @type { KeyboardButton[][] }
   * @memberof ReplyKeyboardMarkup
   * @instance
   * @public
   */
  keyboard!: KeyboardButton[][];

  /**
   * Optional. Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon.
   * @type { boolean }
   * @memberof ReplyKeyboardMarkup
   * @instance
   * @public
   */
  isPersistent?: boolean;

  /**
   * Optional. Requests clients to resize the keyboard vertically for optimal fit \(e.g., make the keyboard smaller if there are just two rows of buttons\). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard.
   * @type { boolean }
   * @memberof ReplyKeyboardMarkup
   * @instance
   * @public
   */
  resizeKeyboard?: boolean;

  /**
   * Optional. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false.
   * @type { boolean }
   * @memberof ReplyKeyboardMarkup
   * @instance
   * @public
   */
  oneTimeKeyboard?: boolean;

  /**
   * Optional. The placeholder to be shown in the input field when the keyboard is active; 1-64 characters
   * @type { string }
   * @memberof ReplyKeyboardMarkup
   * @instance
   * @public
   */
  inputFieldPlaceholder?: string;

  /**
   * Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 1\) users that are @mentioned in the text of the Message object; 2\) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard.
   * @type { boolean }
   * @memberof ReplyKeyboardMarkup
   * @instance
   * @public
   */
  selective?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ReplyKeyboardMarkup
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ReplyKeyboardMarkup
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ReplyKeyboardMarkup instance from raw Telegram API data
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
