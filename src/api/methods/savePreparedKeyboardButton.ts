/**
 * savePreparedKeyboardButton method implementation for Surfgram Telegram Bot SDK
 * @module methods/savePreparedKeyboardButton
 * @description Stores a keyboard button that can be used by a user within a Mini App. Returns a PreparedKeyboardButton object.
 * @see {@link https://core.telegram.org/bots/api#savePreparedKeyboardButton Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { KeyboardButton } from '../types/keyboardButton';

/**
 * Stores a keyboard button that can be used by a user within a Mini App. Returns a PreparedKeyboardButton object.
 * @memberof methods
 * @async
 * @function savePreparedKeyboardButton
 * @this {Bot} Bot instance
 *  * @param { number } userId - Unique identifier of the target user that can use the button
 *  * @param { KeyboardButton } button - A JSON-serialized object describing the button to be saved. The button must be of the type request\_users, request\_chat, or request\_managed\_bot.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.savePreparedKeyboardButton(...);
 */
export async function savePreparedKeyboardButton(this: Bot, userId: number, button: KeyboardButton): Promise<any> {
  const apiParams = {
    userId: userId,
    button: button,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('savePreparedKeyboardButton', snakeParams);
  return response;
}
