/**
 * ChecklistTasksAdded class for Surfgram Telegram Bot SDK
 * @module types/checklistTasksAdded
 * @description Describes a service message about tasks added to a checklist.
 * @see {@link https://core.telegram.org/bots/api#checklisttasksadded Telegram API Documentation}
 * @class ChecklistTasksAdded
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Message } from './message';
import { ChecklistTask } from './checklistTask';

/**
 * Represents a ChecklistTasksAdded object from the Telegram Bot API
 * @class ChecklistTasksAdded
 */
export class ChecklistTasksAdded {
  /**
   * Optional. Message containing the checklist to which the tasks were added. Note that the Message object in this field will not contain the reply\_to\_message field even if it itself is a reply.
   * @type { Message }
   * @memberof ChecklistTasksAdded
   * @instance
   * @public
   */
  checklistMessage?: Message;
  /**
   * List of tasks added to the checklist
   * @type { ChecklistTask[] }
   * @memberof ChecklistTasksAdded
   * @instance
   * @public
   */
  tasks!: ChecklistTask[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChecklistTasksAdded
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChecklistTasksAdded
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChecklistTasksAdded instance from raw Telegram API data
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

      this.checklistMessage = data.checklistMessage;
      this.tasks = data.tasks;
    }
  }
}
