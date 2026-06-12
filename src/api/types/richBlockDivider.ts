/**
 * RichBlockDivider class for Surfgram Telegram Bot SDK
 * @module types/richBlockDivider
 * @description A divider, corresponding to the HTML tag &lt;hr/&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockdivider Telegram API Documentation}
 * @class RichBlockDivider
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a RichBlockDivider object from the Telegram Bot API
 * @class RichBlockDivider
 */
export class RichBlockDivider {
  /**
   * Type of the block, always “divider”
   * @type { string }
   * @memberof RichBlockDivider
   * @instance
   * @public
   */
  type!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockDivider
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockDivider
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockDivider instance from raw Telegram API data
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
