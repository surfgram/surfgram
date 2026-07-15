/**
 * InputRichMessage class for Surfgram Telegram Bot SDK
 * @module types/inputRichMessage
 * @description Describes a rich message to be sent. Exactly one of the fields html, markdown, or blocks must be used.
 * @see {@link https://core.telegram.org/bots/api#inputrichmessage Telegram API Documentation}
 * @class InputRichMessage
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputRichBlock } from './inputRichBlock';
import { InputRichMessageMedia } from './inputRichMessageMedia';

/**
 * Represents a InputRichMessage object from the Telegram Bot API
 * @class InputRichMessage
 */
export class InputRichMessage {
  /**
   * Optional. Content of the rich message to send described as a list of blocks
   * @type { InputRichBlock[] }
   * @memberof InputRichMessage
   * @instance
   * @public
   */
  blocks?: InputRichBlock[];

  /**
   * Optional. Content of the rich message to send described using HTML formatting. See rich message formatting options for more details. Use media field to specify the media used in the message.
   * @type { string }
   * @memberof InputRichMessage
   * @instance
   * @public
   */
  html?: string;

  /**
   * Optional. Content of the rich message to send described using Markdown formatting. See rich message formatting options for more details. Use media field to specify the media used in the message.
   * @type { string }
   * @memberof InputRichMessage
   * @instance
   * @public
   */
  markdown?: string;

  /**
   * Optional. List of media that are specified in the markdown or html fields using tg://photo?id=, tg://video?id=, and tg://audio?id= links
   * @type { InputRichMessageMedia[] }
   * @memberof InputRichMessage
   * @instance
   * @public
   */
  media?: InputRichMessageMedia[];

  /**
   * Optional. Pass True if the rich message must be shown right-to-left
   * @type { boolean }
   * @memberof InputRichMessage
   * @instance
   * @public
   */
  isRtl?: boolean;

  /**
   * Optional. Pass True to skip automatic detection of entities \(e.g., URLs, email addresses, username mentions, hashtags, cashtags, bot commands, or phone numbers\) in the text
   * @type { boolean }
   * @memberof InputRichMessage
   * @instance
   * @public
   */
  skipEntityDetection?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichMessage
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichMessage
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichMessage instance from raw Telegram API data
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
