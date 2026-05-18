/**
 * InputPollMedia class for Surfgram Telegram Bot SDK
 * @module types/inputPollMedia
 * @description This object represents the content of a poll description or a quiz explanation to be sent. It should be one of
 * @see {@link https://core.telegram.org/bots/api#inputpollmedia Telegram API Documentation}
 * @class InputPollMedia
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { PollMedia } from './pollMedia';
import { User } from './user';
import { Chat } from './chat';

/**
 * Represents a InputPollMedia object from the Telegram Bot API
 * @class InputPollMedia
 */
export class InputPollMedia {
  /**
   * Unique identifier of the option, persistent on option addition and deletion
   * @type { string }
   * @memberof InputPollMedia
   * @instance
   * @public
   */
  persistentId!: string;

  /**
   * Option text, 1-100 characters
   * @type { string }
   * @memberof InputPollMedia
   * @instance
   * @public
   */
  text!: string;

  /**
   * Optional. Special entities that appear in the option text. Currently, only custom emoji entities are allowed in poll option texts
   * @type { MessageEntity[] }
   * @memberof InputPollMedia
   * @instance
   * @public
   */
  textEntities?: MessageEntity[];

  /**
   * Optional. Media added to the poll option
   * @type { PollMedia }
   * @memberof InputPollMedia
   * @instance
   * @public
   */
  media?: PollMedia;

  /**
   * Number of users who voted for this option; may be 0 if unknown
   * @type { number }
   * @memberof InputPollMedia
   * @instance
   * @public
   */
  voterCount!: number;

  /**
   * Optional. User who added the option; omitted if the option wasn't added by a user after poll creation
   * @type { User }
   * @memberof InputPollMedia
   * @instance
   * @public
   */
  addedByUser?: User;

  /**
   * Optional. Chat that added the option; omitted if the option wasn't added by a chat after poll creation
   * @type { Chat }
   * @memberof InputPollMedia
   * @instance
   * @public
   */
  addedByChat?: Chat;

  /**
   * Optional. Point in time \(Unix timestamp\) when the option was added; omitted if the option existed in the original poll
   * @type { number }
   * @memberof InputPollMedia
   * @instance
   * @public
   */
  additionDate?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputPollMedia
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputPollMedia
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputPollMedia instance from raw Telegram API data
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
