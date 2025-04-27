from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BusinessConnectionMeta(ABCMeta):
    """Metaclass for BusinessConnection classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BusinessConnectionsFactory.register_business_connection(new_class)
        return new_class


class BusinessConnectionsFactory(TypesFactory):
    """Factory for creating BusinessConnection instances."""

    BUSINESSCONNECTIONS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "business_connection"

    @classmethod
    def register_business_connection(cls, business_connection_cls: Type) -> None:
        """Register a new business_connection handler."""
        instance = business_connection_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = business_connection_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.BUSINESSCONNECTIONS_REGISTRY[name] = business_connection_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.business_connection
        trigger_value = obj.user_chat_id

        # Try to get specific handler first
        handler_cls = cls.BUSINESSCONNECTIONS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
