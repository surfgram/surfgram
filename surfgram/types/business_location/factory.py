from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BusinessLocationMeta(ABCMeta):
    """Metaclass for BusinessLocation classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BusinessLocationsFactory.register_business_location(new_class)
        return new_class


class BusinessLocationsFactory(TypesFactory):
    """Factory for creating BusinessLocation instances."""

    BUSINESSLOCATIONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "business_location"

    @classmethod
    def register_business_location(cls, business_location_cls: Type) -> None:
        """Register a new business_location handler."""
        instance = business_location_cls()
        for name in instance.__names__:
            cls.BUSINESSLOCATIONS_REGISTRY[name] = business_location_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.business_location
        trigger_value = obj.address
        return cls.BUSINESSLOCATIONS_REGISTRY.get(trigger_value)()
