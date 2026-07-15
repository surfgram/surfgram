/**
 * InputRichMessageMedia class for Surfgram Telegram Bot SDK
 * @module types/inputRichMessageMedia
 * @description Describes a media element embedded in an outgoing rich message.
 * @see {@link https://core.telegram.org/bots/api#inputrichmessagemedia Telegram API Documentation}
 * @class InputRichMessageMedia
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputMediaAnimation } from './inputMediaAnimation';
import { InputMediaAudio } from './inputMediaAudio';
import { InputMediaPhoto } from './inputMediaPhoto';
import { InputMediaVideo } from './inputMediaVideo';
import { InputMediaVoiceNote } from './inputMediaVoiceNote';

/**
 * Represents a InputRichMessageMedia object from the Telegram Bot API
 * @class InputRichMessageMedia
 */
export class InputRichMessageMedia {
  /**
   * Unique identifier of the media used in a tg://photo?id=, tg://video?id=, or tg://audio?id= link. 1-64 characters, only A-Z, a-z, 0-9, \_ and - are allowed.
   * @type { string }
   * @memberof InputRichMessageMedia
   * @instance
   * @public
   */
  id!: string;

  /**
   * The media to be sent. Everything except the media itself and its properties is ignored.
   * @type { InputMediaAnimation | InputMediaAudio | InputMediaPhoto | InputMediaVideo | InputMediaVoiceNote }
   * @memberof InputRichMessageMedia
   * @instance
   * @public
   */
  media!: InputMediaAnimation | InputMediaAudio | InputMediaPhoto | InputMediaVideo | InputMediaVoiceNote;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichMessageMedia
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichMessageMedia
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichMessageMedia instance from raw Telegram API data
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
