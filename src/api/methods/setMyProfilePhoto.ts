/**
 * setMyProfilePhoto method implementation for Surfgram Telegram Bot SDK
 * @module methods/setMyProfilePhoto
 * @description Changes the profile photo of the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setMyProfilePhoto Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { InputProfilePhoto } from '../types/inputProfilePhoto';

/**
 * Changes the profile photo of the bot. Returns True on success.
 * @memberof methods
 * @async
 * @function setMyProfilePhoto
 * @this {Bot} Bot instance
 *  * @param { InputProfilePhoto } photo - The new profile photo to set
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setMyProfilePhoto(...);
 */
export async function setMyProfilePhoto(this: Bot, photo: InputProfilePhoto): Promise<any> {
  const apiParams = {
    photo: photo,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setMyProfilePhoto', snakeParams);
  return response;
}
