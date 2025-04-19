from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PreCheckoutQueryMeta(ABCMeta):
    """Metaclass for PreCheckoutQuery classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PreCheckoutQueriesFactory.register_pre_checkout_query(new_class)
        return new_class


class PreCheckoutQueriesFactory(TypesFactory):
    """Factory for creating PreCheckoutQuery instances."""

    PRECHECKOUTQUERIES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "pre_checkout_query"

    @classmethod
    def register_pre_checkout_query(cls, pre_checkout_query_cls: Type) -> None:
        """Register a new pre_checkout_query handler."""
        instance = pre_checkout_query_cls()
        for name in instance.__names__:
            cls.PRECHECKOUTQUERIES_REGISTRY[name] = pre_checkout_query_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.pre_checkout_query
        trigger_value = obj.invoice_payload
        return cls.PRECHECKOUTQUERIES_REGISTRY.get(trigger_value)()
