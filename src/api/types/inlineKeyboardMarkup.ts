/**
 * InlineKeyboardMarkup class for Surfgram Telegram Bot SDK
 * @module types/inlineKeyboardMarkup
 * @description This object represents an inline keyboard that appears right next to the message it belongs to.
 * @see {@link https://core.telegram.org/bots/api#inlinekeyboardmarkup Telegram API Documentation}
 * @class InlineKeyboardMarkup
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InlineKeyboardButton } from './inlineKeyboardButton';

/**
 * Represents a InlineKeyboardMarkup object from the Telegram Bot API
 * @class InlineKeyboardMarkup
 */
export class InlineKeyboardMarkup {
  /**
   * Array of button rows, each represented by an Array of InlineKeyboardButton objects
   * @type { InlineKeyboardButton[][] }
   * @memberof InlineKeyboardMarkup
   * @instance
   * @public
   */
  inlineKeyboard!: InlineKeyboardButton[][];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineKeyboardMarkup
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineKeyboardMarkup
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineKeyboardMarkup instance from raw Telegram API data
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

      this.inlineKeyboard = data.inlineKeyboard;
    }
  }
}
