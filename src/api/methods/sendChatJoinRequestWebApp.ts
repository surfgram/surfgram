/**
 * sendChatJoinRequestWebApp method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendChatJoinRequestWebApp
 * @description Use this method to process a received chat join request query by showing a Mini App to the user before deciding the outcome. Call answerChatJoinRequestQuery to resolve the join request query based on the user interaction with the Mini App. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#sendChatJoinRequestWebApp Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to process a received chat join request query by showing a Mini App to the user before deciding the outcome. Call answerChatJoinRequestQuery to resolve the join request query based on the user interaction with the Mini App. Returns True on success.
 * @memberof methods
 * @async
 * @function sendChatJoinRequestWebApp
 * @this {Bot} Bot instance
 *  * @param { string } chatJoinRequestQueryId - Unique identifier of the join request query
 *  * @param { string } webAppUrl - The URL of the Mini App to be opened
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.sendChatJoinRequestWebApp(...);
 */
export async function sendChatJoinRequestWebApp(this: Bot, chatJoinRequestQueryId: string, webAppUrl: string): Promise<any> {
  const apiParams = {
    chatJoinRequestQueryId: chatJoinRequestQueryId,
    webAppUrl: webAppUrl,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('sendChatJoinRequestWebApp', snakeParams);
  return response;
}
