/**
 * InputVenueMessageContent class for Surfgram Telegram Bot SDK
 * @module types/inputVenueMessageContent
 * @description Represents the content of a venue message to be sent as the result of an inline query.
 * @see {@link https://core.telegram.org/bots/api#inputvenuemessagecontent Telegram API Documentation}
 * @class InputVenueMessageContent
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a InputVenueMessageContent object from the Telegram Bot API
 * @class InputVenueMessageContent
 */
export class InputVenueMessageContent {
	/**
	 * Latitude of the venue in degrees
	 * @type { number }
	 * @memberof InputVenueMessageContent
	 * @instance
	 * @public
	 */
	latitude!: number;

	/**
	 * Longitude of the venue in degrees
	 * @type { number }
	 * @memberof InputVenueMessageContent
	 * @instance
	 * @public
	 */
	longitude!: number;

	/**
	 * Name of the venue
	 * @type { string }
	 * @memberof InputVenueMessageContent
	 * @instance
	 * @public
	 */
	title!: string;

	/**
	 * Address of the venue
	 * @type { string }
	 * @memberof InputVenueMessageContent
	 * @instance
	 * @public
	 */
	address!: string;

	/**
	 * Optional. Foursquare identifier of the venue, if known
	 * @type { string }
	 * @memberof InputVenueMessageContent
	 * @instance
	 * @public
	 */
	foursquareId?: string;

	/**
	 * Optional. Foursquare type of the venue, if known. \(For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.\)
	 * @type { string }
	 * @memberof InputVenueMessageContent
	 * @instance
	 * @public
	 */
	foursquareType?: string;

	/**
	 * Optional. Google Places identifier of the venue
	 * @type { string }
	 * @memberof InputVenueMessageContent
	 * @instance
	 * @public
	 */
	googlePlaceId?: string;

	/**
	 * Optional. Google Places type of the venue. \(See supported types.\)
	 * @type { string }
	 * @memberof InputVenueMessageContent
	 * @instance
	 * @public
	 */
	googlePlaceType?: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof InputVenueMessageContent
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof InputVenueMessageContent
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new InputVenueMessageContent instance from raw Telegram API data
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
