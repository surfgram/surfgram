/**
 * getWebhookInfo method implementation for Surfgram Telegram Bot SDK
 * @module methods/getWebhookInfo
 * @description Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
 * @see {@link https://core.telegram.org/bots/api#getWebhookInfo Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { GetWebhookInfoParams } from "../interfaces/getWebhookInfoParams";

/**
 * Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
 * @memberof methods
 * @async
 * @function getWebhookInfo
 * @this {Bot} Bot instance
 * @param { GetWebhookInfoParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.getWebhookInfo({
 * // ... params
 * });
 */
export async function getWebhookInfo(
	this: Bot,
	params: GetWebhookInfoParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("getWebhookInfo", snakeParams);
	return response;
}
