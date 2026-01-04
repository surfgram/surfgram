/**
 * getCustomEmojiStickers method implementation for Surfgram Telegram Bot SDK
 * @module methods/getCustomEmojiStickers
 * @description Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.
 * @see {@link https://core.telegram.org/bots/api#getCustomEmojiStickers Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.
 * @memberof methods
 * @async
 * @function getCustomEmojiStickers
 * @this {Bot} Bot instance
 *  * @param { string[] } customEmojiIds - A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getCustomEmojiStickers(...);
 */
export async function getCustomEmojiStickers(
	this: Bot,
	customEmojiIds: string[],
): Promise<any> {
	const apiParams = {
		customEmojiIds: customEmojiIds,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>(
		"getCustomEmojiStickers",
		snakeParams,
	);
	return response;
}
