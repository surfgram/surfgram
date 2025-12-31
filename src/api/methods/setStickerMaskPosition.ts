/**
 * setStickerMaskPosition method implementation for Surfgram Telegram Bot SDK
 * @module methods/setStickerMaskPosition
 * @description Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setStickerMaskPosition Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { MaskPosition } from "../types/maskPosition";

/**
 * Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
 * @memberof methods
 * @async
 * @function setStickerMaskPosition
 * @this {Bot} Bot instance
 *  * @param { string } sticker - File identifier of the sticker
 *  * @param { MaskPosition } maskPosition? - A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setStickerMaskPosition(...);
 */
export async function setStickerMaskPosition(
	this: Bot,
	sticker: string,
	maskPosition?: MaskPosition,
): Promise<any> {
	const apiParams = {
		sticker: sticker,
		maskPosition: maskPosition,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>(
		"setStickerMaskPosition",
		snakeParams,
	);
	return response;
}
