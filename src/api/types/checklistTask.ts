/**
 * ChecklistTask class for Surfgram Telegram Bot SDK
 * @module types/checklistTask
 * @description Describes a task in a checklist.
 * @see {@link https://core.telegram.org/bots/api#checklisttask Telegram API Documentation}
 * @class ChecklistTask
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { User } from './user';

/**
 * Represents a ChecklistTask object from the Telegram Bot API
 * @class ChecklistTask
 */
export class ChecklistTask {
  /**
   * Unique identifier of the task
   * @type { number }
   * @memberof ChecklistTask
   * @instance
   * @public
   */
  id!: number;
  /**
   * Text of the task
   * @type { string }
   * @memberof ChecklistTask
   * @instance
   * @public
   */
  text!: string;
  /**
   * Optional. Special entities that appear in the task text
   * @type { MessageEntity[] }
   * @memberof ChecklistTask
   * @instance
   * @public
   */
  textEntities?: MessageEntity[];
  /**
   * Optional. User that completed the task; omitted if the task wasn't completed
   * @type { User }
   * @memberof ChecklistTask
   * @instance
   * @public
   */
  completedByUser?: User;
  /**
   * Optional. Point in time \(Unix timestamp\) when the task was completed; 0 if the task wasn't completed
   * @type { number }
   * @memberof ChecklistTask
   * @instance
   * @public
   */
  completionDate?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChecklistTask
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChecklistTask
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChecklistTask instance from raw Telegram API data
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
      this.textEntities = data.textEntities;
      this.completedByUser = data.completedByUser;
      this.completionDate = data.completionDate;
    }
  }
}
