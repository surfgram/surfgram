/**
 * approveSuggestedPost method implementation for Surfgram Telegram Bot SDK
 * @module methods/approveSuggestedPost
 * @description Use this method to approve a suggested post in a direct messages chat. The bot must have the &#39;can\_post\_messages&#39; administrator right in the corresponding channel chat. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#approveSuggestedPost Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to approve a suggested post in a direct messages chat. The bot must have the &#39;can\_post\_messages&#39; administrator right in the corresponding channel chat. Returns True on success.
 * @memberof methods
 * @async
 * @function approveSuggestedPost
 * @this {Bot} Bot instance
 *  * @param { number } chatId - Unique identifier for the target direct messages chat
 *  * @param { number } messageId - Identifier of a suggested post message to approve
 *  * @param { number } sendDate? - Point in time \(Unix timestamp\) when the post is expected to be published; omit if the date has already been specified when the suggested post was created. If specified, then the date must be not more than 2678400 seconds \(30 days\) in the future
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.approveSuggestedPost(...);
 */
export async function approveSuggestedPost(this: Bot, chatId: number, messageId: number, sendDate?: number): Promise<any> {
  const apiParams = {
    chatId: chatId,
    messageId: messageId,
    sendDate: sendDate,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('approveSuggestedPost', snakeParams);
  return response;
}
