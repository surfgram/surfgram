from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BackgroundFillSolidMeta(ABCMeta):
    """Metaclass for BackgroundFillSolid classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BackgroundFillSolidsFactory.register_background_fill_solid(new_class)
        return new_class


class BackgroundFillSolidsFactory(TypesFactory):
    """Factory for creating BackgroundFillSolid instances."""

    BACKGROUNDFILLSOLIDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "background_fill_solid"

    @classmethod
    def register_background_fill_solid(cls, background_fill_solid_cls: Type) -> None:
        """Register a new background_fill_solid handler."""
        instance = background_fill_solid_cls()
        for name in instance.__names__:
            cls.BACKGROUNDFILLSOLIDS_REGISTRY[name] = background_fill_solid_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.background_fill_solid
        trigger_value = obj.type
        return cls.BACKGROUNDFILLSOLIDS_REGISTRY.get(trigger_value)()
