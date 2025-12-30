/**
 * ProximityAlertTriggered class for Surfgram Telegram Bot SDK
 * @module types/proximityAlertTriggered
 * @description This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
 * @see {@link https://core.telegram.org/bots/api#proximityalerttriggered Telegram API Documentation}
 * @class ProximityAlertTriggered
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a ProximityAlertTriggered object from the Telegram Bot API
 * @class ProximityAlertTriggered
 */
export class ProximityAlertTriggered {
  /**
   * User that triggered the alert
   * @type { User }
   * @memberof ProximityAlertTriggered
   * @instance
   * @public
   */
  traveler!: User;
  /**
   * User that set the alert
   * @type { User }
   * @memberof ProximityAlertTriggered
   * @instance
   * @public
   */
  watcher!: User;
  /**
   * The distance between the users
   * @type { number }
   * @memberof ProximityAlertTriggered
   * @instance
   * @public
   */
  distance!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ProximityAlertTriggered
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ProximityAlertTriggered
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ProximityAlertTriggered instance from raw Telegram API data
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

      this.traveler = data.traveler;
      this.watcher = data.watcher;
      this.distance = data.distance;
    }
  }
}
