from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class AcceptedGiftTypesMeta(ABCMeta):
    """Metaclass for AcceptedGiftTypes classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            AcceptedGiftTypesFactory.register_accepted_gift_types(new_class)
        return new_class


class AcceptedGiftTypesFactory(TypesFactory):
    """Factory for creating AcceptedGiftTypes instances."""

    ACCEPTEDGIFTTYPES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "accepted_gift_types"

    @classmethod
    def register_accepted_gift_types(cls, accepted_gift_types_cls: Type) -> None:
        """Register a new accepted_gift_types handler."""
        instance = accepted_gift_types_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = accepted_gift_types_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.ACCEPTEDGIFTTYPES_REGISTRY[name] = accepted_gift_types_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.accepted_gift_types
        trigger_value = obj.unlimited_gifts

        # Try to get specific handler first
        handler_cls = cls.ACCEPTEDGIFTTYPES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
