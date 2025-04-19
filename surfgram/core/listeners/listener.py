from surfgram.core.structures import APIObject
from abc import ABC, abstractmethod


class Listener(ABC):
    """
    Interface for handling updates received from a bot.

    This abstract base class defines the contract for handling updates.
    Subclasses must implement the `on_update` method to process incoming updates.
    """

    @abstractmethod
    async def on_update(self, update: APIObject) -> None:
        """
        Handle an incoming update.

        Args:
            update (APIObject): The incoming update to process.
        """
        pass
