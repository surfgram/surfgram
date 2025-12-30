/**
 * postStory method implementation for Surfgram Telegram Bot SDK
 * @module methods/postStory
 * @description Posts a story on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns Story on success.
 * @see {@link https://core.telegram.org/bots/api#postStory Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { PostStoryParams } from '../interfaces/postStoryParams';
import { InputStoryContent } from '../types/inputStoryContent';
import { MessageEntity } from '../types/messageEntity';
import { StoryArea } from '../types/storyArea';

/**
 * Posts a story on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns Story on success.
 * @memberof methods
 * @async
 * @function postStory
 * @this {Bot} Bot instance
 * @param { PostStoryParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.postStory({
 * // ... params
 * });
 */
export async function postStory(this: Bot, params: PostStoryParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('postStory', snakeParams);
  return response;
}
