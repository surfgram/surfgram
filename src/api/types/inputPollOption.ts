/**
 * InputPollOption class for Surfgram Telegram Bot SDK
 * @module types/inputPollOption
 * @description This object contains information about one answer option in a poll to be sent.
 * @see {@link https://core.telegram.org/bots/api#inputpolloption Telegram API Documentation}
 * @class InputPollOption
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';

/**
 * Represents a InputPollOption object from the Telegram Bot API
 * @class InputPollOption
 */
export class InputPollOption {
  /**
   * Option text, 1-100 characters
   * @type { string }
   * @memberof InputPollOption
   * @instance
   * @public
   */
  text!: string;
  /**
   * Optional. Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed
   * @type { string }
   * @memberof InputPollOption
   * @instance
   * @public
   */
  textParseMode?: string;
  /**
   * Optional. A JSON-serialized list of special entities that appear in the poll option text. It can be specified instead of text\_parse\_mode
   * @type { MessageEntity[] }
   * @memberof InputPollOption
   * @instance
   * @public
   */
  textEntities?: MessageEntity[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputPollOption
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputPollOption
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputPollOption instance from raw Telegram API data
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

      this.text = data.text;
      this.textParseMode = data.textParseMode;
      this.textEntities = data.textEntities;
    }
  }
}
