/**
 * Parameters interface for the getWebhookInfo method
 * @interface GetWebhookInfoParams
 * @description Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
 * @see {@link https://core.telegram.org/bots/api#getWebhookInfo Telegram API Documentation}
 */

export interface GetWebhookInfoParams {
  /**
   * Webhook URL, may be empty if webhook is not set up
   * @type { string }
   * @originalType String
   * @required Yes
   */
  url: string;

  /**
   * True, if a custom certificate was provided for webhook certificate checks
   * @type { boolean }
   * @originalType Boolean
   * @required Yes
   */
  hasCustomCertificate: boolean;

  /**
   * Number of updates awaiting delivery
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  pendingUpdateCount: number;

  /**
   * Optional. Currently used webhook IP address
   * @type { string }
   * @originalType String
   * @required No
   */
  ipAddress?: string;

  /**
   * Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook
   * @type { number }
   * @originalType Integer
   * @required No
   */
  lastErrorDate?: number;

  /**
   * Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook
   * @type { string }
   * @originalType String
   * @required No
   */
  lastErrorMessage?: string;

  /**
   * Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters
   * @type { number }
   * @originalType Integer
   * @required No
   */
  lastSynchronizationErrorDate?: number;

  /**
   * Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
   * @type { number }
   * @originalType Integer
   * @required No
   */
  maxConnections?: number;

  /**
   * Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat\_member
   * @type { string[] }
   * @originalType Array of String
   * @required No
   */
  allowedUpdates?: string[];
}
