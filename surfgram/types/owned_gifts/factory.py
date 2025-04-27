from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class OwnedGiftsMeta(ABCMeta):
    """Metaclass for OwnedGifts classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            OwnedGiftsFactory.register_owned_gifts(new_class)
        return new_class


class OwnedGiftsFactory(TypesFactory):
    """Factory for creating OwnedGifts instances."""

    OWNEDGIFTS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "owned_gifts"

    @classmethod
    def register_owned_gifts(cls, owned_gifts_cls: Type) -> None:
        """Register a new owned_gifts handler."""
        instance = owned_gifts_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = owned_gifts_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.OWNEDGIFTS_REGISTRY[name] = owned_gifts_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.owned_gifts
        trigger_value = obj.next_offset

        # Try to get specific handler first
        handler_cls = cls.OWNEDGIFTS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
