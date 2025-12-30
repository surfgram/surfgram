## Core Concepts

### Bot Instance

The main entry point is the `Bot` class which handles all interactions with Telegram Bot API

### Updates

Telegram sends updates to your bot containing events like messages, button clicks, etc. The Surfgram SDK automatically processes these updates and dispatches them to your handlers

### Handlers

Functions that are called when specific events occur. You register handlers for different update types

### Plugins

Extend bot functionality with modular plugins for features like state management, session handling, etc
