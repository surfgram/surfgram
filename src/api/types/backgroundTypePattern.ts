/**
 * BackgroundTypePattern class for Surfgram Telegram Bot SDK
 * @module types/backgroundTypePattern
 * @description The background is a .PNG or .TGV \(gzipped subset of SVG with MIME type “application/x-tgwallpattern”\) pattern to be combined with the background fill chosen by the user.
 * @see {@link https://core.telegram.org/bots/api#backgroundtypepattern Telegram API Documentation}
 * @class BackgroundTypePattern
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Document } from './document';
import { BackgroundFill } from './backgroundFill';

/**
 * Represents a BackgroundTypePattern object from the Telegram Bot API
 * @class BackgroundTypePattern
 */
export class BackgroundTypePattern {
  /**
   * Type of the background, always “pattern”
   * @type { string }
   * @memberof BackgroundTypePattern
   * @instance
   * @public
   */
  type!: string;
  /**
   * Document with the pattern
   * @type { Document }
   * @memberof BackgroundTypePattern
   * @instance
   * @public
   */
  document!: Document;
  /**
   * The background fill that is combined with the pattern
   * @type { BackgroundFill }
   * @memberof BackgroundTypePattern
   * @instance
   * @public
   */
  fill!: BackgroundFill;
  /**
   * Intensity of the pattern when it is shown above the filled background; 0-100
   * @type { number }
   * @memberof BackgroundTypePattern
   * @instance
   * @public
   */
  intensity!: number;
  /**
   * Optional. True, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only
   * @type { boolean }
   * @memberof BackgroundTypePattern
   * @instance
   * @public
   */
  isInverted?: boolean;
  /**
   * Optional. True, if the background moves slightly when the device is tilted
   * @type { boolean }
   * @memberof BackgroundTypePattern
   * @instance
   * @public
   */
  isMoving?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BackgroundTypePattern
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BackgroundTypePattern
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BackgroundTypePattern instance from raw Telegram API data
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
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.type = data.type;
      this.document = data.document;
      this.fill = data.fill;
      this.intensity = data.intensity;
      this.isInverted = data.isInverted;
      this.isMoving = data.isMoving;
    }
  }
}
