from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BusinessMessagesDeletedMeta(ABCMeta):
    """Metaclass for BusinessMessagesDeleted classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BusinessMessagesDeletedsFactory.register_business_messages_deleted(
                new_class
            )
        return new_class


class BusinessMessagesDeletedsFactory(TypesFactory):
    """Factory for creating BusinessMessagesDeleted instances."""

    BUSINESSMESSAGESDELETEDS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "business_messages_deleted"

    @classmethod
    def register_business_messages_deleted(
        cls, business_messages_deleted_cls: Type
    ) -> None:
        """Register a new business_messages_deleted handler."""
        instance = business_messages_deleted_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = business_messages_deleted_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.BUSINESSMESSAGESDELETEDS_REGISTRY[name] = (
                        business_messages_deleted_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.business_messages_deleted
        trigger_value = obj.business_connection_id

        # Try to get specific handler first
        handler_cls = cls.BUSINESSMESSAGESDELETEDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
