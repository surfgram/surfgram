from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class VenueMeta(ABCMeta):
    """Metaclass for Venue classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            VenuesFactory.register_venue(new_class)
        return new_class


class VenuesFactory(TypesFactory):
    """Factory for creating Venue instances."""

    VENUES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "venue"

    @classmethod
    def register_venue(cls, venue_cls: Type) -> None:
        """Register a new venue handler."""
        instance = venue_cls()
        for name in instance.__names__:
            cls.VENUES_REGISTRY[name] = venue_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.venue
        trigger_value = obj.title
        return cls.VENUES_REGISTRY.get(trigger_value)()
