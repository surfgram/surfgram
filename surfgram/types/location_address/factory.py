from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class LocationAddressMeta(ABCMeta):
    """Metaclass for LocationAddress classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            LocationAddressesFactory.register_location_address(new_class)
        return new_class


class LocationAddressesFactory(TypesFactory):
    """Factory for creating LocationAddress instances."""

    LOCATIONADDRESSES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "location_address"

    @classmethod
    def register_location_address(cls, location_address_cls: Type) -> None:
        """Register a new location_address handler."""
        instance = location_address_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = location_address_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.LOCATIONADDRESSES_REGISTRY[name] = location_address_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.location_address
        trigger_value = obj.country_code

        # Try to get specific handler first
        handler_cls = cls.LOCATIONADDRESSES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
