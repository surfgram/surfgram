from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ShippingAddressMeta(ABCMeta):
    """Metaclass for ShippingAddress classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ShippingAddressesFactory.register_shipping_address(new_class)
        return new_class


class ShippingAddressesFactory(TypesFactory):
    """Factory for creating ShippingAddress instances."""

    SHIPPINGADDRESSES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "shipping_address"

    @classmethod
    def register_shipping_address(cls, shipping_address_cls: Type) -> None:
        """Register a new shipping_address handler."""
        instance = shipping_address_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = shipping_address_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.SHIPPINGADDRESSES_REGISTRY[name] = shipping_address_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.shipping_address
        trigger_value = obj.country_code

        # Try to get specific handler first
        handler_cls = cls.SHIPPINGADDRESSES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
