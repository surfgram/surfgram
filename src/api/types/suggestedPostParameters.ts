/**
 * SuggestedPostParameters class for Surfgram Telegram Bot SDK
 * @module types/suggestedPostParameters
 * @description Contains parameters of a post that is being suggested by the bot.
 * @see {@link https://core.telegram.org/bots/api#suggestedpostparameters Telegram API Documentation}
 * @class SuggestedPostParameters
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { SuggestedPostPrice } from './suggestedPostPrice';

/**
 * Represents a SuggestedPostParameters object from the Telegram Bot API
 * @class SuggestedPostParameters
 */
export class SuggestedPostParameters {
  /**
   * Optional. Proposed price for the post. If the field is omitted, then the post is unpaid.
   * @type { SuggestedPostPrice }
   * @memberof SuggestedPostParameters
   * @instance
   * @public
   */
  price?: SuggestedPostPrice;

  /**
   * Optional. Proposed send date of the post. If specified, then the date must be between 300 second and 2678400 seconds \(30 days\) in the future. If the field is omitted, then the post can be published at any time within 30 days at the sole discretion of the user who approves it.
   * @type { number }
   * @memberof SuggestedPostParameters
   * @instance
   * @public
   */
  sendDate?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof SuggestedPostParameters
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof SuggestedPostParameters
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new SuggestedPostParameters instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
