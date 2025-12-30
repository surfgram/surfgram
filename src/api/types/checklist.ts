/**
 * Checklist class for Surfgram Telegram Bot SDK
 * @module types/checklist
 * @description Describes a checklist.
 * @see {@link https://core.telegram.org/bots/api#checklist Telegram API Documentation}
 * @class Checklist
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { ChecklistTask } from './checklistTask';

/**
 * Represents a Checklist object from the Telegram Bot API
 * @class Checklist
 */
export class Checklist {
  /**
   * Title of the checklist
   * @type { string }
   * @memberof Checklist
   * @instance
   * @public
   */
  title!: string;
  /**
   * Optional. Special entities that appear in the checklist title
   * @type { MessageEntity[] }
   * @memberof Checklist
   * @instance
   * @public
   */
  titleEntities?: MessageEntity[];
  /**
   * List of tasks in the checklist
   * @type { ChecklistTask[] }
   * @memberof Checklist
   * @instance
   * @public
   */
  tasks!: ChecklistTask[];
  /**
   * Optional. True, if users other than the creator of the list can add tasks to the list
   * @type { boolean }
   * @memberof Checklist
   * @instance
   * @public
   */
  othersCanAddTasks?: boolean;
  /**
   * Optional. True, if users other than the creator of the list can mark tasks as done or not done
   * @type { boolean }
   * @memberof Checklist
   * @instance
   * @public
   */
  othersCanMarkTasksAsDone?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Checklist
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Checklist
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Checklist instance from raw Telegram API data
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

      this.title = data.title;
      this.titleEntities = data.titleEntities;
      this.tasks = data.tasks;
      this.othersCanAddTasks = data.othersCanAddTasks;
      this.othersCanMarkTasksAsDone = data.othersCanMarkTasksAsDone;
    }
  }
}
