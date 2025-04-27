from typing import Type, TypeVar, Dict, Any, Optional, Callable
from dataclasses import dataclass, field
from abc import ABC, abstractmethod
from .meta import StatesMeta
from .state import State

T = TypeVar("T", bound="States")


class States(metaclass=StatesMeta):
    """
    Base class for state management that tracks states per chat ID.

    Class Attributes:
        _states_storage: Dictionary mapping chat IDs to their current states.
    """

    _states_storage: Dict[int, State] = {}  # chat_id: State

    @classmethod
    def turn(cls: Type[T], state: State, chat_id: int) -> None:
        """
        Set the current state for a chat.

        Args:
            state: The state to set as current.
            chat_id: The chat identifier.
        """
        cls._states_storage[chat_id] = state

    @classmethod
    def get_current(cls: Type[T], chat_id: int) -> Optional[State]:
        """
        Get the current state for a chat.

        Args:
            chat_id: The chat identifier.

        Returns:
            The current state if exists, None otherwise.
        """
        return cls._states_storage.get(chat_id)

    @classmethod
    def reset(cls: Type[T], chat_id: int) -> None:
        """
        Reset (remove) the current state for a chat.

        Args:
            chat_id: The chat identifier.
        """
        cls._states_storage.pop(chat_id, None)

    @classmethod
    def is_current(cls: Type[T], state: State, chat_id: int) -> bool:
        """
        Check if a given state is the current state for a chat.

        Args:
            state: The state to check.
            chat_id: The chat identifier.

        Returns:
            True if the state is current, False otherwise.
        """
        current = cls.get_current(chat_id)
        return current is not None and current is state

    @classmethod
    def received(cls: Type[T], state: State, chat_id: int) -> bool:
        """
        Alias for is_current().

        Args:
            state: The state to check.
            chat_id: The chat identifier.

        Returns:
            True if the state is current, False otherwise.
        """
        return cls.is_current(state, chat_id)

    @classmethod
    def set_attribute(cls: Type[T], chat_id: int, name: str, value: Any) -> None:
        """
        Set an attribute in the current state of a chat.

        Args:
            chat_id: The chat identifier.
            name: The attribute name.
            value: The value to set.
        """
        current = cls.get_current(chat_id)
        if current:
            current.set_attribute(name, value)

    @classmethod
    def get_attribute(
        cls: Type[T], chat_id: int, name: str, default: Any = None
    ) -> Any:
        """
        Get an attribute from the current state of a chat.

        Args:
            chat_id: The chat identifier.
            name: The attribute name.
            default: Default value if attribute doesn't exist.

        Returns:
            The attribute value if found, otherwise the default value.
        """
        current = cls.get_current(chat_id)
        if current:
            return current.get_attribute(name, default)
        return default
