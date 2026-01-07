/**
 * unpinAllGeneralForumTopicMessages method implementation for Surfgram Telegram Bot SDK
 * @module methods/unpinAllGeneralForumTopicMessages
 * @description Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can\_pin\_messages administrator right in the supergroup. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unpinAllGeneralForumTopicMessages Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can\_pin\_messages administrator right in the supergroup. Returns True on success.
 * @memberof methods
 * @async
 * @function unpinAllGeneralForumTopicMessages
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\)
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.unpinAllGeneralForumTopicMessages(...);
 */
export async function unpinAllGeneralForumTopicMessages(this: Bot, chatId: number | string): Promise<any> {
  const apiParams = {
    chatId: chatId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('unpinAllGeneralForumTopicMessages', snakeParams);
  return response;
}
