/**
 * InputRichBlockThinking class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockThinking
 * @description A block with a “Thinking…” placeholder, corresponding to the custom HTML tag &lt;tg-thinking&gt;. The block may be used only in sendRichMessageDraft, therefore it can&#39;t be received in messages. See https://t.me/addemoji/AIActions for examples of custom emoji that are recommended for usage in the block.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockthinking Telegram API Documentation}
 * @class InputRichBlockThinking
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a InputRichBlockThinking object from the Telegram Bot API
 * @class InputRichBlockThinking
 */
export class InputRichBlockThinking {
  /**
   * Type of the block, always “thinking”
   * @type { string }
   * @memberof InputRichBlockThinking
   * @instance
   * @public
   */
  type!: string;

  /**
   * Text of the block. See https://t.me/addemoji/AIActions for examples of custom emoji that are recommended for usage in the block.
   * @type { RichText }
   * @memberof InputRichBlockThinking
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockThinking
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockThinking
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockThinking instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(
    raw?: TelegramObject,
    bot?: Bot
  ) {
    this.raw = raw;
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
    this.bot = bot;
  }
}
