/**
 * setChatPhoto method implementation for Surfgram Telegram Bot SDK
 * @module methods/setChatPhoto
 * @description Use this method to set a new profile photo for the chat. Photos can&#39;t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setChatPhoto Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { InputFile } from "../types/inputFile";

/**
 * Use this method to set a new profile photo for the chat. Photos can&#39;t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * @memberof methods
 * @async
 * @function setChatPhoto
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
 *  * @param { InputFile } photo - New chat photo, uploaded using multipart/form-data
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setChatPhoto(...);
 */
export async function setChatPhoto(
	this: Bot,
	chatId: number | string,
	photo: InputFile,
): Promise<any> {
	const apiParams = {
		chatId: chatId,
		photo: photo,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("setChatPhoto", snakeParams);
	return response;
}
