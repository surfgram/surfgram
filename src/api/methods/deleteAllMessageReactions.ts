/**
 * deleteAllMessageReactions method implementation for Surfgram Telegram Bot SDK
 * @module methods/deleteAllMessageReactions
 * @description Use this method to remove up to 10000 recent reactions in a group or a supergroup chat added by a given user or chat. The bot must have the &#39;can\_delete\_messages&#39; administrator right in the chat. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deleteAllMessageReactions Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to remove up to 10000 recent reactions in a group or a supergroup chat added by a given user or chat. The bot must have the &#39;can\_delete\_messages&#39; administrator right in the chat. Returns True on success.
 * @memberof methods
 * @async
 * @function deleteAllMessageReactions
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup in the format @username
 *  * @param { number } userId? - Identifier of the user whose reactions will be removed, if the reactions were added by a user
 *  * @param { number } actorChatId? - Identifier of the chat whose reactions will be removed, if the reactions were added by a chat
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.deleteAllMessageReactions(...);
 */
export async function deleteAllMessageReactions(this: Bot, chatId: number | string, userId?: number, actorChatId?: number): Promise<any> {
  const apiParams = {
    chatId: chatId,
    userId: userId,
    actorChatId: actorChatId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('deleteAllMessageReactions', snakeParams);
  return response;
}
