from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ShippingOptionMeta(ABCMeta):
    """Metaclass for ShippingOption classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ShippingOptionsFactory.register_shipping_option(new_class)
        return new_class


class ShippingOptionsFactory(TypesFactory):
    """Factory for creating ShippingOption instances."""

    SHIPPINGOPTIONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "shipping_option"

    @classmethod
    def register_shipping_option(cls, shipping_option_cls: Type) -> None:
        """Register a new shipping_option handler."""
        instance = shipping_option_cls()
        for name in instance.__names__:
            cls.SHIPPINGOPTIONS_REGISTRY[name] = shipping_option_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.shipping_option
        trigger_value = obj.title
        return cls.SHIPPINGOPTIONS_REGISTRY.get(trigger_value)()
