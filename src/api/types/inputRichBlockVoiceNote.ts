/**
 * InputRichBlockVoiceNote class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockVoiceNote
 * @description A block with a voice note, corresponding to the HTML tag &lt;audio&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockvoicenote Telegram API Documentation}
 * @class InputRichBlockVoiceNote
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputMediaVoiceNote } from './inputMediaVoiceNote';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a InputRichBlockVoiceNote object from the Telegram Bot API
 * @class InputRichBlockVoiceNote
 */
export class InputRichBlockVoiceNote {
  /**
   * Type of the block, always “voice\_note”
   * @type { string }
   * @memberof InputRichBlockVoiceNote
   * @instance
   * @public
   */
  type!: string;

  /**
   * The voice note. Caption is ignored.
   * @type { InputMediaVoiceNote }
   * @memberof InputRichBlockVoiceNote
   * @instance
   * @public
   */
  voiceNote!: InputMediaVoiceNote;

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof InputRichBlockVoiceNote
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockVoiceNote
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockVoiceNote
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockVoiceNote instance from raw Telegram API data
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
