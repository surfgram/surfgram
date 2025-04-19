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
    __type_name__ = "shipping_query"

    @classmethod
    def register_shipping_query(cls, shipping_query_cls: Type) -> None:
        """Register a new shipping_query handler."""
        instance = shipping_query_cls()
        for name in instance.__names__:
            cls.SHIPPINGQUERIES_REGISTRY[name] = shipping_query_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.shipping_query
        trigger_value = obj.invoice_payload
        return cls.SHIPPINGQUERIES_REGISTRY.get(trigger_value)()
