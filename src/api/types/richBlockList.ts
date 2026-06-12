/**
 * RichBlockList class for Surfgram Telegram Bot SDK
 * @module types/richBlockList
 * @description A list of blocks, corresponding to the HTML tag &lt;ul&gt; or &lt;ol&gt; with multiple nested tags &lt;li&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblocklist Telegram API Documentation}
 * @class RichBlockList
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichBlockListItem } from './richBlockListItem';

/**
 * Represents a RichBlockList object from the Telegram Bot API
 * @class RichBlockList
 */
export class RichBlockList {
  /**
   * Type of the block, always “list”
   * @type { string }
   * @memberof RichBlockList
   * @instance
   * @public
   */
  type!: string;

  /**
   * Items of the list
   * @type { RichBlockListItem[] }
   * @memberof RichBlockList
   * @instance
   * @public
   */
  items!: RichBlockListItem[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockList
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockList
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockList instance from raw Telegram API data
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
