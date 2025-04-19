from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class OrderInfoMeta(ABCMeta):
    """Metaclass for OrderInfo classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            OrderInfosFactory.register_order_info(new_class)
        return new_class


class OrderInfosFactory(TypesFactory):
    """Factory for creating OrderInfo instances."""

    ORDERINFOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "order_info"

    @classmethod
    def register_order_info(cls, order_info_cls: Type) -> None:
        """Register a new order_info handler."""
        instance = order_info_cls()
        for name in instance.__names__:
            cls.ORDERINFOS_REGISTRY[name] = order_info_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.order_info
        trigger_value = obj.phone_number
        return cls.ORDERINFOS_REGISTRY.get(trigger_value)()
