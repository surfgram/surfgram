/**
 * setMyDefaultAdministratorRights method implementation for Surfgram Telegram Bot SDK
 * @module methods/setMyDefaultAdministratorRights
 * @description Use this method to change the default administrator rights requested by the bot when it&#39;s added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setMyDefaultAdministratorRights Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { ChatAdministratorRights } from "../types/chatAdministratorRights";

/**
 * Use this method to change the default administrator rights requested by the bot when it&#39;s added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.
 * @memberof methods
 * @async
 * @function setMyDefaultAdministratorRights
 * @this {Bot} Bot instance
 *  * @param { ChatAdministratorRights } rights? - A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared.
 *  * @param { boolean } forChannels? - Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setMyDefaultAdministratorRights(...);
 */
export async function setMyDefaultAdministratorRights(
	this: Bot,
	rights?: ChatAdministratorRights,
	forChannels?: boolean,
): Promise<any> {
	const apiParams = {
		rights: rights,
		forChannels: forChannels,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>(
		"setMyDefaultAdministratorRights",
		snakeParams,
	);
	return response;
}
