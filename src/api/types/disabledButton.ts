/**
 * DisabledButton class for Surfgram Telegram Bot SDK
 * @module types/disabledButton
 * @description This object represents a disabled button which does nothing. Currently holds no information.
 * @see {@link https://core.telegram.org/bots/api#disabledbutton Telegram API Documentation}
 * @class DisabledButton
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';
import { MaybeInaccessibleMessage } from './maybeInaccessibleMessage';

/**
 * Represents a DisabledButton object from the Telegram Bot API
 * @class DisabledButton
 */
export class DisabledButton {
  /**
   * Unique identifier for this query
   * @type { string }
   * @memberof DisabledButton
   * @instance
   * @public
   */
  id!: string;

  /**
   * Sender
   * @type { User }
   * @memberof DisabledButton
   * @instance
   * @public
   */
  from!: User;

  /**
   * Optional. Message sent by the bot with the callback button that originated the query
   * @type { MaybeInaccessibleMessage }
   * @memberof DisabledButton
   * @instance
   * @public
   */
  message?: MaybeInaccessibleMessage;

  /**
   * Optional. Identifier of the message sent via the bot in inline mode, that originated the query
   * @type { string }
   * @memberof DisabledButton
   * @instance
   * @public
   */
  inlineMessageId?: string;

  /**
   * Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.
   * @type { string }
   * @memberof DisabledButton
   * @instance
   * @public
   */
  chatInstance!: string;

  /**
   * Optional. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data.
   * @type { string }
   * @memberof DisabledButton
   * @instance
   * @public
   */
  data?: string;

  /**
   * Optional. Short name of a Game to be returned, serves as the unique identifier for the game
   * @type { string }
   * @memberof DisabledButton
   * @instance
   * @public
   */
  gameShortName?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof DisabledButton
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof DisabledButton
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new DisabledButton instance from raw Telegram API data
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
