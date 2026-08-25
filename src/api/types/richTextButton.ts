/**
 * RichTextButton class for Surfgram Telegram Bot SDK
 * @module types/richTextButton
 * @description A button.
 * @see {@link https://core.telegram.org/bots/api#richtextbutton Telegram API Documentation}
 * @class RichTextButton
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichMessageButton } from './richMessageButton';

/**
 * Represents a RichTextButton object from the Telegram Bot API
 * @class RichTextButton
 */
export class RichTextButton {
  /**
   * Type of the rich text, always “button”
   * @type { string }
   * @memberof RichTextButton
   * @instance
   * @public
   */
  type!: string;

  /**
   * The button
   * @type { RichMessageButton }
   * @memberof RichTextButton
   * @instance
   * @public
   */
  button!: RichMessageButton;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextButton
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextButton
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextButton instance from raw Telegram API data
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
