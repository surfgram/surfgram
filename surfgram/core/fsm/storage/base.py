from typing import Dict, Any, Optional
from abc import ABC, abstractmethod


class BaseStorage(ABC):
    """Abstract base class for storage providers."""

    @abstractmethod
    def get_state(self, chat_id: int) -> Optional[Dict[str, Any]]:
        """Get state data for a chat_id."""
        pass

    @abstractmethod
    def set_state(self, chat_id: int, state_data: Dict[str, Any]) -> None:
        """Set state data for a chat_id."""
        pass

    @abstractmethod
    def delete_state(self, chat_id: int) -> None:
        """Delete state data for a chat_id."""
        pass

    @abstractmethod
    def get_attribute(self, chat_id: int, name: str, default: Any = None) -> Any:
        """Get a specific attribute from a chat's state."""
        pass

    @abstractmethod
    def set_attribute(self, chat_id: int, name: str, value: Any) -> None:
        """Set a specific attribute in a chat's state."""
        pass
