/**
 * Parameters interface for the setWebhook method
 * @interface SetWebhookParams
 * @description Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request \(a request with response HTTP status code different from 2XY\), we will repeat the request and give up after a reasonable amount of attempts. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setWebhook Telegram API Documentation}
 */

import { InputFile } from "../types/inputFile";

export interface SetWebhookParams {
	/**
	 * HTTPS URL to send updates to. Use an empty string to remove webhook integration
	 * @type { string }
	 * @originalType String
	 * @required Yes
	 */
	url: string;

	/**
	 * Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details.
	 * @type { InputFile }
	 * @originalType InputFile
	 * @required No
	 */
	certificate?: InputFile;

	/**
	 * The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS
	 * @type { string }
	 * @originalType String
	 * @required No
	 */
	ipAddress?: string;

	/**
	 * The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput.
	 * @type { number }
	 * @originalType Integer
	 * @required No
	 */
	maxConnections?: number;

	/**
	 * A JSON-serialized list of the update types you want your bot to receive. For example, specify \["message", "edited\_channel\_post", "callback\_query"\] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat\_member, message\_reaction, and message\_reaction\_count \(default\). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.
	 * @type { string[] }
	 * @originalType Array of String
	 * @required No
	 */
	allowedUpdates?: string[];

	/**
	 * Pass True to drop all pending updates
	 * @type { boolean }
	 * @originalType Boolean
	 * @required No
	 */
	dropPendingUpdates?: boolean;

	/**
	 * A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, \_ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you.
	 * @type { string }
	 * @originalType String
	 * @required No
	 */
	secretToken?: string;
}
