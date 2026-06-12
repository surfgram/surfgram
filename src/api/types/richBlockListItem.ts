/**
 * RichBlockListItem class for Surfgram Telegram Bot SDK
 * @module types/richBlockListItem
 * @description An item of a list.
 * @see {@link https://core.telegram.org/bots/api#richblocklistitem Telegram API Documentation}
 * @class RichBlockListItem
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichBlock } from './richBlock';

/**
 * Represents a RichBlockListItem object from the Telegram Bot API
 * @class RichBlockListItem
 */
export class RichBlockListItem {
  /**
   * Label of the item
   * @type { string }
   * @memberof RichBlockListItem
   * @instance
   * @public
   */
  label!: string;

  /**
   * The content of the item
   * @type { RichBlock[] }
   * @memberof RichBlockListItem
   * @instance
   * @public
   */
  blocks!: RichBlock[];

  /**
   * Optional. True, if the item has a checkbox
   * @type { boolean }
   * @memberof RichBlockListItem
   * @instance
   * @public
   */
  hasCheckbox?: boolean;

  /**
   * Optional. True, if the item has a checked checkbox
   * @type { boolean }
   * @memberof RichBlockListItem
   * @instance
   * @public
   */
  isChecked?: boolean;

  /**
   * Optional. For ordered lists, the numeric value of the item label
   * @type { number }
   * @memberof RichBlockListItem
   * @instance
   * @public
   */
  value?: number;

  /**
   * Optional. For ordered lists, the type of the item label; must be one of “a” for lowercase letters, “A” for uppercase letters, “i” for lowercase Roman numerals, “I” for uppercase Roman numerals, or “1” for decimal numbers
   * @type { string }
   * @memberof RichBlockListItem
   * @instance
   * @public
   */
  type?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockListItem
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockListItem
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockListItem instance from raw Telegram API data
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
