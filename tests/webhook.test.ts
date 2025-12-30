import { describe, expect, test, jest } from '@jest/globals';
import { WebhookReceiver } from '../src/core/bot/webhookReceiver';
import { Bot } from '../src/core/bot/bot';

const mockHttpServer: any = {
  listen: jest.fn(),
  close: jest.fn((callback: () => void) => callback()),
  on: jest.fn(),
};

const mockHttp = {
  createServer: jest.fn((listener?: any) => {
    if (listener) {
      mockHttpServer.listener = listener;
    }
    return mockHttpServer;
  }),
};

jest.mock('http', () => mockHttp);

jest.mock('../src/core/utils', () => ({
  snakeToCamel: jest.fn((data: any) => data),
}));

describe('WebhookReceiver', () => {
  let webhookReceiver: WebhookReceiver;
  let mockBot: Bot;

  beforeEach(() => {
    jest.clearAllMocks();
    mockBot = {
      dispatch: jest.fn<Bot['dispatch']>().mockResolvedValue(undefined),
    } as unknown as Bot;
    webhookReceiver = new WebhookReceiver(mockBot);
  });

  describe('constructor', () => {
    test('should create WebhookReceiver with bot instance', () => {
      expect(webhookReceiver).toBeInstanceOf(WebhookReceiver);
    });
  });

  describe('start', () => {
    test('should start webhook server with default options', async () => {
      await webhookReceiver.start();

      expect(mockHttp.createServer).toHaveBeenCalled();
      expect(mockHttpServer.listen).toHaveBeenCalledWith(3000);
      expect(webhookReceiver.isRunning()).toBe(true);
    });

    test('should start webhook server with custom options', async () => {
      const options = {
        path: '/custom-webhook',
        port: 8080,
        secretToken: 'my-secret-token',
      };

      await webhookReceiver.start(options);

      expect(mockHttp.createServer).toHaveBeenCalled();
      expect(mockHttpServer.listen).toHaveBeenCalledWith(8080);
      expect(webhookReceiver.isRunning()).toBe(true);
    });

    test('should setup route on existing server', async () => {
      const mockServer = {
        post: jest.fn(),
      };

      await webhookReceiver.start({ server: mockServer });

      expect(mockServer.post).toHaveBeenCalledWith('/webhook', expect.any(Function));
      expect(mockHttp.createServer).not.toHaveBeenCalled();
      expect(webhookReceiver.isRunning()).toBe(true);
    });

    test('should throw error when already active', async () => {
      await webhookReceiver.start();

      await expect(webhookReceiver.start()).rejects.toThrow('WebhookReceiver is already active');
    });
  });

  describe('request handling', () => {
    const createMockRequest = (method: string, url: string, headers: any = {}, body?: any) => ({
      method,
      url,
      headers,
      body,
    });

    const createMockResponse = () => ({
      writeHead: jest.fn(),
      end: jest.fn(),
    });

    test('should setup server route correctly', async () => {
      await webhookReceiver.start();

      const mockReq = createMockRequest('POST', '/webhook');
      const mockRes = createMockResponse();

      if (mockHttpServer.listener) {
        mockHttpServer.listener(mockReq, mockRes);
      }

      expect(mockRes.writeHead).toHaveBeenCalledWith(200, {
        'Content-Type': 'application/json',
      });
      expect(mockRes.end).toHaveBeenCalledWith(JSON.stringify({ ok: true }));
    });

    test('should verify secret token when provided', async () => {
      await webhookReceiver.start({ secretToken: 'my-secret' });

      const mockReq = createMockRequest('POST', '/webhook', {
        'x-telegram-bot-api-secret-token': 'wrong-token',
      });
      const mockRes = createMockResponse();

      if (mockHttpServer.listener) {
        mockHttpServer.listener(mockReq, mockRes);
      }

      expect(mockRes.writeHead).toHaveBeenCalledWith(403);
      expect(mockRes.end).toHaveBeenCalled();
      expect(mockBot.dispatch).not.toHaveBeenCalled();
    });
  });

  describe('stop', () => {
    test('should stop webhook server gracefully', async () => {
      await webhookReceiver.start();
      expect(webhookReceiver.isRunning()).toBe(true);

      await webhookReceiver.stop();

      expect(mockHttpServer.close).toHaveBeenCalled();
      expect(webhookReceiver.isRunning()).toBe(false);
    });

    test('should do nothing when not running', async () => {
      expect(webhookReceiver.isRunning()).toBe(false);

      await webhookReceiver.stop();

      expect(mockHttpServer.close).not.toHaveBeenCalled();
      expect(webhookReceiver.isRunning()).toBe(false);
    });
  });

  describe('isRunning', () => {
    test('should return true when server is active', async () => {
      await webhookReceiver.start();
      expect(webhookReceiver.isRunning()).toBe(true);
    });

    test('should return false when server is not active', () => {
      expect(webhookReceiver.isRunning()).toBe(false);
    });

    test('should return false after stopping server', async () => {
      await webhookReceiver.start();
      expect(webhookReceiver.isRunning()).toBe(true);

      await webhookReceiver.stop();
      expect(webhookReceiver.isRunning()).toBe(false);
    });
  });
});
