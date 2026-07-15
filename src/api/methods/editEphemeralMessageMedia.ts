/**
 * editEphemeralMessageMedia method implementation for Surfgram Telegram Bot SDK
 * @module methods/editEphemeralMessageMedia
 * @description Use this method to edit the media of an ephemeral message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, True is returned.
 * @see {@link https://core.telegram.org/bots/api#editEphemeralMessageMedia Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { EditEphemeralMessageMediaParams } from '../interfaces/editEphemeralMessageMediaParams';
import { InputMedia } from '../types/inputMedia';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

/**
 * Use this method to edit the media of an ephemeral message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, True is returned.
 * @memberof methods
 * @async
 * @function editEphemeralMessageMedia
 * @this {Bot} Bot instance
 * @param { EditEphemeralMessageMediaParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.editEphemeralMessageMedia({
 * // ... params
 * });
 */
export async function editEphemeralMessageMedia(this: Bot, params: EditEphemeralMessageMediaParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('editEphemeralMessageMedia', snakeParams);
  return response;
}
