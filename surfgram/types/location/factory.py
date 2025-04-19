from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class LocationMeta(ABCMeta):
    """Metaclass for Location classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            LocationsFactory.register_location(new_class)
        return new_class


class LocationsFactory(TypesFactory):
    """Factory for creating Location instances."""

    LOCATIONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "location"

    @classmethod
    def register_location(cls, location_cls: Type) -> None:
        """Register a new location handler."""
        instance = location_cls()
        for name in instance.__names__:
            cls.LOCATIONS_REGISTRY[name] = location_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.location
        trigger_value = obj.latitude
        return cls.LOCATIONS_REGISTRY.get(trigger_value)()
