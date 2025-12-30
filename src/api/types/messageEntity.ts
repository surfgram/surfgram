/**
 * MessageEntity class for Surfgram Telegram Bot SDK
 * @module types/messageEntity
 * @description This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
 * @see {@link https://core.telegram.org/bots/api#messageentity Telegram API Documentation}
 * @class MessageEntity
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a MessageEntity object from the Telegram Bot API
 * @class MessageEntity
 */
export class MessageEntity {
  /**
   * Type of the entity. Currently, can be “mention” \(@username\), “hashtag” \(#hashtag or #hashtag@chatusername\), “cashtag” \($USD or $USD@chatusername\), “bot\_command” \(/start@jobs\_bot\), “url” \(https://telegram.org\), “email” \(do-not-reply@telegram.org\), “phone\_number” \(+1-212-555-0123\), “bold” \(bold text\), “italic” \(italic text\), “underline” \(underlined text\), “strikethrough” \(strikethrough text\), “spoiler” \(spoiler message\), “blockquote” \(block quotation\), “expandable\_blockquote” \(collapsed-by-default block quotation\), “code” \(monowidth string\), “pre” \(monowidth block\), “text\_link” \(for clickable text URLs\), “text\_mention” \(for users without usernames\), “custom\_emoji” \(for inline custom emoji stickers\)
   * @type { string }
   * @memberof MessageEntity
   * @instance
   * @public
   */
  type!: string;
  /**
   * Offset in UTF-16 code units to the start of the entity
   * @type { number }
   * @memberof MessageEntity
   * @instance
   * @public
   */
  offset!: number;
  /**
   * Length of the entity in UTF-16 code units
   * @type { number }
   * @memberof MessageEntity
   * @instance
   * @public
   */
  length!: number;
  /**
   * Optional. For “text\_link” only, URL that will be opened after user taps on the text
   * @type { string }
   * @memberof MessageEntity
   * @instance
   * @public
   */
  url?: string;
  /**
   * Optional. For “text\_mention” only, the mentioned user
   * @type { User }
   * @memberof MessageEntity
   * @instance
   * @public
   */
  user?: User;
  /**
   * Optional. For “pre” only, the programming language of the entity text
   * @type { string }
   * @memberof MessageEntity
   * @instance
   * @public
   */
  language?: string;
  /**
   * Optional. For “custom\_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker
   * @type { string }
   * @memberof MessageEntity
   * @instance
   * @public
   */
  customEmojiId?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof MessageEntity
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof MessageEntity
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new MessageEntity instance from raw Telegram API data
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

      this.type = data.type;
      this.offset = data.offset;
      this.length = data.length;
      this.url = data.url;
      this.user = data.user;
      this.language = data.language;
      this.customEmojiId = data.customEmojiId;
    }
  }
}
