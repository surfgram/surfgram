/**
 * answerChatJoinRequestQuery method implementation for Surfgram Telegram Bot SDK
 * @module methods/answerChatJoinRequestQuery
 * @description Use this method to process a received chat join request query. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#answerChatJoinRequestQuery Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to process a received chat join request query. Returns True on success.
 * @memberof methods
 * @async
 * @function answerChatJoinRequestQuery
 * @this {Bot} Bot instance
 *  * @param { string } chatJoinRequestQueryId - Unique identifier of the join request query
 *  * @param { string } result - Result of the query. Must be either “approve” to allow the user to join the chat, “decline” to disallow the user to join the chat, or “queue” to leave the decision to other administrators.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.answerChatJoinRequestQuery(...);
 */
export async function answerChatJoinRequestQuery(this: Bot, chatJoinRequestQueryId: string, result: string): Promise<any> {
  const apiParams = {
    chatJoinRequestQueryId: chatJoinRequestQueryId,
    result: result,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('answerChatJoinRequestQuery', snakeParams);
  return response;
}
