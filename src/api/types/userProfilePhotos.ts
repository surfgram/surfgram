/**
 * UserProfilePhotos class for Surfgram Telegram Bot SDK
 * @module types/userProfilePhotos
 * @description This object represent a user&#39;s profile pictures.
 * @see {@link https://core.telegram.org/bots/api#userprofilephotos Telegram API Documentation}
 * @class UserProfilePhotos
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { PhotoSize } from './photoSize';

/**
 * Represents a UserProfilePhotos object from the Telegram Bot API
 * @class UserProfilePhotos
 */
export class UserProfilePhotos {
  /**
   * Total number of profile pictures the target user has
   * @type { number }
   * @memberof UserProfilePhotos
   * @instance
   * @public
   */
  totalCount!: number;

  /**
   * Requested profile pictures \(in up to 4 sizes each\)
   * @type { PhotoSize[][] }
   * @memberof UserProfilePhotos
   * @instance
   * @public
   */
  photos!: PhotoSize[][];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof UserProfilePhotos
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof UserProfilePhotos
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new UserProfilePhotos instance from raw Telegram API data
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
