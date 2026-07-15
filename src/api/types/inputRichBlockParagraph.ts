/**
 * InputRichBlockParagraph class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockParagraph
 * @description A text paragraph, corresponding to the HTML tag &lt;p&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockparagraph Telegram API Documentation}
 * @class InputRichBlockParagraph
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a InputRichBlockParagraph object from the Telegram Bot API
 * @class InputRichBlockParagraph
 */
export class InputRichBlockParagraph {
  /**
   * Type of the block, always “paragraph”
   * @type { string }
   * @memberof InputRichBlockParagraph
   * @instance
   * @public
   */
  type!: string;

  /**
   * Text of the block
   * @type { RichText }
   * @memberof InputRichBlockParagraph
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockParagraph
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockParagraph
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockParagraph instance from raw Telegram API data
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
