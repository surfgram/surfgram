from typing import Optional


class BaseConfig:
    """
    Base configuration class for a Telegram bot.

    This class holds the configuration settings required
    for initializing the Telegram bot, including the bot token
    and any listener settings for handling incoming updates.
    """

    __bot_token__ = None
    __listener__ = None

    @classmethod
    def get_token(cls) -> str:
        """
        Retrieve the bot token.

        Returns the token string needed for authenticating
        the Telegram bot.

        Returns:
            str: The bot token.
        """
        return cls.__bot_token__

    @classmethod
    def get_listener(cls) -> Optional["Listener"]:
        """
        Retrieve the listener for the Telegram bot.

        This method returns an optional listener object that can
        be used to handle incoming messages or events. If no listener
        is set, it will return None.

        Returns:
            Optional[Listener]: The listener object or None if not set.
        """
        return cls.__listener__
