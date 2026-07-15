/**
 * InputRichBlock class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlock
 * @description This object represents a block in a rich formatted message to be sent. Currently, it can be any of the following types:
 * @see {@link https://core.telegram.org/bots/api#inputrichblock Telegram API Documentation}
 * @class InputRichBlock
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a InputRichBlock object from the Telegram Bot API
 * @class InputRichBlock
 */
export class InputRichBlock {
  /**
   * Type of the block, always “paragraph”
   * @type { string }
   * @memberof InputRichBlock
   * @instance
   * @public
   */
  type!: string;

  /**
   * Text of the block
   * @type { RichText }
   * @memberof InputRichBlock
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlock
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlock
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlock instance from raw Telegram API data
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
