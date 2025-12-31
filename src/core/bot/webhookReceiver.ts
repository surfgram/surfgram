/**
 * Webhook receiver with server
 * @class WebhookReceiver
 */

import { Bot } from "./bot";
import { snakeToCamel } from "../utils";
import { Update } from "../../api/types/update";

export class WebhookReceiver {
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
	 * HTTP server instance
	 * @private
	 */
	private server: any = null;

	/**
	 * Secret token for verification
	 * @private
	 */
	private secretToken: string | null = null;

	/**
	 * Webhook path
	 * @private
	 */
	private path: string = "/webhook";

	/**
	 * Server port
	 * @private
	 */
	private port: number = 3000;

	/**
	 * Creates a new WebhookReceiver instance
	 * @constructor
	 * @param {Bot} bot - Bot instance
	 */
	constructor(bot: Bot) {
		this.bot = bot;
	}

	/**
	 * Starts webhook receiver
	 * @async
	 * @param {Object} [options] - Webhook options
	 * @param {string} [options.path='/webhook'] - Webhook path
	 * @param {number} [options.port=3000] - Server port
	 * @param {string} [options.secretToken] - Secret token for verification
	 * @returns {Promise<void>}
	 */
	public async start(
		options: {
			path?: string;
			port?: number;
			secretToken?: string;
		} = {},
	): Promise<void> {
		if (this.isActive) {
			throw new Error("WebhookReceiver is already active");
		}

		this.path = options.path || "/webhook";
		this.port = options.port || 3000;
		this.secretToken = options.secretToken || null;

		this.isActive = true;

		const http = await import("http");

		this.server = http.createServer((req, res) => {
			this.handleRequest(req, res).catch(() => {});
		});

		this.server.listen(this.port);
	}

	/**
	 * Handles incoming HTTP request
	 * @private
	 * @async
	 * @param {any} req - HTTP request
	 * @param {any} res - HTTP response
	 * @returns {Promise<void>}
	 */
	private async handleRequest(req: any, res: any): Promise<void> {
		if (req.method !== "POST" || req.url !== this.path) {
			if (req.method === "GET") {
				res.writeHead(200, { "Content-Type": "application/json" });
				res.end(
					JSON.stringify({
						status: "ok",
						path: this.path,
						message: "Webhook server is running",
					}),
				);
				return;
			}
			res.writeHead(404);
			res.end();
			return;
		}

		if (this.secretToken) {
			const token = req.headers["x-telegram-bot-api-secret-token"];
			if (token !== this.secretToken) {
				res.writeHead(403);
				res.end();
				return;
			}
		}

		try {
			const bodyChunks: Buffer[] = [];
			for await (const chunk of req) {
				bodyChunks.push(chunk);
			}

			const body = Buffer.concat(bodyChunks).toString("utf-8");

			if (!body) {
				throw new Error("Empty request body");
			}

			const data = JSON.parse(body);

			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ ok: true }));

			const update = snakeToCamel(data) as Update;
			await this.bot.dispatch(update);
		} catch {
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ ok: true }));
		}
	}

	/**
	 * Stops webhook receiver gracefully
	 * @async
	 * @returns {Promise<void>}
	 */
	public async stop(): Promise<void> {
		if (!this.isActive) return;

		this.isActive = false;

		if (
			this.server &&
			this.server.close &&
			typeof this.server.close === "function"
		) {
			return new Promise((resolve) => {
				this.server.close(() => {
					this.server = null;
					resolve();
				});
			});
		}

		this.server = null;
	}

	/**
	 * Checks if receiver is active
	 * @returns {boolean} Receiver status
	 */
	public isRunning(): boolean {
		return this.isActive;
	}
}
