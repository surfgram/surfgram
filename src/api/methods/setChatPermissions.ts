/**
 * setChatPermissions method implementation for Surfgram Telegram Bot SDK
 * @module methods/setChatPermissions
 * @description Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can\_restrict\_members administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setChatPermissions Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { ChatPermissions } from '../types/chatPermissions';

/**
 * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can\_restrict\_members administrator rights. Returns True on success.
 * @memberof methods
 * @async
 * @function setChatPermissions
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\)
 *  * @param { ChatPermissions } permissions - A JSON-serialized object for new default chat permissions
 *  * @param { boolean } useIndependentChatPermissions? - Pass True if chat permissions are set independently. Otherwise, the can\_send\_other\_messages and can\_add\_web\_page\_previews permissions will imply the can\_send\_messages, can\_send\_audios, can\_send\_documents, can\_send\_photos, can\_send\_videos, can\_send\_video\_notes, and can\_send\_voice\_notes permissions; the can\_send\_polls permission will imply the can\_send\_messages permission.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setChatPermissions(...);
 */
export async function setChatPermissions(this: Bot, chatId: number | string, permissions: ChatPermissions, useIndependentChatPermissions?: boolean): Promise<any> {
  const apiParams = {
    chatId: chatId,
    permissions: permissions,
    useIndependentChatPermissions: useIndependentChatPermissions,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setChatPermissions', snakeParams);
  return response;
}
