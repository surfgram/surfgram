/**
 * RichMessage class for Surfgram Telegram Bot SDK
 * @module types/richMessage
 * @description Rich formatted message.
 * @see {@link https://core.telegram.org/bots/api#richmessage Telegram API Documentation}
 * @class RichMessage
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichBlock } from './richBlock';

/**
 * Represents a RichMessage object from the Telegram Bot API
 * @class RichMessage
 */
export class RichMessage {
  /**
   * Content of the message
   * @type { RichBlock[] }
   * @memberof RichMessage
   * @instance
   * @public
   */
  blocks!: RichBlock[];

  /**
   * Optional. True, if the rich message must be shown right-to-left
   * @type { boolean }
   * @memberof RichMessage
   * @instance
   * @public
   */
  isRtl?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichMessage
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichMessage
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichMessage instance from raw Telegram API data
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
