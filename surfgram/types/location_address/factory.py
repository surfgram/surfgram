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
    __type_name__ = "location_address"

    @classmethod
    def register_location_address(cls, location_address_cls: Type) -> None:
        """Register a new location_address handler."""
        instance = location_address_cls()
        for name in instance.__names__:
            cls.LOCATIONADDRESSES_REGISTRY[name] = location_address_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.location_address
        trigger_value = obj.country_code
        return cls.LOCATIONADDRESSES_REGISTRY.get(trigger_value)()
