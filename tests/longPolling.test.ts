import { describe, expect, test, jest, beforeEach, afterEach } from '@jest/globals';
import { LongPolling } from '../src/core/bot/longPolling';
import { Bot } from '../src/core/bot/bot';

const createMockBot = () => ({
  token: 'test-token',
  apiUrl: 'https://api.telegram.org/bot',
  dispatch: jest.fn<() => Promise<void>>().mockResolvedValue(undefined),
});

const mockFetch = jest.fn<typeof fetch>();
(global as any).fetch = mockFetch;

class MockAbortSignal {
  aborted = false;
  reason: any = undefined;
  onabort: ((this: AbortSignal, ev: Event) => any) | null = null;

  addEventListener = jest.fn();
  removeEventListener = jest.fn();
  dispatchEvent = jest.fn().mockReturnValue(true);
  throwIfAborted = jest.fn();

  [Symbol.toStringTag] = 'AbortSignal';
}

describe('LongPolling', () => {
  let longPolling: LongPolling;
  let bot: Bot;
  let mockBotInstance: ReturnType<typeof createMockBot>;

  beforeEach(() => {
    mockBotInstance = createMockBot();

    bot = {
      token: 'test-token',
      apiUrl: 'https://api.telegram.org/bot',
      dispatch: mockBotInstance.dispatch,
    } as unknown as Bot;

    longPolling = new LongPolling(bot);

    const mockSignal = new MockAbortSignal() as any;

    (global as any).AbortController = jest.fn(() => ({
      abort: jest.fn(),
      signal: mockSignal,
    }));

    (global as any).AbortSignal = {
      any: jest.fn((signals: any[]) => {
        return new MockAbortSignal() as any;
      }),
    };

    jest.useFakeTimers();

    mockFetch.mockClear();
    mockBotInstance.dispatch.mockClear();
  });

  afterEach(async () => {
    jest.useRealTimers();
    await longPolling.stop();
  });

  describe('constructor', () => {
    test('should create LongPolling instance with bot', () => {
      expect(longPolling).toBeInstanceOf(LongPolling);
      expect((longPolling as any).bot).toBe(bot);
      expect((longPolling as any).isActive).toBe(false);
      expect((longPolling as any).offset).toBe(0);
    });
  });

  describe('start', () => {
    test('should start polling successfully', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true, result: [] }),
      } as Response);

      const startPromise = longPolling.start();

      jest.advanceTimersByTime(100);
      await Promise.resolve();

      expect((longPolling as any).isActive).toBe(true);

      await longPolling.stop();
    });

    test('should start with custom options', async () => {
      const options = {
        timeout: 30,
        limit: 50,
        retryDelay: 1000,
        skipUpdates: true,
      };

      const skipSpy = jest.spyOn(longPolling as any, 'skipUpdates').mockResolvedValue(0);

      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true, result: [] }),
      } as Response);

      const startPromise = longPolling.start(options);

      jest.advanceTimersByTime(100);
      await Promise.resolve();

      expect((longPolling as any).timeout).toBe(30);
      expect((longPolling as any).limit).toBe(50);
      expect((longPolling as any).retryDelay).toBe(1000);
      expect(skipSpy).toHaveBeenCalledWith(true);

      skipSpy.mockRestore();

      await longPolling.stop();
    });

    test('should throw error when already active', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true, result: [] }),
      } as Response);

      const startPromise = longPolling.start();

      jest.advanceTimersByTime(100);
      await Promise.resolve();

      await expect(longPolling.start()).rejects.toThrow('LongPolling is already active');

      await longPolling.stop();
    });
  });

  describe('skipUpdates', () => {
    test('should skip all updates when true', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true, result: [{ update_id: 100 }] }),
      } as Response);

      const offset = await longPolling.skipUpdates(true);

      expect(offset).toBe(101);

      expect(mockFetch).toHaveBeenCalledWith(
        `${bot.apiUrl}/getUpdates`,
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        })
      );
    });

    test('should use provided offset when number', async () => {
      const offset = await longPolling.skipUpdates(150);

      expect(offset).toBe(150);
      expect((longPolling as any).offset).toBe(150);
      expect(mockFetch).not.toHaveBeenCalled();
    });

    test('should handle empty updates', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true, result: [] }),
      } as Response);

      const offset = await longPolling.skipUpdates(true);

      expect(offset).toBe(0);
    });

    test('should handle API errors gracefully', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      const offset = await longPolling.skipUpdates(true);

      expect(offset).toBe(0);
    });
  });

  describe('stop', () => {
    test('should stop polling gracefully', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true, result: [] }),
      } as Response);

      const startPromise = longPolling.start();

      jest.advanceTimersByTime(100);
      await Promise.resolve();

      expect(longPolling.isRunning()).toBe(true);

      await longPolling.stop();

      expect(longPolling.isRunning()).toBe(false);
      expect((longPolling as any).isActive).toBe(false);
    });

    test('should abort pending requests', async () => {
      const abortMock = jest.fn();
      const mockController = {
        abort: abortMock,
        signal: new MockAbortSignal() as any,
      };

      (longPolling as any).abortController = mockController;
      (longPolling as any).isActive = true;

      await longPolling.stop();

      expect(abortMock).toHaveBeenCalled();
      expect((longPolling as any).abortController).toBeNull();
    });

    test('should do nothing when already stopped', async () => {
      await longPolling.stop();
      expect(longPolling.isRunning()).toBe(false);
    });
  });

  describe('isRunning', () => {
    test('should return true when polling is active', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true, result: [] }),
      } as Response);

      const startPromise = longPolling.start();

      jest.advanceTimersByTime(100);
      await Promise.resolve();

      expect(longPolling.isRunning()).toBe(true);

      await longPolling.stop();
    });

    test('should return false when polling is not active', () => {
      expect(longPolling.isRunning()).toBe(false);
    });
  });
});
