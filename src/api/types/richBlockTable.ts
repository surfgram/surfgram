/**
 * RichBlockTable class for Surfgram Telegram Bot SDK
 * @module types/richBlockTable
 * @description A table, corresponding to the HTML tag &lt;table&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblocktable Telegram API Documentation}
 * @class RichBlockTable
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichBlockTableCell } from './richBlockTableCell';
import { RichText } from './richText';

/**
 * Represents a RichBlockTable object from the Telegram Bot API
 * @class RichBlockTable
 */
export class RichBlockTable {
  /**
   * Type of the block, always “table”
   * @type { string }
   * @memberof RichBlockTable
   * @instance
   * @public
   */
  type!: string;

  /**
   * Cells of the table
   * @type { RichBlockTableCell[][] }
   * @memberof RichBlockTable
   * @instance
   * @public
   */
  cells!: RichBlockTableCell[][];

  /**
   * Optional. True, if the table has borders
   * @type { boolean }
   * @memberof RichBlockTable
   * @instance
   * @public
   */
  isBordered?: boolean;

  /**
   * Optional. True, if the table is striped
   * @type { boolean }
   * @memberof RichBlockTable
   * @instance
   * @public
   */
  isStriped?: boolean;

  /**
   * Optional. Caption of the table
   * @type { RichText }
   * @memberof RichBlockTable
   * @instance
   * @public
   */
  caption?: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockTable
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockTable
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockTable instance from raw Telegram API data
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
