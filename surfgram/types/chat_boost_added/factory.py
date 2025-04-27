from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatBoostAddedMeta(ABCMeta):
    """Metaclass for ChatBoostAdded classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatBoostAddedsFactory.register_chat_boost_added(new_class)
        return new_class


class ChatBoostAddedsFactory(TypesFactory):
    """Factory for creating ChatBoostAdded instances."""

    CHATBOOSTADDEDS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "chat_boost_added"

    @classmethod
    def register_chat_boost_added(cls, chat_boost_added_cls: Type) -> None:
        """Register a new chat_boost_added handler."""
        instance = chat_boost_added_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = chat_boost_added_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.CHATBOOSTADDEDS_REGISTRY[name] = chat_boost_added_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_boost_added
        trigger_value = obj.boost_count

        # Try to get specific handler first
        handler_cls = cls.CHATBOOSTADDEDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
