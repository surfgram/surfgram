/**
 * deleteMyCommands method implementation for Surfgram Telegram Bot SDK
 * @module methods/deleteMyCommands
 * @description Use this method to delete the list of the bot&#39;s commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deleteMyCommands Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { BotCommandScope } from '../types/botCommandScope';

/**
 * Use this method to delete the list of the bot&#39;s commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.
 * @memberof methods
 * @async
 * @function deleteMyCommands
 * @this {Bot} Bot instance
 *  * @param { BotCommandScope } scope? - A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
 *  * @param { string } languageCode? - A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.deleteMyCommands(...);
 */
export async function deleteMyCommands(this: Bot, scope?: BotCommandScope, languageCode?: string): Promise<any> {
  const apiParams = {
    scope: scope,
    languageCode: languageCode,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('deleteMyCommands', snakeParams);
  return response;
}
