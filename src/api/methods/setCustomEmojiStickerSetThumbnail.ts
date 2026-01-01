/**
 * setCustomEmojiStickerSetThumbnail method implementation for Surfgram Telegram Bot SDK
 * @module methods/setCustomEmojiStickerSetThumbnail
 * @description Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setCustomEmojiStickerSetThumbnail Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
 * @memberof methods
 * @async
 * @function setCustomEmojiStickerSetThumbnail
 * @this {Bot} Bot instance
 *  * @param { string } name - Sticker set name
 *  * @param { string } customEmojiId? - Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setCustomEmojiStickerSetThumbnail(...);
 */
export async function setCustomEmojiStickerSetThumbnail(
	this: Bot,
	name: string,
	customEmojiId?: string,
): Promise<any> {
	const apiParams = {
		name: name,
		customEmojiId: customEmojiId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>(
		"setCustomEmojiStickerSetThumbnail",
		snakeParams,
	);
	return response;
}
