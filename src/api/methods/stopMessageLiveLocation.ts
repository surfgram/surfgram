/**
 * stopMessageLiveLocation method implementation for Surfgram Telegram Bot SDK
 * @module methods/stopMessageLiveLocation
 * @description Use this method to stop updating a live location message before live\_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.
 * @see {@link https://core.telegram.org/bots/api#stopMessageLiveLocation Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { StopMessageLiveLocationParams } from '../interfaces/stopMessageLiveLocationParams';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

/**
 * Use this method to stop updating a live location message before live\_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.
 * @memberof methods
 * @async
 * @function stopMessageLiveLocation
 * @this {Bot} Bot instance
 * @param { StopMessageLiveLocationParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.stopMessageLiveLocation({
 * // ... params
 * });
 */
export async function stopMessageLiveLocation(
  this: Bot,
  params: StopMessageLiveLocationParams
): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('stopMessageLiveLocation', snakeParams);
  return response;
}
