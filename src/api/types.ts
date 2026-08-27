/**
 * Type declarations module for Surfgram Telegram Bot SDK
 * @module types
 * @description This module contains type declarations that extend the Bot class
 * and Telegram API types with fluent API methods.
 * @see {@link https://core.telegram.org/bots/api Telegram Bot API Documentation}
 */

import { Bot } from '../core/bot';
import * as Interfaces from './interfaces';

/**
 * Declaration merging for Bot class
 * @namespace BotExtensions
 * @see {@link https://core.telegram.org/bots/api Telegram Bot API Documentation}
 */
declare module '../core/bot' {
  interface Bot {

    // Strongly typed event handlers with filtering

    // Generic handlers

    /**
     * Generic handler for any event (weakly typed)
     * @param event - Event name as string
     * @param handler - Async function to handle the event
     * @returns {this} Bot instance for chaining
     * @see {@link https://core.telegram.org/bots/api#getting-updates Telegram Bot API}
     */
    on(event: string, handler: (data: any) => void | Promise<void>): this;
    
    /**
     * Generic handler for any event with filtering
     * @param event - Event name as string
     * @param filter - Filter string or function
     * @param handler - Async function to handle filtered events
     * @returns {this} Bot instance for chaining
     * @see {@link https://core.telegram.org/bots/api#getting-updates Telegram Bot API}
     */
    on(event: string, filter: string | ((data: any) => boolean), handler: (data: any) => void | Promise<void>): this;
  }
}

// Fluent Extensions for Types
