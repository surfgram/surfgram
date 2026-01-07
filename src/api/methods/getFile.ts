/**
 * getFile method implementation for Surfgram Telegram Bot SDK
 * @module methods/getFile
 * @description Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot&lt;token&gt;/&lt;file\_path&gt;, where &lt;file\_path&gt; is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
 * @see {@link https://core.telegram.org/bots/api#getFile Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot&lt;token&gt;/&lt;file\_path&gt;, where &lt;file\_path&gt; is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
 * @memberof methods
 * @async
 * @function getFile
 * @this {Bot} Bot instance
 *  * @param { string } fileId - File identifier to get information about
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getFile(...);
 */
export async function getFile(this: Bot, fileId: string): Promise<any> {
	const apiParams = {
		fileId: fileId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("getFile", snakeParams);
	return response;
}
