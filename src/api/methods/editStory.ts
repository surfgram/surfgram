/**
 * editStory method implementation for Surfgram Telegram Bot SDK
 * @module methods/editStory
 * @description Edits a story previously posted by the bot on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns Story on success.
 * @see {@link https://core.telegram.org/bots/api#editStory Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { EditStoryParams } from '../interfaces/editStoryParams';
import { InputStoryContent } from '../types/inputStoryContent';
import { MessageEntity } from '../types/messageEntity';
import { StoryArea } from '../types/storyArea';

/**
 * Edits a story previously posted by the bot on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns Story on success.
 * @memberof methods
 * @async
 * @function editStory
 * @this {Bot} Bot instance
 * @param { EditStoryParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.editStory({
 * // ... params
 * });
 */
export async function editStory(this: Bot, params: EditStoryParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('editStory', snakeParams);
  return response;
}
