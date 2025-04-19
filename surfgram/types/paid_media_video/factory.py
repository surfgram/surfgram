from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PaidMediaVideoMeta(ABCMeta):
    """Metaclass for PaidMediaVideo classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PaidMediaVideosFactory.register_paid_media_video(new_class)
        return new_class


class PaidMediaVideosFactory(TypesFactory):
    """Factory for creating PaidMediaVideo instances."""

    PAIDMEDIAVIDEOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "paid_media_video"

    @classmethod
    def register_paid_media_video(cls, paid_media_video_cls: Type) -> None:
        """Register a new paid_media_video handler."""
        instance = paid_media_video_cls()
        for name in instance.__names__:
            cls.PAIDMEDIAVIDEOS_REGISTRY[name] = paid_media_video_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.paid_media_video
        trigger_value = obj.video
        return cls.PAIDMEDIAVIDEOS_REGISTRY.get(trigger_value)()
