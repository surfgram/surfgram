from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BusinessOpeningHoursIntervalMeta(ABCMeta):
    """Metaclass for BusinessOpeningHoursInterval classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BusinessOpeningHoursIntervalsFactory.register_business_opening_hours_interval(
                new_class
            )
        return new_class


class BusinessOpeningHoursIntervalsFactory(TypesFactory):
    """Factory for creating BusinessOpeningHoursInterval instances."""

    BUSINESSOPENINGHOURSINTERVALS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "business_opening_hours_interval"

    @classmethod
    def register_business_opening_hours_interval(
        cls, business_opening_hours_interval_cls: Type
    ) -> None:
        """Register a new business_opening_hours_interval handler."""
        instance = business_opening_hours_interval_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = business_opening_hours_interval_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.BUSINESSOPENINGHOURSINTERVALS_REGISTRY[name] = (
                        business_opening_hours_interval_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.business_opening_hours_interval
        trigger_value = obj.opening_minute

        # Try to get specific handler first
        handler_cls = cls.BUSINESSOPENINGHOURSINTERVALS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
