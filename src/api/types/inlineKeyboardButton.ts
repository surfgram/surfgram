/**
 * InlineKeyboardButton class for Surfgram Telegram Bot SDK
 * @module types/inlineKeyboardButton
 * @description This object represents one button of an inline keyboard. Exactly one of the fields other than text, icon\_custom\_emoji\_id, and style must be used to specify the type of the button.
 * @see {@link https://core.telegram.org/bots/api#inlinekeyboardbutton Telegram API Documentation}
 * @class InlineKeyboardButton
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { WebAppInfo } from './webAppInfo';
import { LoginUrl } from './loginUrl';
import { SwitchInlineQueryChosenChat } from './switchInlineQueryChosenChat';
import { CopyTextButton } from './copyTextButton';
import { CallbackGame } from './callbackGame';

/**
 * Represents a InlineKeyboardButton object from the Telegram Bot API
 * @class InlineKeyboardButton
 */
export class InlineKeyboardButton {
  /**
   * Label text on the button
   * @type { string }
   * @memberof InlineKeyboardButton
   * @instance
   * @public
   */
  text!: string;

  /**
   * Optional. Unique identifier of the custom emoji shown before the text of the button. Can only be used by bots that purchased additional usernames on Fragment or in the messages directly sent by the bot to private, group and supergroup chats if the owner of the bot has a Telegram Premium subscription.
   * @type { string }
   * @memberof InlineKeyboardButton
   * @instance
   * @public
   */
  iconCustomEmojiId?: string;

  /**
   * Optional. Style of the button. Must be one of “danger” \(red\), “success” \(green\) or “primary” \(blue\). If omitted, then an app-specific style is used.
   * @type { string }
   * @memberof InlineKeyboardButton
   * @instance
   * @public
   */
  style?: string;

  /**
   * Optional. HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=&lt;user\_id&gt; can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings.
   * @type { string }
   * @memberof InlineKeyboardButton
   * @instance
   * @public
   */
  url?: string;

  /**
   * Optional. Data to be sent in a callback query to the bot when the button is pressed, 1-64 bytes
   * @type { string }
   * @memberof InlineKeyboardButton
   * @instance
   * @public
   */
  callbackData?: string;

  /**
   * Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a Telegram Business account.
   * @type { WebAppInfo }
   * @memberof InlineKeyboardButton
   * @instance
   * @public
   */
  webApp?: WebAppInfo;

  /**
   * Optional. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget.
   * @type { LoginUrl }
   * @memberof InlineKeyboardButton
   * @instance
   * @public
   */
  loginUrl?: LoginUrl;

  /**
   * Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. Not supported for messages sent in channel direct messages chats and on behalf of a Telegram Business account.
   * @type { string }
   * @memberof InlineKeyboardButton
   * @instance
   * @public
   */
  switchInlineQuery?: string;

  /**
   * Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted.This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. Not supported in channels and for messages sent in channel direct messages chats and on behalf of a Telegram Business account.
   * @type { string }
   * @memberof InlineKeyboardButton
   * @instance
   * @public
   */
  switchInlineQueryCurrentChat?: string;

  /**
   * Optional. If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field. Not supported for messages sent in channel direct messages chats and on behalf of a Telegram Business account.
   * @type { SwitchInlineQueryChosenChat }
   * @memberof InlineKeyboardButton
   * @instance
   * @public
   */
  switchInlineQueryChosenChat?: SwitchInlineQueryChosenChat;

  /**
   * Optional. Description of the button that copies the specified text to the clipboard.
   * @type { CopyTextButton }
   * @memberof InlineKeyboardButton
   * @instance
   * @public
   */
  copyText?: CopyTextButton;

  /**
   * Optional. Description of the game that will be launched when the user presses the button.NOTE: This type of button must always be the first button in the first row.
   * @type { CallbackGame }
   * @memberof InlineKeyboardButton
   * @instance
   * @public
   */
  callbackGame?: CallbackGame;

  /**
   * Optional. Specify True, to send a Pay button. Substrings “” and “XTR” in the buttons's text will be replaced with a Telegram Star icon.NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages.
   * @type { boolean }
   * @memberof InlineKeyboardButton
   * @instance
   * @public
   */
  pay?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineKeyboardButton
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineKeyboardButton
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineKeyboardButton instance from raw Telegram API data
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
