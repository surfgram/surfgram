/**
 * unbanChatMember method implementation for Surfgram Telegram Bot SDK
 * @module methods/unbanChatMember
 * @description Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don&#39;t want this, use the parameter only\_if\_banned. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unbanChatMember Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don&#39;t want this, use the parameter only\_if\_banned. Returns True on success.
 * @memberof methods
 * @async
 * @function unbanChatMember
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target group or username of the target supergroup or channel \(in the format @channelusername\)
 *  * @param { number } userId - Unique identifier of the target user
 *  * @param { boolean } onlyIfBanned? - Do nothing if the user is not banned
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.unbanChatMember(...);
 */
export async function unbanChatMember(
  this: Bot,
  chatId: number | string,
  userId: number,
  onlyIfBanned?: boolean
): Promise<any> {
  const apiParams = {
    chatId: chatId,
    userId: userId,
    onlyIfBanned: onlyIfBanned,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('unbanChatMember', snakeParams);
  return response;
}
