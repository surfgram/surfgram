# Surfgram

![Surfgram Logo](assets/logo.svg)

## Overview

Surfgram is a no-nonsense SDK for Telegram Bot API designed for developers who want:

- **Strict typing**
- **Fluent interface**
- **Full auto-complete support**

---

## Quick Start

### Install

```bash
npm install surfgram
# or
yarn add surfgram
# or
pnpm add surfgram
```

### Write your first bot

```typescript
import { Bot, Message } from 'surfgram';

const bot = new Bot('TOKEN');

bot.onMessage('/start', (message: Message) => {
  message.sendMessage({ text: 'hi there' });
});

bot.startPolling();
```

---

## Community

We welcome contributions! Please read our:

- [Contributor Guidelines](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)

## License

Surfgram is distributed under the [MIT License](LICENSE).
