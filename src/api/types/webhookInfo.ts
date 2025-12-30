/**
 * WebhookInfo class for Surfgram Telegram Bot SDK
 * @module types/webhookInfo
 * @description Describes the current status of a webhook.
 * @see {@link https://core.telegram.org/bots/api#webhookinfo Telegram API Documentation}
 * @class WebhookInfo
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a WebhookInfo object from the Telegram Bot API
 * @class WebhookInfo
 */
export class WebhookInfo {
  /**
   * Webhook URL, may be empty if webhook is not set up
   * @type { string }
   * @memberof WebhookInfo
   * @instance
   * @public
   */
  url!: string;

  /**
   * True, if a custom certificate was provided for webhook certificate checks
   * @type { boolean }
   * @memberof WebhookInfo
   * @instance
   * @public
   */
  hasCustomCertificate!: boolean;

  /**
   * Number of updates awaiting delivery
   * @type { number }
   * @memberof WebhookInfo
   * @instance
   * @public
   */
  pendingUpdateCount!: number;

  /**
   * Optional. Currently used webhook IP address
   * @type { string }
   * @memberof WebhookInfo
   * @instance
   * @public
   */
  ipAddress?: string;

  /**
   * Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook
   * @type { number }
   * @memberof WebhookInfo
   * @instance
   * @public
   */
  lastErrorDate?: number;

  /**
   * Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook
   * @type { string }
   * @memberof WebhookInfo
   * @instance
   * @public
   */
  lastErrorMessage?: string;

  /**
   * Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters
   * @type { number }
   * @memberof WebhookInfo
   * @instance
   * @public
   */
  lastSynchronizationErrorDate?: number;

  /**
   * Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
   * @type { number }
   * @memberof WebhookInfo
   * @instance
   * @public
   */
  maxConnections?: number;

  /**
   * Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat\_member
   * @type { string[] }
   * @memberof WebhookInfo
   * @instance
   * @public
   */
  allowedUpdates?: string[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof WebhookInfo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof WebhookInfo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new WebhookInfo instance from raw Telegram API data
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
