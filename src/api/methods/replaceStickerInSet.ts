/**
 * replaceStickerInSet method implementation for Surfgram Telegram Bot SDK
 * @module methods/replaceStickerInSet
 * @description Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#replaceStickerInSet Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { ReplaceStickerInSetParams } from "../interfaces/replaceStickerInSetParams";
import { InputSticker } from "../types/inputSticker";

/**
 * Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.
 * @memberof methods
 * @async
 * @function replaceStickerInSet
 * @this {Bot} Bot instance
 * @param { ReplaceStickerInSetParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.replaceStickerInSet({
 * // ... params
 * });
 */
export async function replaceStickerInSet(
	this: Bot,
	params: ReplaceStickerInSetParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("replaceStickerInSet", snakeParams);
	return response;
}
