from typing import Type, TypeVar, Dict, Any, Optional
from abc import ABC, abstractmethod
from .storage import BaseStorage, InMemoryStorage
from .state import State
from .meta import StatesMeta

T = TypeVar("T", bound="States")


class States(metaclass=StatesMeta):
    """
    Base class for state management with __provider__ configuration.
    Defaults to InMemoryStorage if no provider is specified.
    """

    __provider__: Type[BaseStorage] = InMemoryStorage
    _storage_instances: Dict[type, BaseStorage] = {}

    @classmethod
    def _get_storage(cls) -> BaseStorage:
        """Get or create the storage instance for this class."""
        if cls not in cls._storage_instances:
            cls._storage_instances[cls] = cls.__provider__()
        return cls._storage_instances[cls]

    @classmethod
    def turn(cls: Type[T], state: State, chat_id: int) -> None:
        """Set the current state for a chat."""
        cls._get_storage().set_state(
            chat_id, {"_current_state": state.name, **state.attributes}
        )

    @classmethod
    def get_current(cls: Type[T], chat_id: int) -> Optional[State]:
        """Get the current state for a chat."""
        state_data = cls._get_storage().get_state(chat_id)
        if not state_data:
            return None

        state_name = state_data.get("_current_state")
        if not state_name:
            return None

        for name, value in cls.__dict__.items():
            if isinstance(value, State) and value.name == state_name:
                value.attributes = {
                    k: v for k, v in state_data.items() if k != "_current_state"
                }
                return value
        return None

    @classmethod
    def reset(cls: Type[T], chat_id: int) -> None:
        """Reset (remove) the current state for a chat."""
        cls._get_storage().delete_state(chat_id)

    @classmethod
    def is_current(cls: Type[T], state: State, chat_id: int) -> bool:
        """Check if a given state is the current state for a chat."""
        current = cls.get_current(chat_id)
        return current is not None and current is state

    @classmethod
    def received(cls: Type[T], state: State, chat_id: int) -> bool:
        """Alias for is_current()."""
        return cls.is_current(state, chat_id)

    @classmethod
    def set_attribute(cls: Type[T], chat_id: int, name: str, value: Any) -> None:
        """Set an attribute in the current state."""
        cls._get_storage().set_attribute(chat_id, name, value)

    @classmethod
    def get_attribute(
        cls: Type[T], chat_id: int, name: str, default: Any = None
    ) -> Any:
        """Get an attribute from the current state."""
        return cls._get_storage().get_attribute(chat_id, name, default)
