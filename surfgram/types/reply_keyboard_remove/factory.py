from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ReplyKeyboardRemoveMeta(ABCMeta):
    """Metaclass for ReplyKeyboardRemove classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ReplyKeyboardRemovesFactory.register_reply_keyboard_remove(new_class)
        return new_class


class ReplyKeyboardRemovesFactory(TypesFactory):
    """Factory for creating ReplyKeyboardRemove instances."""

    REPLYKEYBOARDREMOVES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "reply_keyboard_remove"

    @classmethod
    def register_reply_keyboard_remove(cls, reply_keyboard_remove_cls: Type) -> None:
        """Register a new reply_keyboard_remove handler."""
        instance = reply_keyboard_remove_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = reply_keyboard_remove_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.REPLYKEYBOARDREMOVES_REGISTRY[name] = reply_keyboard_remove_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.reply_keyboard_remove
        trigger_value = obj.remove_keyboard

        # Try to get specific handler first
        handler_cls = cls.REPLYKEYBOARDREMOVES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
