/**
 * InputTextMessageContent class for Surfgram Telegram Bot SDK
 * @module types/inputTextMessageContent
 * @description Represents the content of a text message to be sent as the result of an inline query.
 * @see {@link https://core.telegram.org/bots/api#inputtextmessagecontent Telegram API Documentation}
 * @class InputTextMessageContent
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { LinkPreviewOptions } from './linkPreviewOptions';

/**
 * Represents a InputTextMessageContent object from the Telegram Bot API
 * @class InputTextMessageContent
 */
export class InputTextMessageContent {
  /**
   * Text of the message to be sent, 1-4096 characters
   * @type { string }
   * @memberof InputTextMessageContent
   * @instance
   * @public
   */
  messageText!: string;
  /**
   * Optional. Mode for parsing entities in the message text. See formatting options for more details.
   * @type { string }
   * @memberof InputTextMessageContent
   * @instance
   * @public
   */
  parseMode?: string;
  /**
   * Optional. List of special entities that appear in message text, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InputTextMessageContent
   * @instance
   * @public
   */
  entities?: MessageEntity[];
  /**
   * Optional. Link preview generation options for the message
   * @type { LinkPreviewOptions }
   * @memberof InputTextMessageContent
   * @instance
   * @public
   */
  linkPreviewOptions?: LinkPreviewOptions;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputTextMessageContent
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputTextMessageContent
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputTextMessageContent instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
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
