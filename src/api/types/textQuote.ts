/**
 * TextQuote class for Surfgram Telegram Bot SDK
 * @module types/textQuote
 * @description This object contains information about the quoted part of a message that is replied to by the given message.
 * @see {@link https://core.telegram.org/bots/api#textquote Telegram API Documentation}
 * @class TextQuote
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';

/**
 * Represents a TextQuote object from the Telegram Bot API
 * @class TextQuote
 */
export class TextQuote {
  /**
   * Text of the quoted part of a message that is replied to by the given message
   * @type { string }
   * @memberof TextQuote
   * @instance
   * @public
   */
  text!: string;

  /**
   * Optional. Special entities that appear in the quote. Currently, only bold, italic, underline, strikethrough, spoiler, and custom\_emoji entities are kept in quotes.
   * @type { MessageEntity[] }
   * @memberof TextQuote
   * @instance
   * @public
   */
  entities?: MessageEntity[];

  /**
   * Approximate quote position in the original message in UTF-16 code units as specified by the sender
   * @type { number }
   * @memberof TextQuote
   * @instance
   * @public
   */
  position!: number;

  /**
   * Optional. True, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server.
   * @type { boolean }
   * @memberof TextQuote
   * @instance
   * @public
   */
  isManual?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof TextQuote
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof TextQuote
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new TextQuote instance from raw Telegram API data
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
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
