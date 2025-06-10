<div align="center" style="max-width: 100%; overflow-x: auto; margin: 0 auto;">
  <div style="text-align: center; padding: 0 10px; width: 100%;">
    <h1 style="font-size: clamp(24px, 5vw, 36px); margin: 0 auto;">Surfgram</h1>
  </div>

  <div style="display: flex; justify-content: center; margin: 20px auto; width: 100%;">
    <img src="./assets/surfgram_logo.svg" alt="Surfgram Logo" style="max-width: 100%; height: auto; display: block;">
  </div>

  <div style="text-align: center; margin: 20px auto; width: 100%;">
    <div style="display: inline-flex; flex-wrap: wrap; justify-content: center; gap: 8px;">
      <img src="https://img.shields.io/pypi/v/surfgram?color=blue&label=Latest%20Version" alt="PyPI Version">
      <img src="https://img.shields.io/badge/Python-3.8%2B-blue" alt="Python 3.8+">
      <img src="https://img.shields.io/badge/Telegram%20Bot%20API-9.0+-blue" alt="Telegram Bot API 9.0+">
      <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License">
    </div>
  </div>
</div>

## Overview

Surfgram is a high-level, object-oriented framework for building scalable Telegram bots with minimal boilerplate. It's designed for developers who want a clean architecture without sacrificing flexibility.

## Key Features

- ✅ Pure OOP – Classes and dependency injection
- ✅ Fast Setup – Get a bot running in 1 command in terminal
- ✅ Extensible – Add custom handlers, filters, and integrations
- ✅ Async-Ready – Built with asyncio for high performance
- ✅ Full support for Telegram Bot API 9.0+

## Quick Start

1. Install using PIP:

    ```bash
    pip install surfgram
    ```

2. Create your first bot:

    ```bash
    surfgram new mybot
    cd mybot
    surfgram run
    ```

## Example bot's handler
```python
from surfgram import APIObject, Bot
from surfgram.types import BotCommand
from typing import Callable, List

class StartCommand(BotCommand):
    @property
    def __names__(self) -> List[str]:
        return ["start"]

    @property
    def __callback__(self) -> Callable:
        return self.handle

    async def handle(
        self,
        update: APIObject,
        bot: Bot
    ) -> None:
        await bot.send_message(
            chat_id=update.message.chat.id,
            text="Hello, world!"
        )
```

## Documentation

📖 [Full documentation](https://github.com/surfgram/surfgram-docs)  
📚 [Examples](https://github.com/surfgram/surfgram-examples)

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](https://github.com/surfgram/surfgram/blob/main/CONTRIBUTING.md) for more information on how to get started.

## Support

🐞 [Report a bug](https://github.com/surfgram/surfgram/issues)  
💡 [Start a discussion](https://github.com/surfgram/surfgram/discussions)  
📮 [Join our Telegram Channel](https://t.me/the_surfgram)

## License

MIT License. See [LICENSE](https://github.com/surfgram/surfgram/blob/main/LICENSE) for more details.
