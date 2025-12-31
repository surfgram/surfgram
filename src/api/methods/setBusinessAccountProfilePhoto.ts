/**
 * setBusinessAccountProfilePhoto method implementation for Surfgram Telegram Bot SDK
 * @module methods/setBusinessAccountProfilePhoto
 * @description Changes the profile photo of a managed business account. Requires the can\_edit\_profile\_photo business bot right. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setBusinessAccountProfilePhoto Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { InputProfilePhoto } from '../types/inputProfilePhoto';

/**
 * Changes the profile photo of a managed business account. Requires the can\_edit\_profile\_photo business bot right. Returns True on success.
 * @memberof methods
 * @async
 * @function setBusinessAccountProfilePhoto
 * @this {Bot} Bot instance
 *  * @param { string } businessConnectionId - Unique identifier of the business connection
 *  * @param { InputProfilePhoto } photo - The new profile photo to set
 *  * @param { boolean } isPublic? - Pass True to set the public photo, which will be visible even if the main photo is hidden by the business account's privacy settings. An account can have only one public photo.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setBusinessAccountProfilePhoto(...);
 */
export async function setBusinessAccountProfilePhoto(
  this: Bot,
  businessConnectionId: string,
  photo: InputProfilePhoto,
  isPublic?: boolean
): Promise<any> {
  const apiParams = {
    businessConnectionId: businessConnectionId,
    photo: photo,
    isPublic: isPublic,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setBusinessAccountProfilePhoto', snakeParams);
  return response;
}
