/**
 * StoryAreaTypeSuggestedReaction class for Surfgram Telegram Bot SDK
 * @module types/storyAreaTypeSuggestedReaction
 * @description Describes a story area pointing to a suggested reaction. Currently, a story can have up to 5 suggested reaction areas.
 * @see {@link https://core.telegram.org/bots/api#storyareatypesuggestedreaction Telegram API Documentation}
 * @class StoryAreaTypeSuggestedReaction
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { ReactionType } from './reactionType';

/**
 * Represents a StoryAreaTypeSuggestedReaction object from the Telegram Bot API
 * @class StoryAreaTypeSuggestedReaction
 */
export class StoryAreaTypeSuggestedReaction {
  /**
   * Type of the area, always “suggested\_reaction”
   * @type { string }
   * @memberof StoryAreaTypeSuggestedReaction
   * @instance
   * @public
   */
  type!: string;
  /**
   * Type of the reaction
   * @type { ReactionType }
   * @memberof StoryAreaTypeSuggestedReaction
   * @instance
   * @public
   */
  reactionType!: ReactionType;
  /**
   * Optional. Pass True if the reaction area has a dark background
   * @type { boolean }
   * @memberof StoryAreaTypeSuggestedReaction
   * @instance
   * @public
   */
  isDark?: boolean;
  /**
   * Optional. Pass True if reaction area corner is flipped
   * @type { boolean }
   * @memberof StoryAreaTypeSuggestedReaction
   * @instance
   * @public
   */
  isFlipped?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof StoryAreaTypeSuggestedReaction
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof StoryAreaTypeSuggestedReaction
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new StoryAreaTypeSuggestedReaction instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.type = data.type;
      this.reactionType = data.reactionType;
      this.isDark = data.isDark;
      this.isFlipped = data.isFlipped;
    }
  }
}
