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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "video_note"

    @classmethod
    def register_video_note(cls, video_note_cls: Type) -> None:
        """Register a new video_note handler."""
        instance = video_note_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = video_note_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.VIDEONOTES_REGISTRY[name] = video_note_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.video_note
        trigger_value = obj.file_id

        # Try to get specific handler first
        handler_cls = cls.VIDEONOTES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
