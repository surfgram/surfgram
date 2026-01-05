/**
 * removeBusinessAccountProfilePhoto method implementation for Surfgram Telegram Bot SDK
 * @module methods/removeBusinessAccountProfilePhoto
 * @description Removes the current profile photo of a managed business account. Requires the can\_edit\_profile\_photo business bot right. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#removeBusinessAccountProfilePhoto Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Removes the current profile photo of a managed business account. Requires the can\_edit\_profile\_photo business bot right. Returns True on success.
 * @memberof methods
 * @async
 * @function removeBusinessAccountProfilePhoto
 * @this {Bot} Bot instance
 *  * @param { string } businessConnectionId - Unique identifier of the business connection
 *  * @param { boolean } isPublic? - Pass True to remove the public photo, which is visible even if the main photo is hidden by the business account's privacy settings. After the main photo is removed, the previous profile photo \(if present\) becomes the main photo.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.removeBusinessAccountProfilePhoto(...);
 */
export async function removeBusinessAccountProfilePhoto(
	this: Bot,
	businessConnectionId: string,
	isPublic?: boolean,
): Promise<any> {
	const apiParams = {
		businessConnectionId: businessConnectionId,
		isPublic: isPublic,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>(
		"removeBusinessAccountProfilePhoto",
		snakeParams,
	);
	return response;
}
