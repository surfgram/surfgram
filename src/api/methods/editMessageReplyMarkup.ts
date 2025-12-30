/**
 * editMessageReplyMarkup method implementation for Surfgram Telegram Bot SDK
 * @module methods/editMessageReplyMarkup
 * @description Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 * @see {@link https://core.telegram.org/bots/api#editMessageReplyMarkup Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { EditMessageReplyMarkupParams } from '../interfaces/editMessageReplyMarkupParams';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

/**
 * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 * @memberof methods
 * @async
 * @function editMessageReplyMarkup
 * @this {Bot} Bot instance
 * @param { EditMessageReplyMarkupParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.editMessageReplyMarkup({
 * // ... params
 * });
 */
export async function editMessageReplyMarkup(this: Bot, params: EditMessageReplyMarkupParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('editMessageReplyMarkup', snakeParams);
  return response;
}
