/**
 * InputChecklistTask class for Surfgram Telegram Bot SDK
 * @module types/inputChecklistTask
 * @description Describes a task to add to a checklist.
 * @see {@link https://core.telegram.org/bots/api#inputchecklisttask Telegram API Documentation}
 * @class InputChecklistTask
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';

/**
 * Represents a InputChecklistTask object from the Telegram Bot API
 * @class InputChecklistTask
 */
export class InputChecklistTask {
  /**
   * Unique identifier of the task; must be positive and unique among all task identifiers currently present in the checklist
   * @type { number }
   * @memberof InputChecklistTask
   * @instance
   * @public
   */
  id!: number;
  /**
   * Text of the task; 1-100 characters after entities parsing
   * @type { string }
   * @memberof InputChecklistTask
   * @instance
   * @public
   */
  text!: string;
  /**
   * Optional. Mode for parsing entities in the text. See formatting options for more details.
   * @type { string }
   * @memberof InputChecklistTask
   * @instance
   * @public
   */
  parseMode?: string;
  /**
   * Optional. List of special entities that appear in the text, which can be specified instead of parse\_mode. Currently, only bold, italic, underline, strikethrough, spoiler, and custom\_emoji entities are allowed.
   * @type { MessageEntity[] }
   * @memberof InputChecklistTask
   * @instance
   * @public
   */
  textEntities?: MessageEntity[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputChecklistTask
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputChecklistTask
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputChecklistTask instance from raw Telegram API data
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

      this.id = data.id;
      this.text = data.text;
      this.parseMode = data.parseMode;
      this.textEntities = data.textEntities;
    }
  }
}
