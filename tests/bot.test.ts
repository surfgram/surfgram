import { describe, expect, test, jest, beforeEach, afterEach } from '@jest/globals';
import { Bot } from '../src/core/bot/bot';

const mockLongPollingInstance = {
  start: jest.fn<() => Promise<void>>().mockResolvedValue(undefined),
  stop: jest.fn<() => Promise<void>>().mockResolvedValue(undefined),
  isRunning: jest.fn<() => boolean>().mockReturnValue(false),
  skipUpdates: jest.fn<() => Promise<number>>().mockResolvedValue(100),
};

const mockWebhookReceiverInstance = {
  start: jest.fn<() => Promise<void>>().mockResolvedValue(undefined),
  stop: jest.fn<() => Promise<void>>().mockResolvedValue(undefined),
  isRunning: jest.fn<() => boolean>().mockReturnValue(false),
};

const mockPluginManagerInstance = {
  use: jest.fn(),
  cleanup: jest.fn<() => Promise<void>>().mockResolvedValue(undefined),
};

jest.mock('../src/core/bot/longPolling', () => ({
  LongPolling: jest.fn(() => mockLongPollingInstance),
}));

jest.mock('../src/core/bot/webhookReceiver', () => ({
  WebhookReceiver: jest.fn(() => mockWebhookReceiverInstance),
}));

jest.mock('../src/core/plugin/pluginManager', () => ({
  PluginManager: jest.fn(() => mockPluginManagerInstance),
}));

const mockFetch = jest.fn<typeof fetch>();
(global as any).fetch = mockFetch;

describe('Bot', () => {
  let bot: Bot;
  const mockToken = '12345678901:Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9KkW0_';
  const mockApiUrl = `https://api.telegram.org/bot${mockToken}`;

  const clearMocks = () => {
    mockLongPollingInstance.start.mockClear();
    mockLongPollingInstance.stop.mockClear();
    mockLongPollingInstance.isRunning.mockClear();
    mockLongPollingInstance.skipUpdates.mockClear();
    mockWebhookReceiverInstance.start.mockClear();
    mockWebhookReceiverInstance.stop.mockClear();
    mockWebhookReceiverInstance.isRunning.mockClear();
    mockPluginManagerInstance.use.mockClear();
    mockPluginManagerInstance.cleanup.mockClear();
    mockFetch.mockClear();
  };

  const setupMocks = () => {
    mockLongPollingInstance.start.mockResolvedValue(undefined);
    mockLongPollingInstance.stop.mockResolvedValue(undefined);
    mockLongPollingInstance.isRunning.mockReturnValue(false);
    mockLongPollingInstance.skipUpdates.mockResolvedValue(100);
    mockWebhookReceiverInstance.start.mockResolvedValue(undefined);
    mockWebhookReceiverInstance.stop.mockResolvedValue(undefined);
    mockWebhookReceiverInstance.isRunning.mockReturnValue(false);
    mockPluginManagerInstance.cleanup.mockResolvedValue(undefined);
  };

  beforeEach(() => {
    clearMocks();
    setupMocks();
  });

  afterEach(async () => {
    if (bot) {
      await bot.cleanup();
    }
  });

  describe('constructor', () => {
    test('should create bot with valid token', () => {
      bot = new Bot(mockToken);
      
      expect(bot.token).toBe(mockToken);
      expect(bot.apiUrl).toBe(mockApiUrl);
      expect(bot.handlers).toBeInstanceOf(Map);
      expect(bot.plugins).toBeDefined();
    });

    test('should throw error when token is not provided', () => {
      expect(() => new Bot('')).toThrow('Bot token is required');
    });
  });

  const createBot = () => {
    bot = new Bot(mockToken);
    (bot as any).deleteWebhook = jest.fn<() => Promise<void>>().mockResolvedValue(undefined);
    (bot as any).setWebhook = jest.fn<() => Promise<void>>().mockResolvedValue(undefined);
    return bot;
  };

  describe('callApi', () => {
    const mockMethod = 'getChat';
    const mockParams = { chatId: 123456789 };

    beforeEach(() => {
      createBot();
    });

    test('should call API successfully', async () => {
      const mockResponseData = {
        ok: true,
        result: { id: 123456789, type: 'private' },
      };
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockResponseData,
      } as Response);

      const result = await bot.callApi(mockMethod, mockParams);

      expect(mockFetch).toHaveBeenCalledWith(
        `${mockApiUrl}/${mockMethod}`,
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        })
      );
      expect(result).toEqual({ id: 123456789, type: 'private' });
    });

    test('should handle empty result', async () => {
      const mockResponseData = { ok: true, result: undefined };
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockResponseData,
      } as Response);

      const result = await bot.callApi(mockMethod, mockParams);

      expect(result).toEqual({});
    });

    test('should throw error when API returns not ok', async () => {
      const mockResponseData = {
        ok: false,
        error_code: 404,
        description: 'Not Found',
      };
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockResponseData,
      } as Response);

      await expect(bot.callApi(mockMethod, mockParams)).rejects.toThrow('Not Found');
    });

    test('should throw error on network failure', async () => {
      mockFetch.mockRejectedValue(new Error('Network error'));

      await expect(bot.callApi(mockMethod, mockParams)).rejects.toThrow('Network error');
    });
  });

  describe('dispatch', () => {
    beforeEach(() => {
      createBot();
    });

    test('should call handlers for matching events', async () => {
      const mockMessage = { text: 'Hello', chat: { id: 123 } };
      const mockCallbackQuery = { data: 'test', from: { id: 456 } };
      const mockUpdate = {
        message: mockMessage,
        callbackQuery: mockCallbackQuery,
      } as any;

      const messageHandler = jest.fn();
      const callbackQueryHandler = jest.fn();
      const unrelatedHandler = jest.fn();

      bot.register('message', messageHandler);
      bot.register('callbackQuery', callbackQueryHandler);
      bot.register('inlineQuery', unrelatedHandler);

      await bot.dispatch(mockUpdate);

      expect(messageHandler).toHaveBeenCalledWith(mockMessage);
      expect(callbackQueryHandler).toHaveBeenCalledWith(mockCallbackQuery);
      expect(unrelatedHandler).not.toHaveBeenCalled();
    });

    test('should handle multiple handlers for same event', async () => {
      const mockMessage = { text: 'Hello' };
      const mockUpdate = { message: mockMessage } as any;

      const handler1 = jest.fn();
      const handler2 = jest.fn();

      bot.register('message', handler1);
      bot.register('message', handler2);

      await bot.dispatch(mockUpdate);

      expect(handler1).toHaveBeenCalledWith(mockMessage);
      expect(handler2).toHaveBeenCalledWith(mockMessage);
    });

    test('should handle handler errors gracefully', async () => {
      const mockUpdate = { message: { text: 'Hello' } } as any;
      const handler = jest
        .fn<(message: any) => Promise<void>>()
        .mockRejectedValue(new Error('Handler error'));

      bot.register('message', handler);

      await expect(bot.dispatch(mockUpdate)).resolves.not.toThrow();
    });
  });

  describe('polling', () => {
    beforeEach(() => {
      createBot();
    });

    test('should start polling', async () => {
      await bot.startPolling();

      expect((bot as any).deleteWebhook).toHaveBeenCalled();
      expect(mockLongPollingInstance.start).toHaveBeenCalledWith({});
    });

    test('should start polling with options', async () => {
      const options = {
        timeout: 30,
        limit: 50,
        retryDelay: 1000,
        skipUpdates: true,
      };

      await bot.startPolling(options);

      expect((bot as any).deleteWebhook).toHaveBeenCalled();
      expect(mockLongPollingInstance.start).toHaveBeenCalledWith(options);
    });

    test('should throw error when webhook is active (but still call deleteWebhook)', async () => {
      mockWebhookReceiverInstance.isRunning.mockReturnValue(true);
      (bot as any).webhookReceiver = mockWebhookReceiverInstance;

      await expect(bot.startPolling()).rejects.toThrow(
        'Cannot start polling while webhook is active'
      );

      expect((bot as any).deleteWebhook).toHaveBeenCalled();
      expect(mockLongPollingInstance.start).not.toHaveBeenCalled();
    });

    test('should stop polling', async () => {
      (bot as any).longPolling = mockLongPollingInstance;

      await bot.stopPolling();

      expect(mockLongPollingInstance.stop).toHaveBeenCalled();
    });

    test('should check if polling is running', () => {
      mockLongPollingInstance.isRunning.mockReturnValue(true);
      (bot as any).longPolling = mockLongPollingInstance;

      expect(bot.isPolling()).toBe(true);
    });

    test('should return false when polling is not running', () => {
      expect(bot.isPolling()).toBe(false);
    });
  });

  describe('webhook', () => {
    beforeEach(() => {
      createBot();
    });

    test('should start webhook without calling setWebhook via API', async () => {
      await bot.startWebhook();

      expect((bot as any).setWebhook).not.toHaveBeenCalled();
      expect(mockWebhookReceiverInstance.start).toHaveBeenCalledWith({
        path: '/webhook',
        port: 3000,
        secretToken: undefined,
      });
    });

    test('should start webhook with url and call setWebhook', async () => {
      const webhookUrl = 'https://example.com/webhook';
      const secretToken = 'my-secret-token';

      await bot.startWebhook({
        url: webhookUrl,
        secretToken: secretToken,
      });

      expect((bot as any).setWebhook).toHaveBeenCalledWith({
        url: webhookUrl,
        secretToken: secretToken,
        dropPendingUpdates: false,
      });
      expect(mockWebhookReceiverInstance.start).toHaveBeenCalled();
    });

    test('should start webhook with custom path and port', async () => {
      const customPath = '/custom-webhook';
      const customPort = 8080;

      await bot.startWebhook({
        path: customPath,
        port: customPort,
      });

      expect(mockWebhookReceiverInstance.start).toHaveBeenCalledWith({
        path: customPath,
        port: customPort,
        secretToken: undefined,
      });
    });

    test('should throw error when polling is active', async () => {
      mockLongPollingInstance.isRunning.mockReturnValue(true);
      (bot as any).longPolling = mockLongPollingInstance;

      await expect(bot.startWebhook()).rejects.toThrow(
        'Cannot start webhook while polling is active'
      );
    });

    test('should stop webhook', async () => {
      (bot as any).webhookReceiver = mockWebhookReceiverInstance;

      await bot.stopWebhook();

      expect(mockWebhookReceiverInstance.stop).toHaveBeenCalled();
    });

    test('should check if webhook is running', () => {
      mockWebhookReceiverInstance.isRunning.mockReturnValue(true);
      (bot as any).webhookReceiver = mockWebhookReceiverInstance;

      expect(bot.isWebhook()).toBe(true);
    });

    test('should return false when webhook is not running', () => {
      expect(bot.isWebhook()).toBe(false);
    });
  });

  describe('register', () => {
    beforeEach(() => {
      createBot();
    });

    test('should register handler for event', () => {
      const handler = jest.fn();
      const event = 'message';

      const result = bot.register(event, handler);

      expect(bot.handlers.has(event)).toBe(true);
      expect(bot.handlers.get(event)).toHaveLength(1);
      expect(result).toBe(bot);
    });

    test('should register multiple handlers for same event', () => {
      const handler1 = jest.fn();
      const handler2 = jest.fn();
      const event = 'message';

      bot.register(event, handler1);
      bot.register(event, handler2);

      expect(bot.handlers.get(event)).toHaveLength(2);
      expect(bot.handlers.get(event)).toContainEqual({ handler: handler1 });
      expect(bot.handlers.get(event)).toContainEqual({ handler: handler2 });
    });

    test('should register handler with filter', () => {
      const handler = jest.fn<(data: any) => void>();
      const filter = jest.fn<(data: any) => boolean>().mockReturnValue(true);
      const event = 'message';

      bot.register(event, { handler, filter });

      const handlers = bot.handlers.get(event);
      expect(handlers).toHaveLength(1);
      expect(handlers?.[0]).toEqual({ handler, filter });
    });
  });

  describe('use', () => {
    beforeEach(() => {
      createBot();
    });

    test('should use plugin', () => {
      const mockPlugin = {} as any;
      const options = { option: 'value' };

      const result = bot.use(mockPlugin, options);

      expect(mockPluginManagerInstance.use).toHaveBeenCalledWith(mockPlugin, options);
      expect(result).toBe(bot);
    });
  });

  describe('cleanup', () => {
    beforeEach(() => {
      createBot();
    });

    test('should cleanup all resources', async () => {
      (bot as any).longPolling = mockLongPollingInstance;
      (bot as any).webhookReceiver = mockWebhookReceiverInstance;

      await bot.cleanup();

      expect(mockLongPollingInstance.stop).toHaveBeenCalled();
      expect(mockWebhookReceiverInstance.stop).toHaveBeenCalled();
      expect(mockPluginManagerInstance.cleanup).toHaveBeenCalled();
    });
  });
});