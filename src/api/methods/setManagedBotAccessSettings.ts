/**
 * setManagedBotAccessSettings method implementation for Surfgram Telegram Bot SDK
 * @module methods/setManagedBotAccessSettings
 * @description Use this method to change the access settings of a managed bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setManagedBotAccessSettings Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to change the access settings of a managed bot. Returns True on success.
 * @memberof methods
 * @async
 * @function setManagedBotAccessSettings
 * @this {Bot} Bot instance
 *  * @param { number } userId - User identifier of the managed bot whose access settings will be changed
 *  * @param { boolean } isAccessRestricted - Pass True if only selected users can access the bot. The bot's owner can always access it.
 *  * @param { number[] } addedUserIds? - A JSON-serialized list of up to 10 identifiers of users who will have access to the bot in addition to its owner. Ignored if is\_access\_restricted is False.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setManagedBotAccessSettings(...);
 */
export async function setManagedBotAccessSettings(this: Bot, userId: number, isAccessRestricted: boolean, addedUserIds?: number[]): Promise<any> {
  const apiParams = {
    userId: userId,
    isAccessRestricted: isAccessRestricted,
    addedUserIds: addedUserIds,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setManagedBotAccessSettings', snakeParams);
  return response;
}
