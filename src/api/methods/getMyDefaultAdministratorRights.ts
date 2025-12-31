/**
 * getMyDefaultAdministratorRights method implementation for Surfgram Telegram Bot SDK
 * @module methods/getMyDefaultAdministratorRights
 * @description Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.
 * @see {@link https://core.telegram.org/bots/api#getMyDefaultAdministratorRights Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.
 * @memberof methods
 * @async
 * @function getMyDefaultAdministratorRights
 * @this {Bot} Bot instance
 *  * @param { boolean } forChannels? - Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getMyDefaultAdministratorRights(...);
 */
export async function getMyDefaultAdministratorRights(
	this: Bot,
	forChannels?: boolean,
): Promise<any> {
	const apiParams = {
		forChannels: forChannels,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>(
		"getMyDefaultAdministratorRights",
		snakeParams,
	);
	return response;
}
