/**
 * Base plugin interface
 * @interface Plugin
 */

import { Bot } from "../bot/bot";

export interface Plugin {
	/** Plugin name */
	name: string;

	/** Plugin version */
	version?: string;

	/** Install plugin to bot */
	install(bot: Bot, options?: any): void | Promise<void>;

	/** Cleanup plugin */
	cleanup?(): void | Promise<void>;
}
