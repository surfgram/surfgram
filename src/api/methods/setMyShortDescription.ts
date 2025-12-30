/**
 * setMyShortDescription method implementation for Surfgram Telegram Bot SDK
 * @module methods/setMyShortDescription
 * @description Use this method to change the bot&#39;s short description, which is shown on the bot&#39;s profile page and is sent together with the link when users share the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setMyShortDescription Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to change the bot&#39;s short description, which is shown on the bot&#39;s profile page and is sent together with the link when users share the bot. Returns True on success.
 * @memberof methods
 * @async
 * @function setMyShortDescription
 * @this {Bot} Bot instance
 *  * @param { string } shortDescription? - New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language.
 *  * @param { string } languageCode? - A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setMyShortDescription(...);
 */
export async function setMyShortDescription(this: Bot, shortDescription?: string, languageCode?: string): Promise<any> {
  const apiParams = {
    shortDescription: shortDescription,
    languageCode: languageCode,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setMyShortDescription', snakeParams);
  return response;
}
