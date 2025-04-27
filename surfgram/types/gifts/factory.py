from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class GiftsMeta(ABCMeta):
    """Metaclass for Gifts classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            GiftsFactory.register_gifts(new_class)
        return new_class


class GiftsFactory(TypesFactory):
    """Factory for creating Gifts instances."""

    GIFTS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "gifts"

    @classmethod
    def register_gifts(cls, gifts_cls: Type) -> None:
        """Register a new gifts handler."""
        instance = gifts_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = gifts_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.GIFTS_REGISTRY[name] = gifts_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.gifts
        trigger_value = obj.gifts

        # Try to get specific handler first
        handler_cls = cls.GIFTS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
