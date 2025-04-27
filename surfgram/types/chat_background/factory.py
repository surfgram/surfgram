from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatBackgroundMeta(ABCMeta):
    """Metaclass for ChatBackground classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatBackgroundsFactory.register_chat_background(new_class)
        return new_class


class ChatBackgroundsFactory(TypesFactory):
    """Factory for creating ChatBackground instances."""

    CHATBACKGROUNDS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "chat_background"

    @classmethod
    def register_chat_background(cls, chat_background_cls: Type) -> None:
        """Register a new chat_background handler."""
        instance = chat_background_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = chat_background_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.CHATBACKGROUNDS_REGISTRY[name] = chat_background_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_background
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.CHATBACKGROUNDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
