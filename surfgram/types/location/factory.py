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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "location"

    @classmethod
    def register_location(cls, location_cls: Type) -> None:
        """Register a new location handler."""
        instance = location_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = location_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.LOCATIONS_REGISTRY[name] = location_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.location
        trigger_value = obj.latitude

        # Try to get specific handler first
        handler_cls = cls.LOCATIONS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
