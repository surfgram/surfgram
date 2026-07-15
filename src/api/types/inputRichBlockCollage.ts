/**
 * InputRichBlockCollage class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockCollage
 * @description A collage, corresponding to the custom HTML tag &lt;tg-collage&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockcollage Telegram API Documentation}
 * @class InputRichBlockCollage
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputRichBlock } from './inputRichBlock';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a InputRichBlockCollage object from the Telegram Bot API
 * @class InputRichBlockCollage
 */
export class InputRichBlockCollage {
  /**
   * Type of the block, always “collage”
   * @type { string }
   * @memberof InputRichBlockCollage
   * @instance
   * @public
   */
  type!: string;

  /**
   * Elements of the collage
   * @type { InputRichBlock[] }
   * @memberof InputRichBlockCollage
   * @instance
   * @public
   */
  blocks!: InputRichBlock[];

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof InputRichBlockCollage
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockCollage
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockCollage
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockCollage instance from raw Telegram API data
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
