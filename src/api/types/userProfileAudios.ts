/**
 * UserProfileAudios class for Surfgram Telegram Bot SDK
 * @module types/userProfileAudios
 * @description This object represents the audios displayed on a user&#39;s profile.
 * @see {@link https://core.telegram.org/bots/api#userprofileaudios Telegram API Documentation}
 * @class UserProfileAudios
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Audio } from './audio';

/**
 * Represents a UserProfileAudios object from the Telegram Bot API
 * @class UserProfileAudios
 */
export class UserProfileAudios {
  /**
   * Total number of profile audios for the target user
   * @type { number }
   * @memberof UserProfileAudios
   * @instance
   * @public
   */
  totalCount!: number;

  /**
   * Requested profile audios
   * @type { Audio[] }
   * @memberof UserProfileAudios
   * @instance
   * @public
   */
  audios!: Audio[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof UserProfileAudios
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof UserProfileAudios
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new UserProfileAudios instance from raw Telegram API data
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
