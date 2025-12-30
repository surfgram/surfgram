/**
 * restrictChatMember method implementation for Surfgram Telegram Bot SDK
 * @module methods/restrictChatMember
 * @description Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#restrictChatMember Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { RestrictChatMemberParams } from '../interfaces/restrictChatMemberParams';
import { ChatPermissions } from '../types/chatPermissions';

/**
 * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
 * @memberof methods
 * @async
 * @function restrictChatMember
 * @this {Bot} Bot instance
 * @param { RestrictChatMemberParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.restrictChatMember({
 * // ... params
 * });
 */
export async function restrictChatMember(
  this: Bot,
  params: RestrictChatMemberParams
): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('restrictChatMember', snakeParams);
  return response;
}
