/**
 * InputRichBlockList class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockList
 * @description A list of blocks, corresponding to the HTML tag &lt;ul&gt; or &lt;ol&gt; with multiple nested tags &lt;li&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblocklist Telegram API Documentation}
 * @class InputRichBlockList
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputRichBlockListItem } from './inputRichBlockListItem';

/**
 * Represents a InputRichBlockList object from the Telegram Bot API
 * @class InputRichBlockList
 */
export class InputRichBlockList {
  /**
   * Type of the block, always “list”
   * @type { string }
   * @memberof InputRichBlockList
   * @instance
   * @public
   */
  type!: string;

  /**
   * Items of the list
   * @type { InputRichBlockListItem[] }
   * @memberof InputRichBlockList
   * @instance
   * @public
   */
  items!: InputRichBlockListItem[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockList
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockList
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockList instance from raw Telegram API data
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
