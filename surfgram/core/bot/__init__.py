from surfgram_cli.utils import debugger
from surfgram_cli.enums import LevelsEnum
from surfgram.core.structures import APIObject
from surfgram.core.validator import Token
from surfgram.core.helpers import CamelCaseConverter
from surfgram.exceptions import BotError
from surfgram_internal import NativeClient
import asyncio
from typing import Dict, Optional, Any, Callable, Type
from json import dumps, loads


class Bot:
    """
    A class representing a Telegram bot.

    This class handles communication with the Telegram Bot API,
    managing requests, and processing updates.  It uses a configuration
    object to obtain the bot's token and listener class.
    """

    def __init__(self, config: Type["BaseConfig"], debug_mode=False) -> None:
        """
        Initializes the Bot instance.

        Args:
            config: An instance of a configuration class (e.g., BaseConfig)
                    providing the bot's token and listener class.
            debug_mode: A boolean to enable/disable debug mode.  Currently unused in this
                      implementation, but included for potential future use.
        """
        token = config.get_token()
        self.token = Token(token)
        listener_class = config.get_listener()
        self.listener = listener_class()
        self._converter = CamelCaseConverter()
        self.client = NativeClient(token)
        debugger.log("Bot started!", LevelsEnum.INFO)

    async def _make_request(
        self,
        method_name: str,
        params: Dict[str, Any],
        update: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        """
        Makes a request to the Telegram Bot API.

        This is an internal method used to send API requests.  It constructs
        the URL, sends the request, handles responses, and optionally
        passes updates to the listener.

        Args:
            method_name: The name of the API method to call (e.g., "sendMessage").
            params: A dictionary of parameters to send with the request.
            update: An optional dictionary representing an update received from
                    the API.  If provided, it's passed to the listener.

        Returns:
            A dictionary containing the API response, or an empty dictionary
            if an error occurred.
        """
        converted_name = self._converter.convert(method_name)
        debugger.log(f"Executing {converted_name}({params})...", LevelsEnum.API)

        try:
            dumped_params = dumps(params)
            
            response_json = await self.client.send_request(converted_name, dumped_params)
            
            if update is not None:
                api_object = APIObject(update)
                await self.listener.on_update(api_object)
            
            return loads(response_json)
            
        except Exception as e:
            debugger.log(f"Request failed: {str(e)}", LevelsEnum.ERROR)
            return {}

    def __getattr__(self, method_name: str) -> Callable:
        """
        Handles dynamic method calls to the Telegram Bot API.

        This method allows you to call Telegram Bot API methods
        directly as methods of the `Bot` object (e.g., `bot.sendMessage()`).
        It dynamically creates a method handler for each API method name.

        Args:
            method_name: The name of the API method to be called.

        Returns:
            A callable function that makes the API request when called.
        """

        async def method_handler(**kwargs: Any) -> Dict[str, Any]:
            """
            A wrapper function to handle API calls.

            This function takes keyword arguments that are passed as parameters
            in the API request.
            """
            return await self._make_request(method_name, kwargs)

        return method_handler

    def listen(self) -> None:
        """
        Starts listening for updates from the Telegram Bot API.

        This method creates an event loop and starts the listener's
        `listen` method, which handles receiving and processing
        incoming updates.
        """
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        try:
            loop.run_until_complete(self.listener.listen(self))
        finally:
            loop.close()
