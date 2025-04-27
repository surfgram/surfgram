from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class OwnedGiftRegularMeta(ABCMeta):
    """Metaclass for OwnedGiftRegular classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            OwnedGiftRegularsFactory.register_owned_gift_regular(new_class)
        return new_class


class OwnedGiftRegularsFactory(TypesFactory):
    """Factory for creating OwnedGiftRegular instances."""

    OWNEDGIFTREGULARS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "owned_gift_regular"

    @classmethod
    def register_owned_gift_regular(cls, owned_gift_regular_cls: Type) -> None:
        """Register a new owned_gift_regular handler."""
        instance = owned_gift_regular_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = owned_gift_regular_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.OWNEDGIFTREGULARS_REGISTRY[name] = owned_gift_regular_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.owned_gift_regular
        trigger_value = obj.text

        # Try to get specific handler first
        handler_cls = cls.OWNEDGIFTREGULARS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
