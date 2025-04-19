from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PaidMediaPhotoMeta(ABCMeta):
    """Metaclass for PaidMediaPhoto classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PaidMediaPhotosFactory.register_paid_media_photo(new_class)
        return new_class


class PaidMediaPhotosFactory(TypesFactory):
    """Factory for creating PaidMediaPhoto instances."""

    PAIDMEDIAPHOTOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "paid_media_photo"

    @classmethod
    def register_paid_media_photo(cls, paid_media_photo_cls: Type) -> None:
        """Register a new paid_media_photo handler."""
        instance = paid_media_photo_cls()
        for name in instance.__names__:
            cls.PAIDMEDIAPHOTOS_REGISTRY[name] = paid_media_photo_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.paid_media_photo
        trigger_value = obj.photo
        return cls.PAIDMEDIAPHOTOS_REGISTRY.get(trigger_value)()
