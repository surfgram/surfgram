/**
 * EphemeralMessageParameters class for Surfgram Telegram Bot SDK
 * @module types/ephemeralMessageParameters
 * @description Field Type Description receiver\_user\_id Integer Identifier of the user who will receive the message. It is not guaranteed that the user will receive the message, especially if they are offline. See here for more details. callback\_query\_id String Optional. Identifier of the callback query which triggered the message, if any replace\_callback\_query\_message Boolean Optional. Pass True if the ephemeral message must be shown in place of the original message. Must be False for callback queries from ephemeral messages, which must be edited using regular editEphemeralMessage… methods. MessageOrigin
 * @see {@link https://core.telegram.org/bots/api#ephemeralmessageparameters Telegram API Documentation}
 * @class EphemeralMessageParameters
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a EphemeralMessageParameters object from the Telegram Bot API
 * @class EphemeralMessageParameters
 */
export class EphemeralMessageParameters {
  /**
   * Identifier of the user who will receive the message. It is not guaranteed that the user will receive the message, especially if they are offline. See here for more details.
   * @type { number }
   * @memberof EphemeralMessageParameters
   * @instance
   * @public
   */
  receiverUserId!: number;

  /**
   * Optional. Identifier of the callback query which triggered the message, if any
   * @type { string }
   * @memberof EphemeralMessageParameters
   * @instance
   * @public
   */
  callbackQueryId?: string;

  /**
   * Optional. Pass True if the ephemeral message must be shown in place of the original message. Must be False for callback queries from ephemeral messages, which must be edited using regular editEphemeralMessage… methods.
   * @type { boolean }
   * @memberof EphemeralMessageParameters
   * @instance
   * @public
   */
  replaceCallbackQueryMessage?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof EphemeralMessageParameters
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof EphemeralMessageParameters
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new EphemeralMessageParameters instance from raw Telegram API data
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
