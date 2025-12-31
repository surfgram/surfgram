/**
 * Long polling update receiver
 * @class LongPolling
 */

import { Bot } from "./bot";
import { camelToSnake, snakeToCamel } from "../utils";
import { Update } from "../../api/types/update";
import { TelegramApiResponse } from "./apiResponse";

export class LongPolling {
	/**
	 * Bot instance
	 * @private
	 */
	private bot: Bot;

	/**
	 * Whether receiver is active
	 * @private
	 */
	private isActive: boolean = false;

	/**
	 * Current polling offset
	 * @private
	 */
	private offset: number = 0;

	/**
	 * Abort controller for fetch request
	 * @private
	 */
	private abortController: AbortController | null = null;

	/**
	 * Request timeout in seconds
	 * @private
	 */
	private timeout: number = 10;

	/**
	 * Limit of updates per request
	 * @private
	 */
	private limit: number = 100;

	/**
	 * Retry delay in milliseconds
	 * @private
	 */
	private retryDelay: number = 500;

	/**
	 * Creates a new LongPolling instance
	 * @constructor
	 * @param {Bot} bot - Bot instance
	 */
	constructor(bot: Bot) {
		this.bot = bot;
	}

	/**
	 * Starts long polling
	 * @async
	 * @param {Object} [options] - Polling options
	 * @param {number} [options.timeout=10] - Polling timeout in seconds
	 * @param {number} [options.limit=100] - Maximum updates per request
	 * @param {number} [options.retryDelay=500] - Delay between retries in ms
	 * @param {number | boolean} [options.skipUpdates=false] - Skip old updates
	 * @returns {Promise<void>}
	 */
	public async start(
		options: {
			timeout?: number;
			limit?: number;
			retryDelay?: number;
			skipUpdates?: number | boolean;
		} = {},
	): Promise<void> {
		if (this.isActive) {
			throw new Error("LongPolling is already active");
		}

		this.timeout = options.timeout || 10;
		this.limit = options.limit || 100;
		this.retryDelay = options.retryDelay || 500;

		this.isActive = true;
		this.offset = 0;

		if (options.skipUpdates !== undefined) {
			await this.skipUpdates(options.skipUpdates);
		}

		while (this.isActive) {
			try {
				if (this.abortController) {
					this.abortController.abort();
				}

				this.abortController = new AbortController();

				const timeoutController = new AbortController();
				const timeoutId = setTimeout(
					() => timeoutController.abort(),
					(this.timeout + 5) * 1000,
				);

				try {
					const response = await fetch(`${this.bot.apiUrl}/getUpdates`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							offset: this.offset,
							timeout: this.timeout,
							limit: this.limit,
						}),
						signal: AbortSignal.any([
							this.abortController.signal,
							timeoutController.signal,
						]),
					});

					clearTimeout(timeoutId);

					const data = (await response.json()) as TelegramApiResponse<any[]>;

					if (!data.ok) {
						throw new Error(
							data.description ||
								`Telegram API error ${data.error_code || "unknown"}`,
						);
					}

					const updates = data.result || [];

					if (updates.length > 0) {
						for (const rawUpdate of updates) {
							this.offset = Math.max(this.offset, rawUpdate.update_id + 1);
						}

						for (const rawUpdate of updates) {
							const update = snakeToCamel(rawUpdate) as Update;
							this.bot.dispatch(update).catch(() => {});
						}
					}
				} catch (fetchError) {
					clearTimeout(timeoutId);
					throw fetchError;
				}
			} finally {
				this.abortController = null;
			}
		}
	}

	/**
	 * Gets the latest update ID to skip old updates
	 * @async
	 * @private
	 * @returns {Promise<number>} Latest update ID + 1
	 */
	private async getLatestUpdateId(): Promise<number> {
		try {
			const controller = new AbortController();
			const timeoutId = setTimeout(() => controller.abort(), 1000);

			try {
				const response = await fetch(`${this.bot.apiUrl}/getUpdates`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						offset: -1,
						timeout: 0,
						limit: 1,
					}),
					signal: controller.signal,
				});

				clearTimeout(timeoutId);

				const data = (await response.json()) as TelegramApiResponse<any[]>;

				if (data.ok && data.result && data.result.length > 0) {
					return data.result[0].update_id + 1;
				}
			} catch {
				clearTimeout(timeoutId);
			}
		} catch {
			// Ignore errors
		}

		return 0;
	}

	/**
	 * Skips old updates by setting offset to latest
	 * @async
	 * @param {number | boolean} skip - If true, skip all old updates. If number, use as offset.
	 * @returns {Promise<number>} New offset
	 */
	public async skipUpdates(skip: number | boolean = true): Promise<number> {
		if (skip === true) {
			this.offset = await this.getLatestUpdateId();
		} else if (typeof skip === "number") {
			this.offset = skip;
		}

		return this.offset;
	}

	/**
	 * Stops polling gracefully
	 * @async
	 * @returns {Promise<void>}
	 */
	public async stop(): Promise<void> {
		if (!this.isActive) return;

		this.isActive = false;

		if (this.abortController) {
			this.abortController.abort();
			this.abortController = null;
		}
	}

	/**
	 * Checks if polling is active
	 * @returns {boolean} Polling status
	 */
	public isRunning(): boolean {
		return this.isActive;
	}
}
