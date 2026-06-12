/**
 * InputRichMessageContent class for Surfgram Telegram Bot SDK
 * @module types/inputRichMessageContent
 * @description Represents the content of a rich message to be sent as the result of an inline query.
 * @see {@link https://core.telegram.org/bots/api#inputrichmessagecontent Telegram API Documentation}
 * @class InputRichMessageContent
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputRichMessage } from './inputRichMessage';

/**
 * Represents a InputRichMessageContent object from the Telegram Bot API
 * @class InputRichMessageContent
 */
export class InputRichMessageContent {
  /**
   * The message to be sent
   * @type { InputRichMessage }
   * @memberof InputRichMessageContent
   * @instance
   * @public
   */
  richMessage!: InputRichMessage;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichMessageContent
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichMessageContent
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichMessageContent instance from raw Telegram API data
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
