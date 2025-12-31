/**
 * editChatInviteLink method implementation for Surfgram Telegram Bot SDK
 * @module methods/editChatInviteLink
 * @description Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.
 * @see {@link https://core.telegram.org/bots/api#editChatInviteLink Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { EditChatInviteLinkParams } from '../interfaces/editChatInviteLinkParams';

/**
 * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.
 * @memberof methods
 * @async
 * @function editChatInviteLink
 * @this {Bot} Bot instance
 * @param { EditChatInviteLinkParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.editChatInviteLink({
 * // ... params
 * });
 */
export async function editChatInviteLink(
  this: Bot,
  params: EditChatInviteLinkParams
): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('editChatInviteLink', snakeParams);
  return response;
}
