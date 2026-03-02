/**
 * setChatMemberTag method implementation for Surfgram Telegram Bot SDK
 * @module methods/setChatMemberTag
 * @description Use this method to set a tag for a regular member in a group or a supergroup. The bot must be an administrator in the chat for this to work and must have the can\_manage\_tags administrator right. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setChatMemberTag Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to set a tag for a regular member in a group or a supergroup. The bot must be an administrator in the chat for this to work and must have the can\_manage\_tags administrator right. Returns True on success.
 * @memberof methods
 * @async
 * @function setChatMemberTag
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\)
 *  * @param { number } userId - Unique identifier of the target user
 *  * @param { string } tag? - New tag for the member; 0-16 characters, emoji are not allowed
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setChatMemberTag(...);
 */
export async function setChatMemberTag(this: Bot, chatId: number | string, userId: number, tag?: string): Promise<any> {
  const apiParams = {
    chatId: chatId,
    userId: userId,
    tag: tag,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setChatMemberTag', snakeParams);
  return response;
}
