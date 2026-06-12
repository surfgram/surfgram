/**
 * RichBlockAnchor class for Surfgram Telegram Bot SDK
 * @module types/richBlockAnchor
 * @description A block with an anchor, corresponding to the HTML tag &lt;a&gt; with the attribute name.
 * @see {@link https://core.telegram.org/bots/api#richblockanchor Telegram API Documentation}
 * @class RichBlockAnchor
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a RichBlockAnchor object from the Telegram Bot API
 * @class RichBlockAnchor
 */
export class RichBlockAnchor {
  /**
   * Type of the block, always “anchor”
   * @type { string }
   * @memberof RichBlockAnchor
   * @instance
   * @public
   */
  type!: string;

  /**
   * The name of the anchor
   * @type { string }
   * @memberof RichBlockAnchor
   * @instance
   * @public
   */
  name!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockAnchor
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockAnchor
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockAnchor instance from raw Telegram API data
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
