/**
 * logOut method implementation for Surfgram Telegram Bot SDK
 * @module methods/logOut
 * @description Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.
 * @see {@link https://core.telegram.org/bots/api#logOut Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { LogOutParams } from "../interfaces/logOutParams";
import { MessageEntity } from "../types/messageEntity";
import { LinkPreviewOptions } from "../types/linkPreviewOptions";
import { SuggestedPostParameters } from "../types/suggestedPostParameters";
import { ReplyParameters } from "../types/replyParameters";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "../types/replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "../types/replyKeyboardRemove";
import { ForceReply } from "../types/forceReply";

/**
 * Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.
 * @memberof methods
 * @async
 * @function logOut
 * @this {Bot} Bot instance
 * @param { LogOutParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.logOut({
 * // ... params
 * });
 */
export async function logOut(this: Bot, params: LogOutParams): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("logOut", snakeParams);
	return response;
}
