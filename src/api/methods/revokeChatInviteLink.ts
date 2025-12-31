/**
 * revokeChatInviteLink method implementation for Surfgram Telegram Bot SDK
 * @module methods/revokeChatInviteLink
 * @description Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.
 * @see {@link https://core.telegram.org/bots/api#revokeChatInviteLink Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.
 * @memberof methods
 * @async
 * @function revokeChatInviteLink
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier of the target chat or username of the target channel \(in the format @channelusername\)
 *  * @param { string } inviteLink - The invite link to revoke
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.revokeChatInviteLink(...);
 */
export async function revokeChatInviteLink(this: Bot, chatId: number | string, inviteLink: string): Promise<any> {
  const apiParams = {
    chatId: chatId,
    inviteLink: inviteLink,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('revokeChatInviteLink', snakeParams);
  return response;
}
