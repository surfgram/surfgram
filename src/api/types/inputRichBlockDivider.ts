/**
 * InputRichBlockDivider class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockDivider
 * @description A divider, corresponding to the HTML tag &lt;hr/&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockdivider Telegram API Documentation}
 * @class InputRichBlockDivider
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputRichBlockDivider object from the Telegram Bot API
 * @class InputRichBlockDivider
 */
export class InputRichBlockDivider {
  /**
   * Type of the block, always “divider”
   * @type { string }
   * @memberof InputRichBlockDivider
   * @instance
   * @public
   */
  type!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockDivider
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockDivider
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockDivider instance from raw Telegram API data
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
