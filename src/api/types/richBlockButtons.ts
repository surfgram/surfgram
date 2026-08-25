/**
 * RichBlockButtons class for Surfgram Telegram Bot SDK
 * @module types/richBlockButtons
 * @description A block containing a list of buttons that are shown in one row, corresponding to the custom HTML tag &lt;tg-button-row&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockbuttons Telegram API Documentation}
 * @class RichBlockButtons
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichMessageButton } from './richMessageButton';

/**
 * Represents a RichBlockButtons object from the Telegram Bot API
 * @class RichBlockButtons
 */
export class RichBlockButtons {
  /**
   * Type of the block, always “buttons”
   * @type { string }
   * @memberof RichBlockButtons
   * @instance
   * @public
   */
  type!: string;

  /**
   * The buttons
   * @type { RichMessageButton[] }
   * @memberof RichBlockButtons
   * @instance
   * @public
   */
  buttons!: RichMessageButton[];

  /**
   * Optional. Horizontal alignment of the buttons. Currently, must be one of “left”, “center”, or “right”.
   * @type { string }
   * @memberof RichBlockButtons
   * @instance
   * @public
   */
  align?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockButtons
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockButtons
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockButtons instance from raw Telegram API data
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
