/**
 * InputRichBlockListItem class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockListItem
 * @description An item of a list to be sent.
 * @see {@link https://core.telegram.org/bots/api#inputrichblocklistitem Telegram API Documentation}
 * @class InputRichBlockListItem
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputRichBlock } from './inputRichBlock';

/**
 * Represents a InputRichBlockListItem object from the Telegram Bot API
 * @class InputRichBlockListItem
 */
export class InputRichBlockListItem {
  /**
   * The content of the item
   * @type { InputRichBlock[] }
   * @memberof InputRichBlockListItem
   * @instance
   * @public
   */
  blocks!: InputRichBlock[];

  /**
   * Optional. Pass True if the item has a checkbox
   * @type { boolean }
   * @memberof InputRichBlockListItem
   * @instance
   * @public
   */
  hasCheckbox?: boolean;

  /**
   * Optional. Pass True if the item has a checked checkbox
   * @type { boolean }
   * @memberof InputRichBlockListItem
   * @instance
   * @public
   */
  isChecked?: boolean;

  /**
   * Optional. For ordered lists, the numeric value of the item label
   * @type { number }
   * @memberof InputRichBlockListItem
   * @instance
   * @public
   */
  value?: number;

  /**
   * Optional. For ordered lists, the type of the item label; must be one of “a” for lowercase letters, “A” for uppercase letters, “i” for lowercase Roman numerals, “I” for uppercase Roman numerals, or “1” for decimal numbers
   * @type { string }
   * @memberof InputRichBlockListItem
   * @instance
   * @public
   */
  type?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockListItem
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockListItem
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockListItem instance from raw Telegram API data
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
