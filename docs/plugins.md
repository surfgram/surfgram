## Plugins

### What are Plugins?

Plugins are modular extensions that add functionality to your bot. They can:

- Add new methods to Bot instance
- Register middleware
- Handle specific types of updates

### Using Plugins

```typescript
import { Bot } from 'surfgram/bot';
import { FSMPlugin } from 'surfgram-fsm';

const bot = new Bot('YOUR_TOKEN');

bot.use(new FSMPlugin(), {
  storage: 'memory',
  ttl: 3600,
});
```

<details>
<summary><strong>What's going on here?</strong></summary>

**Line-by-line explanation:**

### Using Plugins

1. **`import { FSMPlugin } from 'surfgram-fsm';`**

   Importing an external plugin (e.g., Finite State Machine) to extend bot capabilities

2. **`bot.use(new FSMPlugin(), { ... });`**
   The `use` method registers the plugin. The second argument passes a configuration object (storage type, timeout, etc.) to the plugin's `install` method.
   </details>

### Creating Custom Plugins

```typescript
import { Plugin } from 'surfgram/plugin';

export class MyPlugin implements Plugin {
  name = 'myPlugin';
  version = '1.0.0';

  install(bot: Bot, options?: any) {
    bot.myCustomMethod = this.myCustomMethod.bind(this);

    bot.register('message', this.handleMessage.bind(this));

    this.bot = bot;
    this.options = options;
  }

  private async handleMessage(message: any) {
    console.log('Plugin handling message:', message.text);
  }

  private async myCustomMethod(param: string) {
    return `Plugin method called with: ${param}`;
  }

  async cleanup() {
    console.log('Cleaning up plugin');
  }
}

declare module 'surfgram/bot' {
  interface Bot {
    myCustomMethod(param: string): Promise<string>;
  }
}
```

<details>
<summary><strong>What's going on here?</strong></summary>

1. **`export class MyPlugin implements Plugin`**

   Your custom plugin must implement the `Plugin` interface, requiring a `name`, `version`, and `install` method.

2. **`install(bot: Bot, options?: any) { ... }`**
   This is the heart of the plugin. It runs when `bot.use()` is called. Here you can attach new methods to the `bot` instance or register global event listeners.
3. **`bot.register('message', ...)`**

   Plugins can hook into the bot's internal event system to process updates before or alongside your main code.

4. **`async cleanup() { ... }`**

   This method is called when the bot shuts down, allowing you to close database connections or clear timers.

5. **`declare module 'surfgram/bot' { ... }`**

   This is a **TypeScript Module Augmentation**. It tells the compiler that the `Bot` class now has your new method (`myCustomMethod`), enabling Autocomplete and Type Checking in your IDE.

</details>
