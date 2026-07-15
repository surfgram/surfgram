/**
 * InputRichBlockPreformatted class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockPreformatted
 * @description A preformatted text block, corresponding to the nested HTML tags &lt;pre&gt; and &lt;code&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockpreformatted Telegram API Documentation}
 * @class InputRichBlockPreformatted
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a InputRichBlockPreformatted object from the Telegram Bot API
 * @class InputRichBlockPreformatted
 */
export class InputRichBlockPreformatted {
  /**
   * Type of the block, always “pre”
   * @type { string }
   * @memberof InputRichBlockPreformatted
   * @instance
   * @public
   */
  type!: string;

  /**
   * Text of the block
   * @type { RichText }
   * @memberof InputRichBlockPreformatted
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Optional. The programming language of the text
   * @type { string }
   * @memberof InputRichBlockPreformatted
   * @instance
   * @public
   */
  language?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockPreformatted
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockPreformatted
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockPreformatted instance from raw Telegram API data
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
