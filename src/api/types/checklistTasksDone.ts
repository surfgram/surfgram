/**
 * ChecklistTasksDone class for Surfgram Telegram Bot SDK
 * @module types/checklistTasksDone
 * @description Describes a service message about checklist tasks marked as done or not done.
 * @see {@link https://core.telegram.org/bots/api#checklisttasksdone Telegram API Documentation}
 * @class ChecklistTasksDone
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Message } from './message';

/**
 * Represents a ChecklistTasksDone object from the Telegram Bot API
 * @class ChecklistTasksDone
 */
export class ChecklistTasksDone {
  /**
   * Optional. Message containing the checklist whose tasks were marked as done or not done. Note that the Message object in this field will not contain the reply\_to\_message field even if it itself is a reply.
   * @type { Message }
   * @memberof ChecklistTasksDone
   * @instance
   * @public
   */
  checklistMessage?: Message;

  /**
   * Optional. Identifiers of the tasks that were marked as done
   * @type { number[] }
   * @memberof ChecklistTasksDone
   * @instance
   * @public
   */
  markedAsDoneTaskIds?: number[];

  /**
   * Optional. Identifiers of the tasks that were marked as not done
   * @type { number[] }
   * @memberof ChecklistTasksDone
   * @instance
   * @public
   */
  markedAsNotDoneTaskIds?: number[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChecklistTasksDone
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChecklistTasksDone
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChecklistTasksDone instance from raw Telegram API data
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
