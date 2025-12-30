/**
 * BackgroundTypeChatTheme class for Surfgram Telegram Bot SDK
 * @module types/backgroundTypeChatTheme
 * @description The background is taken directly from a built-in chat theme.
 * @see {@link https://core.telegram.org/bots/api#backgroundtypechattheme Telegram API Documentation}
 * @class BackgroundTypeChatTheme
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BackgroundTypeChatTheme object from the Telegram Bot API
 * @class BackgroundTypeChatTheme
 */
export class BackgroundTypeChatTheme {
  /**
   * Type of the background, always “chat\_theme”
   * @type { string }
   * @memberof BackgroundTypeChatTheme
   * @instance
   * @public
   */
  type!: string;
  /**
   * Name of the chat theme, which is usually an emoji
   * @type { string }
   * @memberof BackgroundTypeChatTheme
   * @instance
   * @public
   */
  themeName!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BackgroundTypeChatTheme
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BackgroundTypeChatTheme
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BackgroundTypeChatTheme instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.type = data.type;
      this.themeName = data.themeName;
    }
  }
}
