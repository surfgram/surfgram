/**
 * editChatSubscriptionInviteLink method implementation for Surfgram Telegram Bot SDK
 * @module methods/editChatSubscriptionInviteLink
 * @description Use this method to edit a subscription invite link created by the bot. The bot must have the can\_invite\_users administrator rights. Returns the edited invite link as a ChatInviteLink object.
 * @see {@link https://core.telegram.org/bots/api#editChatSubscriptionInviteLink Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to edit a subscription invite link created by the bot. The bot must have the can\_invite\_users administrator rights. Returns the edited invite link as a ChatInviteLink object.
 * @memberof methods
 * @async
 * @function editChatSubscriptionInviteLink
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
 *  * @param { string } inviteLink - The invite link to edit
 *  * @param { string } name? - Invite link name; 0-32 characters
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.editChatSubscriptionInviteLink(...);
 */
export async function editChatSubscriptionInviteLink(
	this: Bot,
	chatId: number | string,
	inviteLink: string,
	name?: string,
): Promise<any> {
	const apiParams = {
		chatId: chatId,
		inviteLink: inviteLink,
		name: name,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>(
		"editChatSubscriptionInviteLink",
		snakeParams,
	);
	return response;
}
