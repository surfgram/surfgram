/**
 * unhideGeneralForumTopic method implementation for Surfgram Telegram Bot SDK
 * @module methods/unhideGeneralForumTopic
 * @description Use this method to unhide the &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unhideGeneralForumTopic Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to unhide the &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. Returns True on success.
 * @memberof methods
 * @async
 * @function unhideGeneralForumTopic
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\)
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.unhideGeneralForumTopic(...);
 */
export async function unhideGeneralForumTopic(this: Bot, chatId: number | string): Promise<any> {
  const apiParams = {
    chatId: chatId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('unhideGeneralForumTopic', snakeParams);
  return response;
}
