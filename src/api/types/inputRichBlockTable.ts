/**
 * InputRichBlockTable class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockTable
 * @description A table, corresponding to the HTML tag &lt;table&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblocktable Telegram API Documentation}
 * @class InputRichBlockTable
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichBlockTableCell } from './richBlockTableCell';
import { RichText } from './richText';

/**
 * Represents a InputRichBlockTable object from the Telegram Bot API
 * @class InputRichBlockTable
 */
export class InputRichBlockTable {
  /**
   * Type of the block, always “table”
   * @type { string }
   * @memberof InputRichBlockTable
   * @instance
   * @public
   */
  type!: string;

  /**
   * Cells of the table
   * @type { RichBlockTableCell[][] }
   * @memberof InputRichBlockTable
   * @instance
   * @public
   */
  cells!: RichBlockTableCell[][];

  /**
   * Optional. Pass True if the table has borders
   * @type { boolean }
   * @memberof InputRichBlockTable
   * @instance
   * @public
   */
  isBordered?: boolean;

  /**
   * Optional. Pass True if the table is striped
   * @type { boolean }
   * @memberof InputRichBlockTable
   * @instance
   * @public
   */
  isStriped?: boolean;

  /**
   * Optional. Caption of the table
   * @type { RichText }
   * @memberof InputRichBlockTable
   * @instance
   * @public
   */
  caption?: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockTable
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockTable
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockTable instance from raw Telegram API data
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
