from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatBoostMeta(ABCMeta):
    """Metaclass for ChatBoost classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatBoostsFactory.register_chat_boost(new_class)
        return new_class


class ChatBoostsFactory(TypesFactory):
    """Factory for creating ChatBoost instances."""

    CHATBOOSTS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "chat_boost"

    @classmethod
    def register_chat_boost(cls, chat_boost_cls: Type) -> None:
        """Register a new chat_boost handler."""
        instance = chat_boost_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = chat_boost_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.CHATBOOSTS_REGISTRY[name] = chat_boost_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_boost
        trigger_value = obj.boost_id

        # Try to get specific handler first
        handler_cls = cls.CHATBOOSTS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
