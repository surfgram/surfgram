/**
 * editEphemeralMessageCaption method implementation for Surfgram Telegram Bot SDK
 * @module methods/editEphemeralMessageCaption
 * @description Use this method to edit the caption of an ephemeral message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, True is returned.
 * @see {@link https://core.telegram.org/bots/api#editEphemeralMessageCaption Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { EditEphemeralMessageCaptionParams } from '../interfaces/editEphemeralMessageCaptionParams';
import { MessageEntity } from '../types/messageEntity';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

/**
 * Use this method to edit the caption of an ephemeral message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, True is returned.
 * @memberof methods
 * @async
 * @function editEphemeralMessageCaption
 * @this {Bot} Bot instance
 * @param { EditEphemeralMessageCaptionParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.editEphemeralMessageCaption({
 * // ... params
 * });
 */
export async function editEphemeralMessageCaption(this: Bot, params: EditEphemeralMessageCaptionParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('editEphemeralMessageCaption', snakeParams);
  return response;
}
