/**
 * promoteChatMember method implementation for Surfgram Telegram Bot SDK
 * @module methods/promoteChatMember
 * @description Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#promoteChatMember Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { PromoteChatMemberParams } from "../interfaces/promoteChatMemberParams";

/**
 * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
 * @memberof methods
 * @async
 * @function promoteChatMember
 * @this {Bot} Bot instance
 * @param { PromoteChatMemberParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.promoteChatMember({
 * // ... params
 * });
 */
export async function promoteChatMember(
	this: Bot,
	params: PromoteChatMemberParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("promoteChatMember", snakeParams);
	return response;
}
