/**
 * Main Bot class for Surfgram Telegram Bot SDK
 * @module bot
 * @description Core bot class providing Telegram Bot API interaction,
 * polling, and event handling capabilities.
 */

import { camelToSnake, snakeToCamel, keyExists, valueExists } from '../utils';
import { Update } from '../../api/types/update';
import { LongPolling } from './longPolling';
import { WebhookReceiver } from './webhookReceiver';
import { PluginManager } from '../plugin/pluginManager';
import { Plugin } from '../plugin/plugin';
import { TelegramApiResponse } from './apiResponse';

/**
 * Main bot class for interacting with Telegram Bot API
 * @class Bot
 * @example
 * const bot = new Bot('YOUR_BOT_TOKEN');
 * bot.onMessage(async (message) => {
 *   await message.reply('Hello!');
 * });
 * bot.startPolling();
 */
export class Bot {
  /**
   * Bot token from @BotFather
   * @type {string}
   * @public
   */
  public token: string;

  /**
   * Telegram Bot API base URL
   * @type {string}
   * @public
   */
  public apiUrl: string;

  /**
   * Map of event handlers
   * @type {Map<string, Array<{handler: Function, filter?: Function}>>}
   * @public
   */
  public handlers = new Map<
    string,
    Array<{ handler: Function; filter?: (data: any) => boolean }>
  >();

  /**
   * Plugin manager
   * @type {PluginManager}
   * @public
   */
  public plugins: PluginManager;

  /**
   * Long polling instance
   * @type {LongPolling | null}
   * @private
   */
  private longPolling: LongPolling | null = null;

  /**
   * Webhook receiver instance
   * @type {WebhookReceiver | null}
   * @private
   */
  private webhookReceiver: WebhookReceiver | null = null;

  /**
   * Creates a new Bot instance
   * @constructor
   * @param {string} token - Bot token from @BotFather
   * @throws {Error} If token is not provided
   */
  constructor(token: string) {
    if (!token) throw new Error('Bot token is required');

    const tokenRegex = /^\d{9,11}:[A-Za-z0-9_-]{35}$/;
    if (!tokenRegex.test(token)) {
      throw new Error('Invalid bot token!');
    }

    this.token = token;
    this.apiUrl = `https://api.telegram.org/bot${token}`;

    this.plugins = new PluginManager(this);
  }

  /**
   * Calls a Telegram Bot API method
   * @async
   * @template T
   * @param {string} method - API method name
   * @param {any} params - Method parameters
   * @returns {Promise<T>} Promise resolving to API response
   * @throws {Error} If API returns error or network request fails
   * @example
   * const chat = await bot.callApi('getChat', { chat_id: 123456789 });
   */
  public async callApi<T = any>(method: string, params: any): Promise<T> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(`${this.apiUrl}/${method}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(camelToSnake(params)),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = (await response.json()) as TelegramApiResponse<T>;

      if (!data.ok) {
        throw new Error(data.description || `Telegram API error ${data.error_code || 'unknown'}`);
      }

      if (data.result === undefined) {
        return {} as T;
      }

      return snakeToCamel(data.result) as T;
    } catch (error: any) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  /**
   * Dispatches update to registered handlers
   * @async
   * @param {Update} update - Telegram update object
   * @returns {Promise<void>}
   */
  public async dispatch(update: Update): Promise<void> {
    if (this.handlers.size === 0) return;

    const promises: Promise<any>[] = [];
    const pathCache = new Map<string, any>();

    const buildPathCache = (obj: any, prefix: string = ''): void => {
      if (!obj || typeof obj !== 'object') return;

      if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
          buildPathCache(obj[i], prefix ? `${prefix}[${i}]` : `[${i}]`);
        }
      } else {
        for (const [key, value] of Object.entries(obj)) {
          const path = prefix ? `${prefix}.${key.toLowerCase()}` : key.toLowerCase();
          pathCache.set(path, value);
          buildPathCache(value, path);
        }
      }
    };

    buildPathCache(update);

    for (const [eventPath, handlers] of this.handlers) {
      if (handlers.length === 0) continue;

      let dispatchData: any = null;

      const exactValue = pathCache.get(eventPath);
      if (exactValue !== undefined && exactValue !== null) {
        dispatchData = exactValue;
      } else {
        for (const [cachedPath, value] of pathCache) {
          if (cachedPath.endsWith(`.${eventPath}`) || cachedPath === eventPath) {
            if (value && typeof value === 'object') {
              dispatchData = value;
              break;
            }
          }
        }
      }

      if (
        dispatchData === null &&
        (keyExists(update, eventPath) || valueExists(update, eventPath))
      ) {
        continue;
      }

      if (dispatchData !== null) {
        for (const { handler, filter } of handlers) {
          let shouldRun = true;
          if (filter) {
            shouldRun = filter(dispatchData);
          }
          if (shouldRun) {
            promises.push(Promise.resolve(handler(dispatchData)));
          }
        }
      }
    }

    if (promises.length > 0) {
      await Promise.allSettled(promises);
    }
  }
  /**
   * Gets LongPolling instance (creates if not exists)
   * @returns {LongPolling} LongPolling instance
   */
  private getLongPolling(): LongPolling {
    if (!this.longPolling) {
      this.longPolling = new LongPolling(this);
    }
    return this.longPolling;
  }

  /**
   * Gets WebhookReceiver instance (creates if not exists)
   * @returns {WebhookReceiver} WebhookReceiver instance
   */
  private getWebhookReceiver(): WebhookReceiver {
    if (!this.webhookReceiver) {
      this.webhookReceiver = new WebhookReceiver(this);
    }
    return this.webhookReceiver;
  }

  /**
   * Starts webhook server
   * @async
   * @param {Object} [options] - Webhook options
   * @param {string} [options.url] - Full webhook URL (if needed to set via API)
   * @param {string} [options.path='/webhook'] - Webhook path (used for local server)
   * @param {number} [options.port=3000] - Server port (if not using existing server)
   * @param {string} [options.host='0.0.0.0'] - Server host
   * @param {string} [options.secretToken] - Secret token for verification
   * @param {boolean} [options.setWebhookViaApi=true] - Whether to set webhook via Telegram API
   * @param {boolean} [options.dropPendingUpdates=false] - Drop pending updates when setting webhook
   * @returns {Promise<void>}
   */
  public async startWebhook(
    options: {
      url?: string;
      path?: string;
      port?: number;
      host?: string;
      secretToken?: string;
      setWebhookViaApi?: boolean;
      dropPendingUpdates?: boolean;
    } = {}
  ): Promise<void> {
    if (this.longPolling?.isRunning()) {
      throw new Error('Cannot start webhook while polling is active');
    }

    const path = options.path || '/webhook';
    const port = options.port || 3000;
    const setWebhookViaApi = options.setWebhookViaApi !== false;
    const secretToken = options.secretToken;

    if (options.url && setWebhookViaApi) {
      let webhookUrl = options.url;
      if (!webhookUrl.endsWith(path)) {
        webhookUrl = webhookUrl.endsWith('/')
          ? `${webhookUrl}${path.substring(1)}`
          : `${webhookUrl}${path}`;
      }

      await this.setWebhook({
        url: webhookUrl,
        secretToken: secretToken,
        dropPendingUpdates: options.dropPendingUpdates || false,
      });
    }

    const webhookReceiver = this.getWebhookReceiver();
    await webhookReceiver.start({
      path: path,
      port: port,
      secretToken: secretToken,
    });
  }

  /**
   * Starts long polling
   * @async
   * @param {Object} [options] - Polling options
   * @param {number} [options.timeout=10] - Polling timeout in seconds
   * @param {number} [options.limit=100] - Maximum number of updates per request
   * @param {number} [options.retryDelay=500] - Delay between retries on error
   * @param {number | boolean} [options.skipUpdates=false] - Skip old updates
   * @returns {Promise<void>}
   * @throws {Error} If bot is already receiving updates
   */
  public async startPolling(
    options: {
      timeout?: number;
      limit?: number;
      retryDelay?: number;
      skipUpdates?: number | boolean;
    } = {}
  ): Promise<void> {
    await this.deleteWebhook();

    if (this.webhookReceiver?.isRunning()) {
      throw new Error('Cannot start polling while webhook is active');
    }

    const polling = this.getLongPolling();
    await polling.start(options);
  }

  /**
   * Stops long polling
   * @async
   * @returns {Promise<void>}
   */
  public async stopPolling(): Promise<void> {
    if (this.longPolling) {
      await this.longPolling.stop();
    }
  }

  /**
   * Stops webhook receiver
   * @async
   * @returns {Promise<void>}
   */
  public async stopWebhook(): Promise<void> {
    if (this.webhookReceiver) {
      await this.webhookReceiver.stop();
    }
  }

  /**
   * Skips old updates
   * @async
   * @param {number | boolean} skip - If true, skip all old updates. If number, use as offset.
   * @returns {Promise<number>} New offset
   */
  public async skipUpdates(skip: number | boolean = true): Promise<number> {
    const polling = this.getLongPolling();
    return await polling.skipUpdates(skip);
  }

  /**
   * Registers an event handler with optional filter
   * @param {string} event - Event name
   * @param {Function | {handler: Function, filter?: Function}} handler - Event handler or object with handler and filter
   * @returns {this} Bot instance for chaining
   */
  public register(
    event: string,
    handler: Function | { handler: Function; filter?: (data: any) => boolean }
  ): this {
    const normalizedEvent = event.toLowerCase();

    if (!this.handlers.has(normalizedEvent)) {
      this.handlers.set(normalizedEvent, []);
    }

    const handlerObj = typeof handler === 'function' ? { handler } : handler;

    this.handlers.get(normalizedEvent)!.push(handlerObj);
    return this;
  }

  /**
   * Checks if polling is active
   * @returns {boolean} Polling status
   */
  public isPolling(): boolean {
    return this.longPolling?.isRunning() || false;
  }

  /**
   * Checks if webhook is active
   * @returns {boolean} Webhook status
   */
  public isWebhook(): boolean {
    return this.webhookReceiver?.isRunning() || false;
  }

  /**
   * Use a plugin (alias for plugins.use)
   * @param plugin - Plugin instance
   * @param options - Plugin options
   * @returns {this} Bot instance for chaining
   * @example
   * const bot = new Bot('TOKEN');
   * bot.use(new FSMPlugin(), { storage: 'memory' });
   */
  public use(plugin: Plugin, options?: any): this {
    this.plugins.use(plugin, options);
    return this;
  }

  /**
   * Cleanup bot resources
   * @async
   */
  public async cleanup(): Promise<void> {
    await this.stopPolling();
    await this.stopWebhook();
    await this.plugins.cleanup();
  }
}
