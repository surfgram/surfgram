/**
 * deleteMessageReaction method implementation for Surfgram Telegram Bot SDK
 * @module methods/deleteMessageReaction
 * @description Use this method to remove a reaction from a message in a group or a supergroup chat. The bot must have the &#39;can\_delete\_messages&#39; administrator right in the chat. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deleteMessageReaction Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to remove a reaction from a message in a group or a supergroup chat. The bot must have the &#39;can\_delete\_messages&#39; administrator right in the chat. Returns True on success.
 * @memberof methods
 * @async
 * @function deleteMessageReaction
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup in the format @username
 *  * @param { number } messageId - Identifier of the target message
 *  * @param { number } userId? - Identifier of the user whose reaction will be removed, if the reaction was added by a user
 *  * @param { number } actorChatId? - Identifier of the chat whose reaction will be removed, if the reaction was added by a chat
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.deleteMessageReaction(...);
 */
export async function deleteMessageReaction(this: Bot, chatId: number | string, messageId: number, userId?: number, actorChatId?: number): Promise<any> {
  const apiParams = {
    chatId: chatId,
    messageId: messageId,
    userId: userId,
    actorChatId: actorChatId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('deleteMessageReaction', snakeParams);
  return response;
}
