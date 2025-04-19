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
    __type_name__ = "paid_media_purchased"

    @classmethod
    def register_paid_media_purchased(cls, paid_media_purchased_cls: Type) -> None:
        """Register a new paid_media_purchased handler."""
        instance = paid_media_purchased_cls()
        for name in instance.__names__:
            cls.PAIDMEDIAPURCHASEDS_REGISTRY[name] = paid_media_purchased_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.paid_media_purchased
        trigger_value = obj.paid_media_payload
        return cls.PAIDMEDIAPURCHASEDS_REGISTRY.get(trigger_value)()
