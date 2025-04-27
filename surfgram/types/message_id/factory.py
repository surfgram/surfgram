from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class MessageIdMeta(ABCMeta):
    """Metaclass for MessageId classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            MessageIdsFactory.register_message_id(new_class)
        return new_class


class MessageIdsFactory(TypesFactory):
    """Factory for creating MessageId instances."""

    MESSAGEIDS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "message_id"

    @classmethod
    def register_message_id(cls, message_id_cls: Type) -> None:
        """Register a new message_id handler."""
        instance = message_id_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = message_id_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.MESSAGEIDS_REGISTRY[name] = message_id_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.message_id
        trigger_value = obj.message_id

        # Try to get specific handler first
        handler_cls = cls.MESSAGEIDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
