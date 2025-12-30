import { describe, expect, test, jest } from '@jest/globals';
import { PluginManager } from '../src/core/plugin/pluginManager';
import { Bot } from '../src/core/bot/bot';
import { Plugin } from '../src/core/plugin/plugin';

describe('PluginManager', () => {
  let pluginManager: PluginManager;
  let mockBot: Bot;

  const mockPlugin1 = {
    name: 'test-plugin-1',
    install: jest.fn<Plugin['install']>().mockReturnValue(undefined),
    cleanup: jest.fn<() => Promise<void>>().mockResolvedValue(undefined),
  };

  const mockPlugin2 = {
    name: 'test-plugin-2',
    install: jest.fn<Plugin['install']>().mockReturnValue(undefined),
    cleanup: jest.fn<() => Promise<void>>().mockResolvedValue(undefined),
  };

  const mockPluginWithAsyncInstall = {
    name: 'async-plugin',
    install: jest.fn<() => Promise<void>>().mockResolvedValue(undefined),
    cleanup: jest.fn<() => Promise<void>>().mockResolvedValue(undefined),
  };

  const mockPluginWithInstallError = {
    name: 'error-plugin',
    install: jest.fn<Plugin['install']>().mockImplementation(() => {
      throw new Error('Installation failed');
    }),
  };

  const mockPluginWithCleanupError = {
    name: 'cleanup-error-plugin',
    install: jest.fn<Plugin['install']>().mockReturnValue(undefined),
    cleanup: jest.fn<() => Promise<void>>().mockRejectedValue(new Error('Cleanup failed')),
  };

  beforeEach(() => {
    mockBot = {} as Bot;
    pluginManager = new PluginManager(mockBot);

    mockPlugin1.install.mockClear();
    mockPlugin1.cleanup.mockClear();
    mockPlugin2.install.mockClear();
    mockPlugin2.cleanup.mockClear();
    mockPluginWithAsyncInstall.install.mockClear();
    mockPluginWithInstallError.install.mockClear();
    mockPluginWithCleanupError.install.mockClear();
    mockPluginWithCleanupError.cleanup.mockClear();
  });

  describe('constructor', () => {
    test('should create PluginManager with bot instance', () => {
      expect(pluginManager).toBeInstanceOf(PluginManager);
    });
  });

  describe('use', () => {
    test('should register plugin successfully', () => {
      const options = { config: 'test' };

      const result = pluginManager.use(mockPlugin1, options);

      expect(mockPlugin1.install).toHaveBeenCalledWith(mockBot, options);
      expect(pluginManager.has(mockPlugin1.name)).toBe(true);
      expect(result).toBe(pluginManager);
    });

    test('should handle async plugin installation', () => {
      const options = { async: true };

      pluginManager.use(mockPluginWithAsyncInstall, options);

      expect(mockPluginWithAsyncInstall.install).toHaveBeenCalledWith(mockBot, options);
      expect(pluginManager.has(mockPluginWithAsyncInstall.name)).toBe(true);
    });

    test('should throw error when plugin is already registered', () => {
      pluginManager.use(mockPlugin1);

      expect(() => pluginManager.use(mockPlugin1)).toThrow(
        `Plugin "${mockPlugin1.name}" is already registered`
      );
    });

    test('should allow registering multiple different plugins', () => {
      pluginManager.use(mockPlugin1);
      pluginManager.use(mockPlugin2);

      expect(pluginManager.has(mockPlugin1.name)).toBe(true);
      expect(pluginManager.has(mockPlugin2.name)).toBe(true);
      expect(mockPlugin1.install).toHaveBeenCalled();
      expect(mockPlugin2.install).toHaveBeenCalled();
    });
  });

  describe('get', () => {
    test('should return plugin by name', () => {
      pluginManager.use(mockPlugin1);

      const plugin = pluginManager.get(mockPlugin1.name);

      expect(plugin).toBe(mockPlugin1);
    });

    test('should return undefined for non-existent plugin', () => {
      const plugin = pluginManager.get('non-existent');

      expect(plugin).toBeUndefined();
    });

    test('should return typed plugin', () => {
      pluginManager.use(mockPlugin1);

      const plugin = pluginManager.get<typeof mockPlugin1>(mockPlugin1.name);

      expect(plugin).toBe(mockPlugin1);
    });
  });

  describe('has', () => {
    test('should return true for registered plugin', () => {
      pluginManager.use(mockPlugin1);

      const exists = pluginManager.has(mockPlugin1.name);

      expect(exists).toBe(true);
    });

    test('should return false for non-registered plugin', () => {
      const exists = pluginManager.has('non-existent');

      expect(exists).toBe(false);
    });

    test('should check plugin existence after registration', () => {
      expect(pluginManager.has(mockPlugin1.name)).toBe(false);

      pluginManager.use(mockPlugin1);

      expect(pluginManager.has(mockPlugin1.name)).toBe(true);
    });
  });

  describe('cleanup', () => {
    test('should cleanup all plugins', async () => {
      pluginManager.use(mockPlugin1);
      pluginManager.use(mockPlugin2);

      await pluginManager.cleanup();

      expect(mockPlugin1.cleanup).toHaveBeenCalled();
      expect(mockPlugin2.cleanup).toHaveBeenCalled();
      expect(pluginManager.has(mockPlugin1.name)).toBe(false);
      expect(pluginManager.has(mockPlugin2.name)).toBe(false);
    });

    test('should clear plugins map after cleanup', async () => {
      pluginManager.use(mockPlugin1);
      pluginManager.use(mockPlugin2);

      expect(pluginManager.has(mockPlugin1.name)).toBe(true);
      expect(pluginManager.has(mockPlugin2.name)).toBe(true);

      await pluginManager.cleanup();

      expect(pluginManager.has(mockPlugin1.name)).toBe(false);
      expect(pluginManager.has(mockPlugin2.name)).toBe(false);
    });

    test('should work when no plugins are registered', async () => {
      await expect(pluginManager.cleanup()).resolves.not.toThrow();
    });
  });
});
