/**
 * ForceReply class for Surfgram Telegram Bot SDK
 * @module types/forceReply
 * @description Upon receiving a message with this object, Telegram clients will display a reply interface to the user \(act as if the user has selected the bot&#39;s message and tapped &#39;Reply&#39;\). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode. Not supported in channels and for messages sent on behalf of a Telegram Business account.
 * @see {@link https://core.telegram.org/bots/api#forcereply Telegram API Documentation}
 * @class ForceReply
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a ForceReply object from the Telegram Bot API
 * @class ForceReply
 */
export class ForceReply {
  /**
   * Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply'
   * @type { boolean }
   * @memberof ForceReply
   * @instance
   * @public
   */
  forceReply!: boolean;
  /**
   * Optional. The placeholder to be shown in the input field when the reply is active; 1-64 characters
   * @type { string }
   * @memberof ForceReply
   * @instance
   * @public
   */
  inputFieldPlaceholder?: string;
  /**
   * Optional. Use this parameter if you want to force reply from specific users only. Targets: 1\) users that are @mentioned in the text of the Message object; 2\) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.
   * @type { boolean }
   * @memberof ForceReply
   * @instance
   * @public
   */
  selective?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ForceReply
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ForceReply
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ForceReply instance from raw Telegram API data
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

      this.forceReply = data.forceReply;
      this.inputFieldPlaceholder = data.inputFieldPlaceholder;
      this.selective = data.selective;
    }
  }
}
