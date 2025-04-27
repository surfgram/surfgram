from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BackgroundTypeFillMeta(ABCMeta):
    """Metaclass for BackgroundTypeFill classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BackgroundTypeFillsFactory.register_background_type_fill(new_class)
        return new_class


class BackgroundTypeFillsFactory(TypesFactory):
    """Factory for creating BackgroundTypeFill instances."""

    BACKGROUNDTYPEFILLS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "background_type_fill"

    @classmethod
    def register_background_type_fill(cls, background_type_fill_cls: Type) -> None:
        """Register a new background_type_fill handler."""
        instance = background_type_fill_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = background_type_fill_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.BACKGROUNDTYPEFILLS_REGISTRY[name] = background_type_fill_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.background_type_fill
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.BACKGROUNDTYPEFILLS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
