/**
 * Fluent API events module for Surfgram Telegram Bot SDK
 * @module fluent/events
 * @description Provides event handling and type method implementations
 * for the fluent API system.
 * @see {@link https://core.telegram.org/bots/api Telegram Bot API Documentation}
 */

import { Bot } from '../../core/bot';
import * as Interfaces from '../interfaces';
import { keyExists, valueExists } from '../../core/utils';

(Bot.prototype as any).on = function(
  event: string,
  ...args: any[]
): any {
  if (args.length === 1) {
    // on(event, handler)
    const handler = args[0];
    this.register(event, async (raw: any) => {
      await handler(raw);
    });
    return this;
  } else if (args.length === 2) {
    // on(event, filter, handler)
    const [filter, handler] = args;
    
    if (typeof filter === 'string') {
      this.register(event, {
        filter: (raw: any) => valueExists(raw, filter),
        handler: async (raw: any) => {
          await handler(raw);
        }
      });
    } else if (typeof filter === 'function') {
      this.register(event, async (raw: any) => {
        if (filter(raw)) {
          await handler(raw);
        }
      });
    }
    return this;
  }
  
  throw new Error('Invalid arguments for on() method');
};


