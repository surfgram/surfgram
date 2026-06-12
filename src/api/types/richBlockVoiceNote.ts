/**
 * RichBlockVoiceNote class for Surfgram Telegram Bot SDK
 * @module types/richBlockVoiceNote
 * @description A block with a voice note, corresponding to the HTML tag &lt;audio&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockvoicenote Telegram API Documentation}
 * @class RichBlockVoiceNote
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Voice } from './voice';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a RichBlockVoiceNote object from the Telegram Bot API
 * @class RichBlockVoiceNote
 */
export class RichBlockVoiceNote {
  /**
   * Type of the block, always “voice\_note”
   * @type { string }
   * @memberof RichBlockVoiceNote
   * @instance
   * @public
   */
  type!: string;

  /**
   * The voice note
   * @type { Voice }
   * @memberof RichBlockVoiceNote
   * @instance
   * @public
   */
  voiceNote!: Voice;

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof RichBlockVoiceNote
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockVoiceNote
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockVoiceNote
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockVoiceNote instance from raw Telegram API data
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
