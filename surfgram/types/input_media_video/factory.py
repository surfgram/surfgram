from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputMediaVideoMeta(ABCMeta):
    """Metaclass for InputMediaVideo classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputMediaVideosFactory.register_input_media_video(new_class)
        return new_class


class InputMediaVideosFactory(TypesFactory):
    """Factory for creating InputMediaVideo instances."""

    INPUTMEDIAVIDEOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "input_media_video"

    @classmethod
    def register_input_media_video(cls, input_media_video_cls: Type) -> None:
        """Register a new input_media_video handler."""
        instance = input_media_video_cls()
        for name in instance.__names__:
            cls.INPUTMEDIAVIDEOS_REGISTRY[name] = input_media_video_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_media_video
        trigger_value = obj.caption
        return cls.INPUTMEDIAVIDEOS_REGISTRY.get(trigger_value)()
