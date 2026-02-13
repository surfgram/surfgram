/**
 * KeyboardButton class for Surfgram Telegram Bot SDK
 * @module types/keyboardButton
 * @description This object represents one button of the reply keyboard. At most one of the fields other than text, icon\_custom\_emoji\_id, and style must be used to specify the type of the button. For simple text buttons, String can be used instead of this object to specify the button text.
 * @see {@link https://core.telegram.org/bots/api#keyboardbutton Telegram API Documentation}
 * @class KeyboardButton
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { KeyboardButtonRequestUsers } from './keyboardButtonRequestUsers';
import { KeyboardButtonRequestChat } from './keyboardButtonRequestChat';
import { KeyboardButtonPollType } from './keyboardButtonPollType';
import { WebAppInfo } from './webAppInfo';

/**
 * Represents a KeyboardButton object from the Telegram Bot API
 * @class KeyboardButton
 */
export class KeyboardButton {
  /**
   * Text of the button. If none of the fields other than text, icon\_custom\_emoji\_id, and style are used, it will be sent as a message when the button is pressed
   * @type { string }
   * @memberof KeyboardButton
   * @instance
   * @public
   */
  text!: string;

  /**
   * Optional. Unique identifier of the custom emoji shown before the text of the button. Can only be used by bots that purchased additional usernames on Fragment or in the messages directly sent by the bot to private, group and supergroup chats if the owner of the bot has a Telegram Premium subscription.
   * @type { string }
   * @memberof KeyboardButton
   * @instance
   * @public
   */
  iconCustomEmojiId?: string;

  /**
   * Optional. Style of the button. Must be one of “danger” \(red\), “success” \(green\) or “primary” \(blue\). If omitted, then an app-specific style is used.
   * @type { string }
   * @memberof KeyboardButton
   * @instance
   * @public
   */
  style?: string;

  /**
   * Optional. If specified, pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a “users\_shared” service message. Available in private chats only.
   * @type { KeyboardButtonRequestUsers }
   * @memberof KeyboardButton
   * @instance
   * @public
   */
  requestUsers?: KeyboardButtonRequestUsers;

  /**
   * Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a “chat\_shared” service message. Available in private chats only.
   * @type { KeyboardButtonRequestChat }
   * @memberof KeyboardButton
   * @instance
   * @public
   */
  requestChat?: KeyboardButtonRequestChat;

  /**
   * Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only.
   * @type { boolean }
   * @memberof KeyboardButton
   * @instance
   * @public
   */
  requestContact?: boolean;

  /**
   * Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only.
   * @type { boolean }
   * @memberof KeyboardButton
   * @instance
   * @public
   */
  requestLocation?: boolean;

  /**
   * Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only.
   * @type { KeyboardButtonPollType }
   * @memberof KeyboardButton
   * @instance
   * @public
   */
  requestPoll?: KeyboardButtonPollType;

  /**
   * Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web\_app\_data” service message. Available in private chats only.
   * @type { WebAppInfo }
   * @memberof KeyboardButton
   * @instance
   * @public
   */
  webApp?: WebAppInfo;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof KeyboardButton
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof KeyboardButton
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new KeyboardButton instance from raw Telegram API data
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
