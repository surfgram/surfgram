/**
 * banChatMember method implementation for Surfgram Telegram Bot SDK
 * @module methods/banChatMember
 * @description Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#banChatMember Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * @memberof methods
 * @async
 * @function banChatMember
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target group or username of the target supergroup or channel \(in the format @channelusername\)
 *  * @param { number } userId - Unique identifier of the target user
 *  * @param { number } untilDate? - Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.
 *  * @param { boolean } revokeMessages? - Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.banChatMember(...);
 */
export async function banChatMember(
  this: Bot,
  chatId: number | string,
  userId: number,
  untilDate?: number,
  revokeMessages?: boolean
): Promise<any> {
  const apiParams = {
    chatId: chatId,
    userId: userId,
    untilDate: untilDate,
    revokeMessages: revokeMessages,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('banChatMember', snakeParams);
  return response;
}
