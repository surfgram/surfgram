/**
 * InputMessageContent class for Surfgram Telegram Bot SDK
 * @module types/inputMessageContent
 * @description This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 5 types:
 * @see {@link https://core.telegram.org/bots/api#inputmessagecontent Telegram API Documentation}
 * @class InputMessageContent
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { LinkPreviewOptions } from './linkPreviewOptions';

/**
 * Represents a InputMessageContent object from the Telegram Bot API
 * @class InputMessageContent
 */
export class InputMessageContent {
  /**
   * Text of the message to be sent, 1-4096 characters
   * @type { string }
   * @memberof InputMessageContent
   * @instance
   * @public
   */
  messageText!: string;
  /**
   * Optional. Mode for parsing entities in the message text. See formatting options for more details.
   * @type { string }
   * @memberof InputMessageContent
   * @instance
   * @public
   */
  parseMode?: string;
  /**
   * Optional. List of special entities that appear in message text, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InputMessageContent
   * @instance
   * @public
   */
  entities?: MessageEntity[];
  /**
   * Optional. Link preview generation options for the message
   * @type { LinkPreviewOptions }
   * @memberof InputMessageContent
   * @instance
   * @public
   */
  linkPreviewOptions?: LinkPreviewOptions;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputMessageContent
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputMessageContent
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputMessageContent instance from raw Telegram API data
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
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.messageText = data.messageText;
      this.parseMode = data.parseMode;
      this.entities = data.entities;
      this.linkPreviewOptions = data.linkPreviewOptions;
    }
  }
}
