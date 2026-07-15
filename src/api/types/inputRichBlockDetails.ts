/**
 * InputRichBlockDetails class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockDetails
 * @description An expandable block for details disclosure, corresponding to the HTML tag &lt;details&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockdetails Telegram API Documentation}
 * @class InputRichBlockDetails
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';
import { InputRichBlock } from './inputRichBlock';

/**
 * Represents a InputRichBlockDetails object from the Telegram Bot API
 * @class InputRichBlockDetails
 */
export class InputRichBlockDetails {
  /**
   * Type of the block, always “details”
   * @type { string }
   * @memberof InputRichBlockDetails
   * @instance
   * @public
   */
  type!: string;

  /**
   * Always shown summary of the block
   * @type { RichText }
   * @memberof InputRichBlockDetails
   * @instance
   * @public
   */
  summary!: RichText;

  /**
   * Content of the block
   * @type { InputRichBlock[] }
   * @memberof InputRichBlockDetails
   * @instance
   * @public
   */
  blocks!: InputRichBlock[];

  /**
   * Optional. Pass True if the content of the block is visible by default
   * @type { boolean }
   * @memberof InputRichBlockDetails
   * @instance
   * @public
   */
  isOpen?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockDetails
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockDetails
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockDetails instance from raw Telegram API data
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
