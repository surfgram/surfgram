from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputPaidMediaVideoMeta(ABCMeta):
    """Metaclass for InputPaidMediaVideo classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputPaidMediaVideosFactory.register_input_paid_media_video(new_class)
        return new_class


class InputPaidMediaVideosFactory(TypesFactory):
    """Factory for creating InputPaidMediaVideo instances."""

    INPUTPAIDMEDIAVIDEOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "input_paid_media_video"

    @classmethod
    def register_input_paid_media_video(cls, input_paid_media_video_cls: Type) -> None:
        """Register a new input_paid_media_video handler."""
        instance = input_paid_media_video_cls()
        for name in instance.__names__:
            cls.INPUTPAIDMEDIAVIDEOS_REGISTRY[name] = input_paid_media_video_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_paid_media_video
        trigger_value = obj.type
        return cls.INPUTPAIDMEDIAVIDEOS_REGISTRY.get(trigger_value)()
