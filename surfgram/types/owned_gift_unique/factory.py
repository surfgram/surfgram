from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class OwnedGiftUniqueMeta(ABCMeta):
    """Metaclass for OwnedGiftUnique classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            OwnedGiftUniquesFactory.register_owned_gift_unique(new_class)
        return new_class


class OwnedGiftUniquesFactory(TypesFactory):
    """Factory for creating OwnedGiftUnique instances."""

    OWNEDGIFTUNIQUES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "owned_gift_unique"

    @classmethod
    def register_owned_gift_unique(cls, owned_gift_unique_cls: Type) -> None:
        """Register a new owned_gift_unique handler."""
        instance = owned_gift_unique_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = owned_gift_unique_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.OWNEDGIFTUNIQUES_REGISTRY[name] = owned_gift_unique_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.owned_gift_unique
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.OWNEDGIFTUNIQUES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
