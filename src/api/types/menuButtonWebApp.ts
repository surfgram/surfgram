/**
 * MenuButtonWebApp class for Surfgram Telegram Bot SDK
 * @module types/menuButtonWebApp
 * @description Represents a menu button, which launches a Web App.
 * @see {@link https://core.telegram.org/bots/api#menubuttonwebapp Telegram API Documentation}
 * @class MenuButtonWebApp
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { WebAppInfo } from './webAppInfo';

/**
 * Represents a MenuButtonWebApp object from the Telegram Bot API
 * @class MenuButtonWebApp
 */
export class MenuButtonWebApp {
  /**
   * Type of the button, must be web\_app
   * @type { string }
   * @memberof MenuButtonWebApp
   * @instance
   * @public
   */
  type!: string;
  /**
   * Text on the button
   * @type { string }
   * @memberof MenuButtonWebApp
   * @instance
   * @public
   */
  text!: string;
  /**
   * Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Alternatively, a t.me link to a Web App of the bot can be specified in the object instead of the Web App's URL, in which case the Web App will be opened as if the user pressed the link.
   * @type { WebAppInfo }
   * @memberof MenuButtonWebApp
   * @instance
   * @public
   */
  webApp!: WebAppInfo;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof MenuButtonWebApp
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof MenuButtonWebApp
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new MenuButtonWebApp instance from raw Telegram API data
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
      this.text = data.text;
      this.webApp = data.webApp;
    }
  }
}
