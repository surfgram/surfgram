/**
 * declineSuggestedPost method implementation for Surfgram Telegram Bot SDK
 * @module methods/declineSuggestedPost
 * @description Use this method to decline a suggested post in a direct messages chat. The bot must have the &#39;can\_manage\_direct\_messages&#39; administrator right in the corresponding channel chat. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#declineSuggestedPost Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to decline a suggested post in a direct messages chat. The bot must have the &#39;can\_manage\_direct\_messages&#39; administrator right in the corresponding channel chat. Returns True on success.
 * @memberof methods
 * @async
 * @function declineSuggestedPost
 * @this {Bot} Bot instance
 *  * @param { number } chatId - Unique identifier for the target direct messages chat
 *  * @param { number } messageId - Identifier of a suggested post message to decline
 *  * @param { string } comment? - Comment for the creator of the suggested post; 0-128 characters
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.declineSuggestedPost(...);
 */
export async function declineSuggestedPost(
  this: Bot,
  chatId: number,
  messageId: number,
  comment?: string
): Promise<any> {
  const apiParams = {
    chatId: chatId,
    messageId: messageId,
    comment: comment,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('declineSuggestedPost', snakeParams);
  return response;
}
