/**
 * editEphemeralMessageText method implementation for Surfgram Telegram Bot SDK
 * @module methods/editEphemeralMessageText
 * @description Use this method to edit an ephemeral text message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, True is returned.
 * @see {@link https://core.telegram.org/bots/api#editEphemeralMessageText Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { EditEphemeralMessageTextParams } from '../interfaces/editEphemeralMessageTextParams';
import { MessageEntity } from '../types/messageEntity';
import { LinkPreviewOptions } from '../types/linkPreviewOptions';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

/**
 * Use this method to edit an ephemeral text message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, True is returned.
 * @memberof methods
 * @async
 * @function editEphemeralMessageText
 * @this {Bot} Bot instance
 * @param { EditEphemeralMessageTextParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.editEphemeralMessageText({
 * // ... params
 * });
 */
export async function editEphemeralMessageText(this: Bot, params: EditEphemeralMessageTextParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('editEphemeralMessageText', snakeParams);
  return response;
}
