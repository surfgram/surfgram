/**
 * VideoChatParticipantsInvited class for Surfgram Telegram Bot SDK
 * @module types/videoChatParticipantsInvited
 * @description This object represents a service message about new members invited to a video chat.
 * @see {@link https://core.telegram.org/bots/api#videochatparticipantsinvited Telegram API Documentation}
 * @class VideoChatParticipantsInvited
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a VideoChatParticipantsInvited object from the Telegram Bot API
 * @class VideoChatParticipantsInvited
 */
export class VideoChatParticipantsInvited {
  /**
   * New members that were invited to the video chat
   * @type { User[] }
   * @memberof VideoChatParticipantsInvited
   * @instance
   * @public
   */
  users!: User[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof VideoChatParticipantsInvited
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof VideoChatParticipantsInvited
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new VideoChatParticipantsInvited instance from raw Telegram API data
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

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.users = data.users;
    }
  }
}
