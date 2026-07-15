/**
 * ReplyParameters class for Surfgram Telegram Bot SDK
 * @module types/replyParameters
 * @description Describes reply parameters for the message that is being sent.
 * @see {@link https://core.telegram.org/bots/api#replyparameters Telegram API Documentation}
 * @class ReplyParameters
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';

/**
 * Represents a ReplyParameters object from the Telegram Bot API
 * @class ReplyParameters
 */
export class ReplyParameters {
  /**
   * Optional. Identifier of the message that will be replied to in the current chat, or in the chat chat\_id if it is specified. Required if ephemeral\_message\_id isn't specified.
   * @type { number }
   * @memberof ReplyParameters
   * @instance
   * @public
   */
  messageId?: number;

  /**
   * Optional. If the message to be replied to is from a different chat, unique identifier for the chat or username of the bot, supergroup or channel in the format @username. Not supported for messages sent on behalf of a business account, messages from channel direct messages chats and ephemeral messages.
   * @type { number | string }
   * @memberof ReplyParameters
   * @instance
   * @public
   */
  chatId?: number | string;

  /**
   * Optional. Identifier of the incoming ephemeral message that will be replied to in the current chat. A reply to an ephemeral message must itself be an ephemeral message. An ephemeral message may only be replied to within 15 seconds of being sent. Required if message\_id isn't specified.
   * @type { number }
   * @memberof ReplyParameters
   * @instance
   * @public
   */
  ephemeralMessageId?: number;

  /**
   * Optional. Pass True if the message should be sent even if the specified message to be replied to is not found. Always False for replies in another chat or forum topic, and sent ephemeral messages. Always True for messages sent on behalf of a business account.
   * @type { boolean }
   * @memberof ReplyParameters
   * @instance
   * @public
   */
  allowSendingWithoutReply?: boolean;

  /**
   * Optional. Quoted part of the message to be replied to; 0-1024 characters after entities parsing. The quote must be an exact substring of the message to be replied to, including bold, italic, underline, strikethrough, spoiler, custom\_emoji, and date\_time entities. The message will fail to send if the quote isn't found in the original message. Ignored for ephemeral messages.
   * @type { string }
   * @memberof ReplyParameters
   * @instance
   * @public
   */
  quote?: string;

  /**
   * Optional. Mode for parsing entities in the quote. See formatting options for more details.
   * @type { string }
   * @memberof ReplyParameters
   * @instance
   * @public
   */
  quoteParseMode?: string;

  /**
   * Optional. A JSON-serialized list of special entities that appear in the quote. It can be specified instead of quote\_parse\_mode.
   * @type { MessageEntity[] }
   * @memberof ReplyParameters
   * @instance
   * @public
   */
  quoteEntities?: MessageEntity[];

  /**
   * Optional. Position of the quote in the original message in UTF-16 code units
   * @type { number }
   * @memberof ReplyParameters
   * @instance
   * @public
   */
  quotePosition?: number;

  /**
   * Optional. Identifier of the specific checklist task to be replied to
   * @type { number }
   * @memberof ReplyParameters
   * @instance
   * @public
   */
  checklistTaskId?: number;

  /**
   * Optional. Persistent identifier of the specific poll option to be replied to
   * @type { string }
   * @memberof ReplyParameters
   * @instance
   * @public
   */
  pollOptionId?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ReplyParameters
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ReplyParameters
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ReplyParameters instance from raw Telegram API data
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
