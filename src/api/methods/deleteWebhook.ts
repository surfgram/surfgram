/**
 * deleteWebhook method implementation for Surfgram Telegram Bot SDK
 * @module methods/deleteWebhook
 * @description Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deleteWebhook Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
 * @memberof methods
 * @async
 * @function deleteWebhook
 * @this {Bot} Bot instance
 *  * @param { boolean } dropPendingUpdates? - Pass True to drop all pending updates
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.deleteWebhook(...);
 */
export async function deleteWebhook(this: Bot, dropPendingUpdates?: boolean): Promise<any> {
  const apiParams = {
    dropPendingUpdates: dropPendingUpdates,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('deleteWebhook', snakeParams);
  return response;
}
