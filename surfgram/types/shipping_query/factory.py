from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ShippingQueryMeta(ABCMeta):
    """Metaclass for ShippingQuery classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ShippingQueriesFactory.register_shipping_query(new_class)
        return new_class


class ShippingQueriesFactory(TypesFactory):
    """Factory for creating ShippingQuery instances."""

    SHIPPINGQUERIES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "shipping_query"

    @classmethod
    def register_shipping_query(cls, shipping_query_cls: Type) -> None:
        """Register a new shipping_query handler."""
        instance = shipping_query_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = shipping_query_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.SHIPPINGQUERIES_REGISTRY[name] = shipping_query_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.shipping_query
        trigger_value = obj.invoice_payload

        # Try to get specific handler first
        handler_cls = cls.SHIPPINGQUERIES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
