/**
 * WriteAccessAllowed class for Surfgram Telegram Bot SDK
 * @module types/writeAccessAllowed
 * @description This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess.
 * @see {@link https://core.telegram.org/bots/api#writeaccessallowed Telegram API Documentation}
 * @class WriteAccessAllowed
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a WriteAccessAllowed object from the Telegram Bot API
 * @class WriteAccessAllowed
 */
export class WriteAccessAllowed {
  /**
   * Optional. True, if the access was granted after the user accepted an explicit request from a Web App sent by the method requestWriteAccess
   * @type { boolean }
   * @memberof WriteAccessAllowed
   * @instance
   * @public
   */
  fromRequest?: boolean;
  /**
   * Optional. Name of the Web App, if the access was granted when the Web App was launched from a link
   * @type { string }
   * @memberof WriteAccessAllowed
   * @instance
   * @public
   */
  webAppName?: string;
  /**
   * Optional. True, if the access was granted when the bot was added to the attachment or side menu
   * @type { boolean }
   * @memberof WriteAccessAllowed
   * @instance
   * @public
   */
  fromAttachmentMenu?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof WriteAccessAllowed
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof WriteAccessAllowed
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new WriteAccessAllowed instance from raw Telegram API data
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

      this.fromRequest = data.fromRequest;
      this.webAppName = data.webAppName;
      this.fromAttachmentMenu = data.fromAttachmentMenu;
    }
  }
}
