/**
 * createChatInviteLink method implementation for Surfgram Telegram Bot SDK
 * @module methods/createChatInviteLink
 * @description Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
 * @see {@link https://core.telegram.org/bots/api#createChatInviteLink Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { CreateChatInviteLinkParams } from "../interfaces/createChatInviteLinkParams";

/**
 * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
 * @memberof methods
 * @async
 * @function createChatInviteLink
 * @this {Bot} Bot instance
 * @param { CreateChatInviteLinkParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.createChatInviteLink({
 * // ... params
 * });
 */
export async function createChatInviteLink(
	this: Bot,
	params: CreateChatInviteLinkParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("createChatInviteLink", snakeParams);
	return response;
}
