/**
 * InlineQuery class for Surfgram Telegram Bot SDK
 * @module types/inlineQuery
 * @description This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
 * @see {@link https://core.telegram.org/bots/api#inlinequery Telegram API Documentation}
 * @class InlineQuery
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';
import { Location } from './location';

/**
 * Represents a InlineQuery object from the Telegram Bot API
 * @class InlineQuery
 */
export class InlineQuery {
  /**
   * Unique identifier for this query
   * @type { string }
   * @memberof InlineQuery
   * @instance
   * @public
   */
  id!: string;
  /**
   * Sender
   * @type { User }
   * @memberof InlineQuery
   * @instance
   * @public
   */
  from!: User;
  /**
   * Text of the query \(up to 256 characters\)
   * @type { string }
   * @memberof InlineQuery
   * @instance
   * @public
   */
  query!: string;
  /**
   * Offset of the results to be returned, can be controlled by the bot
   * @type { string }
   * @memberof InlineQuery
   * @instance
   * @public
   */
  offset!: string;
  /**
   * Optional. Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat
   * @type { string }
   * @memberof InlineQuery
   * @instance
   * @public
   */
  chatType?: string;
  /**
   * Optional. Sender location, only for bots that request user location
   * @type { Location }
   * @memberof InlineQuery
   * @instance
   * @public
   */
  location?: Location;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQuery
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQuery
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQuery instance from raw Telegram API data
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

      this.id = data.id;
      this.from = data.from;
      this.query = data.query;
      this.offset = data.offset;
      this.chatType = data.chatType;
      this.location = data.location;
    }
  }
}
