/**
 * getUserProfilePhotos method implementation for Surfgram Telegram Bot SDK
 * @module methods/getUserProfilePhotos
 * @description Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
 * @see {@link https://core.telegram.org/bots/api#getUserProfilePhotos Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
 * @memberof methods
 * @async
 * @function getUserProfilePhotos
 * @this {Bot} Bot instance
 *  * @param { number } userId - Unique identifier of the target user
 *  * @param { number } offset? - Sequential number of the first photo to be returned. By default, all photos are returned.
 *  * @param { number } limit? - Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getUserProfilePhotos(...);
 */
export async function getUserProfilePhotos(
	this: Bot,
	userId: number,
	offset?: number,
	limit?: number,
): Promise<any> {
	const apiParams = {
		userId: userId,
		offset: offset,
		limit: limit,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("getUserProfilePhotos", snakeParams);
	return response;
}
