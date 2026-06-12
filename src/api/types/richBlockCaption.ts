/**
 * RichBlockCaption class for Surfgram Telegram Bot SDK
 * @module types/richBlockCaption
 * @description Caption of a rich formatted block.
 * @see {@link https://core.telegram.org/bots/api#richblockcaption Telegram API Documentation}
 * @class RichBlockCaption
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichBlockCaption object from the Telegram Bot API
 * @class RichBlockCaption
 */
export class RichBlockCaption {
  /**
   * Block caption
   * @type { RichText }
   * @memberof RichBlockCaption
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Optional. Block credit which corresponds to the HTML tag &lt;cite&gt;
   * @type { RichText }
   * @memberof RichBlockCaption
   * @instance
   * @public
   */
  credit?: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockCaption
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockCaption
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockCaption instance from raw Telegram API data
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
