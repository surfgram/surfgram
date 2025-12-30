/**
 * InputChecklist class for Surfgram Telegram Bot SDK
 * @module types/inputChecklist
 * @description Describes a checklist to create.
 * @see {@link https://core.telegram.org/bots/api#inputchecklist Telegram API Documentation}
 * @class InputChecklist
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { InputChecklistTask } from './inputChecklistTask';

/**
 * Represents a InputChecklist object from the Telegram Bot API
 * @class InputChecklist
 */
export class InputChecklist {
  /**
   * Title of the checklist; 1-255 characters after entities parsing
   * @type { string }
   * @memberof InputChecklist
   * @instance
   * @public
   */
  title!: string;

  /**
   * Optional. Mode for parsing entities in the title. See formatting options for more details.
   * @type { string }
   * @memberof InputChecklist
   * @instance
   * @public
   */
  parseMode?: string;

  /**
   * Optional. List of special entities that appear in the title, which can be specified instead of parse\_mode. Currently, only bold, italic, underline, strikethrough, spoiler, and custom\_emoji entities are allowed.
   * @type { MessageEntity[] }
   * @memberof InputChecklist
   * @instance
   * @public
   */
  titleEntities?: MessageEntity[];

  /**
   * List of 1-30 tasks in the checklist
   * @type { InputChecklistTask[] }
   * @memberof InputChecklist
   * @instance
   * @public
   */
  tasks!: InputChecklistTask[];

  /**
   * Optional. Pass True if other users can add tasks to the checklist
   * @type { boolean }
   * @memberof InputChecklist
   * @instance
   * @public
   */
  othersCanAddTasks?: boolean;

  /**
   * Optional. Pass True if other users can mark tasks as done or not done in the checklist
   * @type { boolean }
   * @memberof InputChecklist
   * @instance
   * @public
   */
  othersCanMarkTasksAsDone?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputChecklist
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputChecklist
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputChecklist instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
