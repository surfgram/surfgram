/**
 * PollMedia class for Surfgram Telegram Bot SDK
 * @module types/pollMedia
 * @description At most one of the optional fields can be present in any given object.
 * @see {@link https://core.telegram.org/bots/api#pollmedia Telegram API Documentation}
 * @class PollMedia
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Animation } from './animation';
import { Audio } from './audio';
import { Document } from './document';
import { Link } from './link';
import { LivePhoto } from './livePhoto';
import { Location } from './location';
import { PhotoSize } from './photoSize';
import { Sticker } from './sticker';
import { Venue } from './venue';
import { Video } from './video';

/**
 * Represents a PollMedia object from the Telegram Bot API
 * @class PollMedia
 */
export class PollMedia {
  /**
   * Optional. Media is an animation, information about the animation
   * @type { Animation }
   * @memberof PollMedia
   * @instance
   * @public
   */
  animation?: Animation;

  /**
   * Optional. Media is an audio file, information about the file; currently, can't be received in a poll option
   * @type { Audio }
   * @memberof PollMedia
   * @instance
   * @public
   */
  audio?: Audio;

  /**
   * Optional. Media is a general file, information about the file; currently, can't be received in a poll option
   * @type { Document }
   * @memberof PollMedia
   * @instance
   * @public
   */
  document?: Document;

  /**
   * Optional. The HTTP link attached to the poll option
   * @type { Link }
   * @memberof PollMedia
   * @instance
   * @public
   */
  link?: Link;

  /**
   * Optional. Media is a live photo, information about the live photo
   * @type { LivePhoto }
   * @memberof PollMedia
   * @instance
   * @public
   */
  livePhoto?: LivePhoto;

  /**
   * Optional. Media is a shared location, information about the location
   * @type { Location }
   * @memberof PollMedia
   * @instance
   * @public
   */
  location?: Location;

  /**
   * Optional. Media is a photo, available sizes of the photo
   * @type { PhotoSize[] }
   * @memberof PollMedia
   * @instance
   * @public
   */
  photo?: PhotoSize[];

  /**
   * Optional. Media is a sticker, information about the sticker; currently, for poll options only
   * @type { Sticker }
   * @memberof PollMedia
   * @instance
   * @public
   */
  sticker?: Sticker;

  /**
   * Optional. Media is a venue, information about the venue
   * @type { Venue }
   * @memberof PollMedia
   * @instance
   * @public
   */
  venue?: Venue;

  /**
   * Optional. Media is a video, information about the video
   * @type { Video }
   * @memberof PollMedia
   * @instance
   * @public
   */
  video?: Video;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PollMedia
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PollMedia
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PollMedia instance from raw Telegram API data
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
