from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class VideoNoteMeta(ABCMeta):
    """Metaclass for VideoNote classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            VideoNotesFactory.register_video_note(new_class)
        return new_class


class VideoNotesFactory(TypesFactory):
    """Factory for creating VideoNote instances."""

    VIDEONOTES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "video_note"

    @classmethod
    def register_video_note(cls, video_note_cls: Type) -> None:
        """Register a new video_note handler."""
        instance = video_note_cls()
        for name in instance.__names__:
            cls.VIDEONOTES_REGISTRY[name] = video_note_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.video_note
        trigger_value = obj.file_id
        return cls.VIDEONOTES_REGISTRY.get(trigger_value)()
