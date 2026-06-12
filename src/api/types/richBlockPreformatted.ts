/**
 * RichBlockPreformatted class for Surfgram Telegram Bot SDK
 * @module types/richBlockPreformatted
 * @description A preformatted text block, corresponding to the nested HTML tags &lt;pre&gt; and &lt;code&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockpreformatted Telegram API Documentation}
 * @class RichBlockPreformatted
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichBlockPreformatted object from the Telegram Bot API
 * @class RichBlockPreformatted
 */
export class RichBlockPreformatted {
  /**
   * Type of the block, always “pre”
   * @type { string }
   * @memberof RichBlockPreformatted
   * @instance
   * @public
   */
  type!: string;

  /**
   * Text of the block
   * @type { RichText }
   * @memberof RichBlockPreformatted
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Optional. The programming language of the text
   * @type { string }
   * @memberof RichBlockPreformatted
   * @instance
   * @public
   */
  language?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockPreformatted
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockPreformatted
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockPreformatted instance from raw Telegram API data
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
