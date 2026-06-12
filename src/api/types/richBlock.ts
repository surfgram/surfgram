/**
 * RichBlock class for Surfgram Telegram Bot SDK
 * @module types/richBlock
 * @description This object represents a block in a rich formatted message. Currently, it can be any of the following types:
 * @see {@link https://core.telegram.org/bots/api#richblock Telegram API Documentation}
 * @class RichBlock
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichBlock object from the Telegram Bot API
 * @class RichBlock
 */
export class RichBlock {
  /**
   * Type of the block, always “paragraph”
   * @type { string }
   * @memberof RichBlock
   * @instance
   * @public
   */
  type!: string;

  /**
   * Text of the block
   * @type { RichText }
   * @memberof RichBlock
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlock
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlock
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlock instance from raw Telegram API data
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
