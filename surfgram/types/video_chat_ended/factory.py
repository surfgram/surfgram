from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class VideoChatEndedMeta(ABCMeta):
    """Metaclass for VideoChatEnded classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            VideoChatEndedsFactory.register_video_chat_ended(new_class)
        return new_class


class VideoChatEndedsFactory(TypesFactory):
    """Factory for creating VideoChatEnded instances."""

    VIDEOCHATENDEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "video_chat_ended"

    @classmethod
    def register_video_chat_ended(cls, video_chat_ended_cls: Type) -> None:
        """Register a new video_chat_ended handler."""
        instance = video_chat_ended_cls()
        for name in instance.__names__:
            cls.VIDEOCHATENDEDS_REGISTRY[name] = video_chat_ended_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.video_chat_ended
        trigger_value = obj.duration
        return cls.VIDEOCHATENDEDS_REGISTRY.get(trigger_value)()
