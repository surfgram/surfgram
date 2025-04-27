from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PreparedInlineMessageMeta(ABCMeta):
    """Metaclass for PreparedInlineMessage classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PreparedInlineMessagesFactory.register_prepared_inline_message(new_class)
        return new_class


class PreparedInlineMessagesFactory(TypesFactory):
    """Factory for creating PreparedInlineMessage instances."""

    PREPAREDINLINEMESSAGES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "prepared_inline_message"

    @classmethod
    def register_prepared_inline_message(
        cls, prepared_inline_message_cls: Type
    ) -> None:
        """Register a new prepared_inline_message handler."""
        instance = prepared_inline_message_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = prepared_inline_message_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.PREPAREDINLINEMESSAGES_REGISTRY[name] = (
                        prepared_inline_message_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.prepared_inline_message
        trigger_value = obj.expiration_date

        # Try to get specific handler first
        handler_cls = cls.PREPAREDINLINEMESSAGES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
