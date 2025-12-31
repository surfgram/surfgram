/**
 * ExternalReplyInfo class for Surfgram Telegram Bot SDK
 * @module types/externalReplyInfo
 * @description This object contains information about a message that is being replied to, which may come from another chat or forum topic.
 * @see {@link https://core.telegram.org/bots/api#externalreplyinfo Telegram API Documentation}
 * @class ExternalReplyInfo
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageOrigin } from './messageOrigin';
import { Chat } from './chat';
import { LinkPreviewOptions } from './linkPreviewOptions';
import { Animation } from './animation';
import { Audio } from './audio';
import { Document } from './document';
import { PaidMediaInfo } from './paidMediaInfo';
import { PhotoSize } from './photoSize';
import { Sticker } from './sticker';
import { Story } from './story';
import { Video } from './video';
import { VideoNote } from './videoNote';
import { Voice } from './voice';
import { Checklist } from './checklist';
import { Contact } from './contact';
import { Dice } from './dice';
import { Game } from './game';
import { Giveaway } from './giveaway';
import { GiveawayWinners } from './giveawayWinners';
import { Invoice } from './invoice';
import { Location } from './location';
import { Poll } from './poll';
import { Venue } from './venue';

/**
 * Represents a ExternalReplyInfo object from the Telegram Bot API
 * @class ExternalReplyInfo
 */
export class ExternalReplyInfo {
  /**
   * Origin of the message replied to by the given message
   * @type { MessageOrigin }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  origin!: MessageOrigin;

  /**
   * Optional. Chat the original message belongs to. Available only if the chat is a supergroup or a channel.
   * @type { Chat }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  chat?: Chat;

  /**
   * Optional. Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel.
   * @type { number }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  messageId?: number;

  /**
   * Optional. Options used for link preview generation for the original message, if it is a text message
   * @type { LinkPreviewOptions }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  linkPreviewOptions?: LinkPreviewOptions;

  /**
   * Optional. Message is an animation, information about the animation
   * @type { Animation }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  animation?: Animation;

  /**
   * Optional. Message is an audio file, information about the file
   * @type { Audio }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  audio?: Audio;

  /**
   * Optional. Message is a general file, information about the file
   * @type { Document }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  document?: Document;

  /**
   * Optional. Message contains paid media; information about the paid media
   * @type { PaidMediaInfo }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  paidMedia?: PaidMediaInfo;

  /**
   * Optional. Message is a photo, available sizes of the photo
   * @type { PhotoSize[] }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  photo?: PhotoSize[];

  /**
   * Optional. Message is a sticker, information about the sticker
   * @type { Sticker }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  sticker?: Sticker;

  /**
   * Optional. Message is a forwarded story
   * @type { Story }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  story?: Story;

  /**
   * Optional. Message is a video, information about the video
   * @type { Video }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  video?: Video;

  /**
   * Optional. Message is a video note, information about the video message
   * @type { VideoNote }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  videoNote?: VideoNote;

  /**
   * Optional. Message is a voice message, information about the file
   * @type { Voice }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  voice?: Voice;

  /**
   * Optional. True, if the message media is covered by a spoiler animation
   * @type { boolean }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  hasMediaSpoiler?: boolean;

  /**
   * Optional. Message is a checklist
   * @type { Checklist }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  checklist?: Checklist;

  /**
   * Optional. Message is a shared contact, information about the contact
   * @type { Contact }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  contact?: Contact;

  /**
   * Optional. Message is a dice with random value
   * @type { Dice }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  dice?: Dice;

  /**
   * Optional. Message is a game, information about the game. More about games »
   * @type { Game }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  game?: Game;

  /**
   * Optional. Message is a scheduled giveaway, information about the giveaway
   * @type { Giveaway }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  giveaway?: Giveaway;

  /**
   * Optional. A giveaway with public winners was completed
   * @type { GiveawayWinners }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  giveawayWinners?: GiveawayWinners;

  /**
   * Optional. Message is an invoice for a payment, information about the invoice. More about payments »
   * @type { Invoice }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  invoice?: Invoice;

  /**
   * Optional. Message is a shared location, information about the location
   * @type { Location }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  location?: Location;

  /**
   * Optional. Message is a native poll, information about the poll
   * @type { Poll }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  poll?: Poll;

  /**
   * Optional. Message is a venue, information about the venue
   * @type { Venue }
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  venue?: Venue;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ExternalReplyInfo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ExternalReplyInfo instance from raw Telegram API data
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
