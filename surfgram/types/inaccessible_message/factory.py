from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InaccessibleMessageMeta(ABCMeta):
    """Metaclass for InaccessibleMessage classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InaccessibleMessagesFactory.register_inaccessible_message(new_class)
        return new_class


class InaccessibleMessagesFactory(TypesFactory):
    """Factory for creating InaccessibleMessage instances."""

    INACCESSIBLEMESSAGES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "inaccessible_message"

    @classmethod
    def register_inaccessible_message(cls, inaccessible_message_cls: Type) -> None:
        """Register a new inaccessible_message handler."""
        instance = inaccessible_message_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = inaccessible_message_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.INACCESSIBLEMESSAGES_REGISTRY[name] = inaccessible_message_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inaccessible_message
        trigger_value = obj.chat

        # Try to get specific handler first
        handler_cls = cls.INACCESSIBLEMESSAGES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
