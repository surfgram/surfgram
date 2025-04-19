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
    __type_name__ = "business_opening_hours"

    @classmethod
    def register_business_opening_hours(cls, business_opening_hours_cls: Type) -> None:
        """Register a new business_opening_hours handler."""
        instance = business_opening_hours_cls()
        for name in instance.__names__:
            cls.BUSINESSOPENINGHOURS_REGISTRY[name] = business_opening_hours_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.business_opening_hours
        trigger_value = obj.time_zone_name
        return cls.BUSINESSOPENINGHOURS_REGISTRY.get(trigger_value)()
