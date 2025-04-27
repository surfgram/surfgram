from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PaidMediaPurchasedMeta(ABCMeta):
    """Metaclass for PaidMediaPurchased classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PaidMediaPurchasedsFactory.register_paid_media_purchased(new_class)
        return new_class


class PaidMediaPurchasedsFactory(TypesFactory):
    """Factory for creating PaidMediaPurchased instances."""

    PAIDMEDIAPURCHASEDS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "paid_media_purchased"

    @classmethod
    def register_paid_media_purchased(cls, paid_media_purchased_cls: Type) -> None:
        """Register a new paid_media_purchased handler."""
        instance = paid_media_purchased_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = paid_media_purchased_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.PAIDMEDIAPURCHASEDS_REGISTRY[name] = paid_media_purchased_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.paid_media_purchased
        trigger_value = obj.paid_media_payload

        # Try to get specific handler first
        handler_cls = cls.PAIDMEDIAPURCHASEDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
