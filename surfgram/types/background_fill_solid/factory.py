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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "background_fill_solid"

    @classmethod
    def register_background_fill_solid(cls, background_fill_solid_cls: Type) -> None:
        """Register a new background_fill_solid handler."""
        instance = background_fill_solid_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = background_fill_solid_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.BACKGROUNDFILLSOLIDS_REGISTRY[name] = background_fill_solid_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.background_fill_solid
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.BACKGROUNDFILLSOLIDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
