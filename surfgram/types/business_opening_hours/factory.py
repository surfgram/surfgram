from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BusinessOpeningHoursMeta(ABCMeta):
    """Metaclass for BusinessOpeningHours classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BusinessOpeningHoursFactory.register_business_opening_hours(new_class)
        return new_class


class BusinessOpeningHoursFactory(TypesFactory):
    """Factory for creating BusinessOpeningHours instances."""

    BUSINESSOPENINGHOURS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "business_opening_hours"

    @classmethod
    def register_business_opening_hours(cls, business_opening_hours_cls: Type) -> None:
        """Register a new business_opening_hours handler."""
        instance = business_opening_hours_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = business_opening_hours_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.BUSINESSOPENINGHOURS_REGISTRY[name] = business_opening_hours_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.business_opening_hours
        trigger_value = obj.time_zone_name

        # Try to get specific handler first
        handler_cls = cls.BUSINESSOPENINGHOURS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
