/**
 * hideGeneralForumTopic method implementation for Surfgram Telegram Bot SDK
 * @module methods/hideGeneralForumTopic
 * @description Use this method to hide the &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#hideGeneralForumTopic Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to hide the &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.
 * @memberof methods
 * @async
 * @function hideGeneralForumTopic
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\)
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.hideGeneralForumTopic(...);
 */
export async function hideGeneralForumTopic(this: Bot, chatId: number | string): Promise<any> {
  const apiParams = {
    chatId: chatId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('hideGeneralForumTopic', snakeParams);
  return response;
}
