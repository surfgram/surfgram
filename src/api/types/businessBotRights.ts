/**
 * BusinessBotRights class for Surfgram Telegram Bot SDK
 * @module types/businessBotRights
 * @description Represents the rights of a business bot.
 * @see {@link https://core.telegram.org/bots/api#businessbotrights Telegram API Documentation}
 * @class BusinessBotRights
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BusinessBotRights object from the Telegram Bot API
 * @class BusinessBotRights
 */
export class BusinessBotRights {
  /**
   * Optional. True, if the bot can send and edit messages in the private chats that had incoming messages in the last 24 hours
   * @type { boolean }
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  canReply?: boolean;

  /**
   * Optional. True, if the bot can mark incoming private messages as read
   * @type { boolean }
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  canReadMessages?: boolean;

  /**
   * Optional. True, if the bot can delete messages sent by the bot
   * @type { boolean }
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  canDeleteSentMessages?: boolean;

  /**
   * Optional. True, if the bot can delete all private messages in managed chats
   * @type { boolean }
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  canDeleteAllMessages?: boolean;

  /**
   * Optional. True, if the bot can edit the first and last name of the business account
   * @type { boolean }
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  canEditName?: boolean;

  /**
   * Optional. True, if the bot can edit the bio of the business account
   * @type { boolean }
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  canEditBio?: boolean;

  /**
   * Optional. True, if the bot can edit the profile photo of the business account
   * @type { boolean }
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  canEditProfilePhoto?: boolean;

  /**
   * Optional. True, if the bot can edit the username of the business account
   * @type { boolean }
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  canEditUsername?: boolean;

  /**
   * Optional. True, if the bot can change the privacy settings pertaining to gifts for the business account
   * @type { boolean }
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  canChangeGiftSettings?: boolean;

  /**
   * Optional. True, if the bot can view gifts and the amount of Telegram Stars owned by the business account
   * @type { boolean }
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  canViewGiftsAndStars?: boolean;

  /**
   * Optional. True, if the bot can convert regular gifts owned by the business account to Telegram Stars
   * @type { boolean }
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  canConvertGiftsToStars?: boolean;

  /**
   * Optional. True, if the bot can transfer and upgrade gifts owned by the business account
   * @type { boolean }
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  canTransferAndUpgradeGifts?: boolean;

  /**
   * Optional. True, if the bot can transfer Telegram Stars received by the business account to its own account, or use them to upgrade and transfer gifts
   * @type { boolean }
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  canTransferStars?: boolean;

  /**
   * Optional. True, if the bot can post, edit and delete stories on behalf of the business account
   * @type { boolean }
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  canManageStories?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BusinessBotRights
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BusinessBotRights instance from raw Telegram API data
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
