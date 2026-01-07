/**
 * getStickerSet method implementation for Surfgram Telegram Bot SDK
 * @module methods/getStickerSet
 * @description Use this method to get a sticker set. On success, a StickerSet object is returned.
 * @see {@link https://core.telegram.org/bots/api#getStickerSet Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to get a sticker set. On success, a StickerSet object is returned.
 * @memberof methods
 * @async
 * @function getStickerSet
 * @this {Bot} Bot instance
 *  * @param { string } name - Name of the sticker set
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getStickerSet(...);
 */
export async function getStickerSet(this: Bot, name: string): Promise<any> {
	const apiParams = {
		name: name,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("getStickerSet", snakeParams);
	return response;
}
