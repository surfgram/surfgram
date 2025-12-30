/**
 * InlineQueryResultsButton class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultsButton
 * @description This object represents a button to be shown above inline query results. You must use exactly one of the optional fields.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultsbutton Telegram API Documentation}
 * @class InlineQueryResultsButton
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { WebAppInfo } from './webAppInfo';

/**
 * Represents a InlineQueryResultsButton object from the Telegram Bot API
 * @class InlineQueryResultsButton
 */
export class InlineQueryResultsButton {
  /**
   * Label text on the button
   * @type { string }
   * @memberof InlineQueryResultsButton
   * @instance
   * @public
   */
  text!: string;
  /**
   * Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App.
   * @type { WebAppInfo }
   * @memberof InlineQueryResultsButton
   * @instance
   * @public
   */
  webApp?: WebAppInfo;
  /**
   * Optional. Deep-linking parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, \_ and - are allowed.Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch\_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
   * @type { string }
   * @memberof InlineQueryResultsButton
   * @instance
   * @public
   */
  startParameter?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultsButton
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultsButton
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultsButton instance from raw Telegram API data
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

      this.text = data.text;
      this.webApp = data.webApp;
      this.startParameter = data.startParameter;
    }
  }
}
