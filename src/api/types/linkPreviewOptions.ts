/**
 * LinkPreviewOptions class for Surfgram Telegram Bot SDK
 * @module types/linkPreviewOptions
 * @description Describes the options used for link preview generation.
 * @see {@link https://core.telegram.org/bots/api#linkpreviewoptions Telegram API Documentation}
 * @class LinkPreviewOptions
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a LinkPreviewOptions object from the Telegram Bot API
 * @class LinkPreviewOptions
 */
export class LinkPreviewOptions {
  /**
   * Optional. True, if the link preview is disabled
   * @type { boolean }
   * @memberof LinkPreviewOptions
   * @instance
   * @public
   */
  isDisabled?: boolean;

  /**
   * Optional. URL to use for the link preview. If empty, then the first URL found in the message text will be used
   * @type { string }
   * @memberof LinkPreviewOptions
   * @instance
   * @public
   */
  url?: string;

  /**
   * Optional. True, if the media in the link preview is supposed to be shrunk; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview
   * @type { boolean }
   * @memberof LinkPreviewOptions
   * @instance
   * @public
   */
  preferSmallMedia?: boolean;

  /**
   * Optional. True, if the media in the link preview is supposed to be enlarged; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview
   * @type { boolean }
   * @memberof LinkPreviewOptions
   * @instance
   * @public
   */
  preferLargeMedia?: boolean;

  /**
   * Optional. True, if the link preview must be shown above the message text; otherwise, the link preview will be shown below the message text
   * @type { boolean }
   * @memberof LinkPreviewOptions
   * @instance
   * @public
   */
  showAboveText?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof LinkPreviewOptions
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof LinkPreviewOptions
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new LinkPreviewOptions instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
