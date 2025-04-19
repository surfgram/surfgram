from surfgram.core.structures import APIObject
from surfgram.core.listeners import Listener
from surfgram.core.bot import Bot
from surfgram.types import TypesFactory
from surfgram_cli import debugger  # globally defined
from surfgram_cli.enums import LevelsEnum

from typing import List, Dict, Any


class BaseListener(Listener):
    """
    Base class for listening to updates from a bot.

    This class manages the process of listening for updates and handling them
    via the `on_update` method. It supports configuration options for
    offset and timeout.

    Attributes:
        offset (int): The update offset to start fetching updates from.
        timeout (int): The timeout for the bot's update fetching operation.
    """

    def __init__(self, offset: int = 0, timeout: int = 30):
        """
        Initialize a BaseListener instance.

        Args:
            offset (int, optional): The starting point for fetching updates. Defaults to 0.
            timeout (int, optional): The timeout in seconds for fetching updates. Defaults to 30.
        """
        self.offset = offset
        self.timeout = timeout

    async def listen(self, bot: Bot) -> None:
        """
        Continuously listen for updates from the bot and process them.

        This method runs indefinitely, fetching updates from the bot and
        invoking the `on_update` method for each update.

        Args:
            bot (Bot): The Bot instance to fetch updates from.
        """
        while True:
            updates = await self._get_updates(bot)
            for update in updates:
                api_object = APIObject(update)
                await self.on_update(api_object, bot)
                self.offset = update["update_id"] + 1

    async def on_update(self, update: APIObject, bot: Bot) -> None:
        """
        Handle an incoming update and process it through the corresponding executable.

        This method logs the received update and invokes the appropriate handler
        for the update.

        Args:
            update (APIObject): The incoming update to process.
            bot (Bot): The Bot instance for further processing.
        """
        debugger.log(f"Update received: {update}", LevelsEnum.API)
        executable_class = TypesFactory.get_instance(update)
        if executable_class:
            executable_instance = await executable_class.create(update)
            if executable_instance:
                callback = executable_instance.__callback__
                await callback(update, bot)

    async def _get_updates(self, bot: Bot) -> List[Dict[str, Any]]:
        """
        Fetch updates from the bot with the specified offset and timeout.

        Args:
            bot (Bot): The Bot instance to fetch updates from.

        Returns:
            List[Dict[str, Any]]: A list of update dictionaries received from the bot.
        """
        response = await bot.get_updates(timeout=self.timeout, offset=self.offset)
        return response.get("result", [])
