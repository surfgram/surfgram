/**
 * RichBlockDetails class for Surfgram Telegram Bot SDK
 * @module types/richBlockDetails
 * @description An expandable block for details disclosure, corresponding to the HTML tag &lt;details&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockdetails Telegram API Documentation}
 * @class RichBlockDetails
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';
import { RichBlock } from './richBlock';

/**
 * Represents a RichBlockDetails object from the Telegram Bot API
 * @class RichBlockDetails
 */
export class RichBlockDetails {
  /**
   * Type of the block, always “details”
   * @type { string }
   * @memberof RichBlockDetails
   * @instance
   * @public
   */
  type!: string;

  /**
   * Always shown summary of the block
   * @type { RichText }
   * @memberof RichBlockDetails
   * @instance
   * @public
   */
  summary!: RichText;

  /**
   * Content of the block
   * @type { RichBlock[] }
   * @memberof RichBlockDetails
   * @instance
   * @public
   */
  blocks!: RichBlock[];

  /**
   * Optional. True, if the content of the block is visible by default
   * @type { boolean }
   * @memberof RichBlockDetails
   * @instance
   * @public
   */
  isOpen?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockDetails
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockDetails
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockDetails instance from raw Telegram API data
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
