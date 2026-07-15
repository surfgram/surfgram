/**
 * CommunityChatRemoved class for Surfgram Telegram Bot SDK
 * @module types/communityChatRemoved
 * @description Describes a service message about a chat being removed from a community. Currently holds no information.
 * @see {@link https://core.telegram.org/bots/api#communitychatremoved Telegram API Documentation}
 * @class CommunityChatRemoved
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a CommunityChatRemoved object from the Telegram Bot API
 * @class CommunityChatRemoved
 */
export class CommunityChatRemoved {
  /**
   * Name of the topic
   * @type { string }
   * @memberof CommunityChatRemoved
   * @instance
   * @public
   */
  name!: string;

  /**
   * Color of the topic icon in RGB format
   * @type { number }
   * @memberof CommunityChatRemoved
   * @instance
   * @public
   */
  iconColor!: number;

  /**
   * Optional. Unique identifier of the custom emoji shown as the topic icon
   * @type { string }
   * @memberof CommunityChatRemoved
   * @instance
   * @public
   */
  iconCustomEmojiId?: string;

  /**
   * Optional. True, if the name of the topic wasn't specified explicitly by its creator and likely needs to be changed by the bot
   * @type { boolean }
   * @memberof CommunityChatRemoved
   * @instance
   * @public
   */
  isNameImplicit?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof CommunityChatRemoved
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof CommunityChatRemoved
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new CommunityChatRemoved instance from raw Telegram API data
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
