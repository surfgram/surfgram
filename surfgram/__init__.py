"""
Surfgram is a modern Telegram Bot API wrapper for Python.
"""

import asyncio
from typing import List

try:
    import uvloop

    asyncio.set_event_loop(uvloop.new_event_loop())
except ModuleNotFoundError:
    pass


__all__: List[str] = [
    "debugger",
    "listeners",
    "configs",
    "APIObject",
    "Bot",
    "types",
    "markup",
    "fsm",
]

__version__: str = "0.7.3"
__author__: str = "anybody"
__email__: str = "help.surfgram@gmail.com"
__license__: str = "MIT"

from surfgram_cli.utils import debugger
from surfgram_cli import *

from .core import listeners
from .core.helpers import markup
from .core.structures import configs, APIObject
from .core.bot import Bot
from .core import fsm
from .types import *
