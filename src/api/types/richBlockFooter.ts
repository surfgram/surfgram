/**
 * RichBlockFooter class for Surfgram Telegram Bot SDK
 * @module types/richBlockFooter
 * @description A footer, corresponding to the HTML tag &lt;footer&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockfooter Telegram API Documentation}
 * @class RichBlockFooter
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichBlockFooter object from the Telegram Bot API
 * @class RichBlockFooter
 */
export class RichBlockFooter {
  /**
   * Type of the block, always “footer”
   * @type { string }
   * @memberof RichBlockFooter
   * @instance
   * @public
   */
  type!: string;

  /**
   * Text of the block
   * @type { RichText }
   * @memberof RichBlockFooter
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockFooter
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockFooter
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockFooter instance from raw Telegram API data
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
