/**
 * Plugin manager
 * @class PluginManager
 */

import { Bot } from "../bot/bot";
import { Plugin } from "./plugin";

export class PluginManager {
	/**
	 * Registered plugins map
	 * @private
	 */
	private plugins = new Map<string, Plugin>();

	/**
	 * Bot instance
	 * @private
	 */
	private bot: Bot;

	/**
	 * Creates a new PluginManager
	 * @constructor
	 * @param bot - Bot instance
	 */
	constructor(bot: Bot) {
		this.bot = bot;
	}

	/**
	 * Use a plugin
	 * @param plugin - Plugin instance
	 * @param options - Plugin options
	 * @returns {this} PluginManager instance for chaining
	 */
	public use(plugin: Plugin, options?: any): this {
		if (this.plugins.has(plugin.name)) {
			throw new Error(`Plugin "${plugin.name}" is already registered`);
		}

		const result = plugin.install(this.bot, options);

		if (result instanceof Promise) {
			result.catch(() => {});
		}

		this.plugins.set(plugin.name, plugin);
		return this;
	}

	/**
	 * Get plugin by name
	 * @param name - Plugin name
	 * @returns Plugin instance or undefined
	 */
	public get<T extends Plugin = Plugin>(name: string): T | undefined {
		return this.plugins.get(name) as T | undefined;
	}

	/**
	 * Check if plugin is registered
	 * @param name - Plugin name
	 * @returns True if plugin exists
	 */
	public has(name: string): boolean {
		return this.plugins.has(name);
	}

	/**
	 * Cleanup all plugins
	 * @async
	 */
	public async cleanup(): Promise<void> {
		for (const plugin of this.plugins.values()) {
			if (plugin.cleanup) {
				await plugin.cleanup();
			}
		}
		this.plugins.clear();
	}
}
