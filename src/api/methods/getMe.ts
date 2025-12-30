/**
 * getMe method implementation for Surfgram Telegram Bot SDK
 * @module methods/getMe
 * @description A simple method for testing your bot&#39;s authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
 * @see {@link https://core.telegram.org/bots/api#getMe Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { GetMeParams } from '../interfaces/getMeParams';
import { MessageEntity } from '../types/messageEntity';
import { LinkPreviewOptions } from '../types/linkPreviewOptions';
import { SuggestedPostParameters } from '../types/suggestedPostParameters';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';
import { ReplyKeyboardMarkup } from '../types/replyKeyboardMarkup';
import { ReplyKeyboardRemove } from '../types/replyKeyboardRemove';
import { ForceReply } from '../types/forceReply';

/**
 * A simple method for testing your bot&#39;s authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
 * @memberof methods
 * @async
 * @function getMe
 * @this {Bot} Bot instance
 * @param { GetMeParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.getMe({
 * // ... params
 * });
 */
export async function getMe(this: Bot, params: GetMeParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('getMe', snakeParams);
  return response;
}
