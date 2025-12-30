/**
 * KeyboardButtonRequestChat class for Surfgram Telegram Bot SDK
 * @module types/keyboardButtonRequestChat
 * @description This object defines the criteria used to request a suitable chat. Information about the selected chat will be shared with the bot when the corresponding button is pressed. The bot will be granted requested rights in the chat if appropriate. More about requesting chats ».
 * @see {@link https://core.telegram.org/bots/api#keyboardbuttonrequestchat Telegram API Documentation}
 * @class KeyboardButtonRequestChat
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { ChatAdministratorRights } from './chatAdministratorRights';

/**
 * Represents a KeyboardButtonRequestChat object from the Telegram Bot API
 * @class KeyboardButtonRequestChat
 */
export class KeyboardButtonRequestChat {
  /**
   * Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message
   * @type { number }
   * @memberof KeyboardButtonRequestChat
   * @instance
   * @public
   */
  requestId!: number;
  /**
   * Pass True to request a channel chat, pass False to request a group or a supergroup chat.
   * @type { boolean }
   * @memberof KeyboardButtonRequestChat
   * @instance
   * @public
   */
  chatIsChannel!: boolean;
  /**
   * Optional. Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied.
   * @type { boolean }
   * @memberof KeyboardButtonRequestChat
   * @instance
   * @public
   */
  chatIsForum?: boolean;
  /**
   * Optional. Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied.
   * @type { boolean }
   * @memberof KeyboardButtonRequestChat
   * @instance
   * @public
   */
  chatHasUsername?: boolean;
  /**
   * Optional. Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied.
   * @type { boolean }
   * @memberof KeyboardButtonRequestChat
   * @instance
   * @public
   */
  chatIsCreated?: boolean;
  /**
   * Optional. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of bot\_administrator\_rights. If not specified, no additional restrictions are applied.
   * @type { ChatAdministratorRights }
   * @memberof KeyboardButtonRequestChat
   * @instance
   * @public
   */
  userAdministratorRights?: ChatAdministratorRights;
  /**
   * Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of user\_administrator\_rights. If not specified, no additional restrictions are applied.
   * @type { ChatAdministratorRights }
   * @memberof KeyboardButtonRequestChat
   * @instance
   * @public
   */
  botAdministratorRights?: ChatAdministratorRights;
  /**
   * Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied.
   * @type { boolean }
   * @memberof KeyboardButtonRequestChat
   * @instance
   * @public
   */
  botIsMember?: boolean;
  /**
   * Optional. Pass True to request the chat's title
   * @type { boolean }
   * @memberof KeyboardButtonRequestChat
   * @instance
   * @public
   */
  requestTitle?: boolean;
  /**
   * Optional. Pass True to request the chat's username
   * @type { boolean }
   * @memberof KeyboardButtonRequestChat
   * @instance
   * @public
   */
  requestUsername?: boolean;
  /**
   * Optional. Pass True to request the chat's photo
   * @type { boolean }
   * @memberof KeyboardButtonRequestChat
   * @instance
   * @public
   */
  requestPhoto?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof KeyboardButtonRequestChat
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof KeyboardButtonRequestChat
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new KeyboardButtonRequestChat instance from raw Telegram API data
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

      this.requestId = data.requestId;
      this.chatIsChannel = data.chatIsChannel;
      this.chatIsForum = data.chatIsForum;
      this.chatHasUsername = data.chatHasUsername;
      this.chatIsCreated = data.chatIsCreated;
      this.userAdministratorRights = data.userAdministratorRights;
      this.botAdministratorRights = data.botAdministratorRights;
      this.botIsMember = data.botIsMember;
      this.requestTitle = data.requestTitle;
      this.requestUsername = data.requestUsername;
      this.requestPhoto = data.requestPhoto;
    }
  }
}
