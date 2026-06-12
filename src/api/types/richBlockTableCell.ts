/**
 * RichBlockTableCell class for Surfgram Telegram Bot SDK
 * @module types/richBlockTableCell
 * @description Cell in a table.
 * @see {@link https://core.telegram.org/bots/api#richblocktablecell Telegram API Documentation}
 * @class RichBlockTableCell
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichBlockTableCell object from the Telegram Bot API
 * @class RichBlockTableCell
 */
export class RichBlockTableCell {
  /**
   * Optional. Text in the cell. If omitted, then the cell is invisible.
   * @type { RichText }
   * @memberof RichBlockTableCell
   * @instance
   * @public
   */
  text?: RichText;

  /**
   * Optional. True, if the cell is a header cell
   * @type { boolean }
   * @memberof RichBlockTableCell
   * @instance
   * @public
   */
  isHeader?: boolean;

  /**
   * Optional. The number of columns the cell spans if it is bigger than 1
   * @type { number }
   * @memberof RichBlockTableCell
   * @instance
   * @public
   */
  colspan?: number;

  /**
   * Optional. The number of rows the cell spans if it is bigger than 1
   * @type { number }
   * @memberof RichBlockTableCell
   * @instance
   * @public
   */
  rowspan?: number;

  /**
   * Horizontal cell content alignment. Currently, must be one of “left”, “center”, or “right”.
   * @type { string }
   * @memberof RichBlockTableCell
   * @instance
   * @public
   */
  align!: string;

  /**
   * Vertical cell content alignment. Currently, must be one of “top”, “middle”, or “bottom”.
   * @type { string }
   * @memberof RichBlockTableCell
   * @instance
   * @public
   */
  valign!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockTableCell
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockTableCell
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockTableCell instance from raw Telegram API data
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
