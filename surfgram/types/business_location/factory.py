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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "business_location"

    @classmethod
    def register_business_location(cls, business_location_cls: Type) -> None:
        """Register a new business_location handler."""
        instance = business_location_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = business_location_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.BUSINESSLOCATIONS_REGISTRY[name] = business_location_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.business_location
        trigger_value = obj.address

        # Try to get specific handler first
        handler_cls = cls.BUSINESSLOCATIONS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
