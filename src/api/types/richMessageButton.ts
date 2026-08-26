/**
 * RichMessageButton class for Surfgram Telegram Bot SDK
 * @module types/richMessageButton
 * @description This object represents a button in a RichMessage. Exactly one of the fields other than text and style must be used to specify the type of the button.
 * @see {@link https://core.telegram.org/bots/api#richmessagebutton Telegram API Documentation}
 * @class RichMessageButton
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';
import { WebAppInfo } from './webAppInfo';
import { LoginUrl } from './loginUrl';
import { SwitchInlineQueryChosenChat } from './switchInlineQueryChosenChat';
import { CopyTextButton } from './copyTextButton';
import { DisabledButton } from './disabledButton';

/**
 * Represents a RichMessageButton object from the Telegram Bot API
 * @class RichMessageButton
 */
export class RichMessageButton {
  /**
   * Text of the button. May contain only plain text, RichTextCustomEmoji and RichTextDateTime entities.
   * @type { RichText }
   * @memberof RichMessageButton
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Optional. Style of the button. Must be one of “danger”, “success”, “primary”, or “link” \(the button is shown as a regular link without borders\). Apps may use theme-specific colors for the button background and text based on the style. The style “link” is allowed only for callback buttons.
   * @type { string }
   * @memberof RichMessageButton
   * @instance
   * @public
   */
  style?: string;

  /**
   * Optional. HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=&lt;user\_id&gt; can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings.
   * @type { string }
   * @memberof RichMessageButton
   * @instance
   * @public
   */
  url?: string;

  /**
   * Optional. Data to be sent in a callback query to the bot when the button is pressed, 1-64 bytes
   * @type { string }
   * @memberof RichMessageButton
   * @instance
   * @public
   */
  callbackData?: string;

  /**
   * Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a business account.
   * @type { WebAppInfo }
   * @memberof RichMessageButton
   * @instance
   * @public
   */
  webApp?: WebAppInfo;

  /**
   * Optional. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget. Not supported for ephemeral messages.
   * @type { LoginUrl }
   * @memberof RichMessageButton
   * @instance
   * @public
   */
  loginUrl?: LoginUrl;

  /**
   * Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. Not supported for messages sent in channel direct messages chats and on behalf of a business account.
   * @type { string }
   * @memberof RichMessageButton
   * @instance
   * @public
   */
  switchInlineQuery?: string;

  /**
   * Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted. Not supported in channels and for messages sent in channel direct messages chats and on behalf of a business account.
   * @type { string }
   * @memberof RichMessageButton
   * @instance
   * @public
   */
  switchInlineQueryCurrentChat?: string;

  /**
   * Optional. If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field. Not supported for messages sent in channel direct messages chats and on behalf of a business account.
   * @type { SwitchInlineQueryChosenChat }
   * @memberof RichMessageButton
   * @instance
   * @public
   */
  switchInlineQueryChosenChat?: SwitchInlineQueryChosenChat;

  /**
   * Optional. A button that copies the specified text to the clipboard
   * @type { CopyTextButton }
   * @memberof RichMessageButton
   * @instance
   * @public
   */
  copyText?: CopyTextButton;

  /**
   * Optional. If set, then the button is disabled and does nothing
   * @type { DisabledButton }
   * @memberof RichMessageButton
   * @instance
   * @public
   */
  disabled?: DisabledButton;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichMessageButton
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichMessageButton
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichMessageButton instance from raw Telegram API data
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
