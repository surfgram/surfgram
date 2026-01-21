/**
 * SwitchInlineQueryChosenChat class for Surfgram Telegram Bot SDK
 * @module types/switchInlineQueryChosenChat
 * @description This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.
 * @see {@link https://core.telegram.org/bots/api#switchinlinequerychosenchat Telegram API Documentation}
 * @class SwitchInlineQueryChosenChat
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a SwitchInlineQueryChosenChat object from the Telegram Bot API
 * @class SwitchInlineQueryChosenChat
 */
export class SwitchInlineQueryChosenChat {
  /**
   * Optional. The default inline query to be inserted in the input field. If left empty, only the bot's username will be inserted
   * @type { string }
   * @memberof SwitchInlineQueryChosenChat
   * @instance
   * @public
   */
  query?: string;

  /**
   * Optional. True, if private chats with users can be chosen
   * @type { boolean }
   * @memberof SwitchInlineQueryChosenChat
   * @instance
   * @public
   */
  allowUserChats?: boolean;

  /**
   * Optional. True, if private chats with bots can be chosen
   * @type { boolean }
   * @memberof SwitchInlineQueryChosenChat
   * @instance
   * @public
   */
  allowBotChats?: boolean;

  /**
   * Optional. True, if group and supergroup chats can be chosen
   * @type { boolean }
   * @memberof SwitchInlineQueryChosenChat
   * @instance
   * @public
   */
  allowGroupChats?: boolean;

  /**
   * Optional. True, if channel chats can be chosen
   * @type { boolean }
   * @memberof SwitchInlineQueryChosenChat
   * @instance
   * @public
   */
  allowChannelChats?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof SwitchInlineQueryChosenChat
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof SwitchInlineQueryChosenChat
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new SwitchInlineQueryChosenChat instance from raw Telegram API data
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
