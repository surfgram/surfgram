from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class VideoChatScheduledMeta(ABCMeta):
    """Metaclass for VideoChatScheduled classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            VideoChatScheduledsFactory.register_video_chat_scheduled(new_class)
        return new_class


class VideoChatScheduledsFactory(TypesFactory):
    """Factory for creating VideoChatScheduled instances."""

    VIDEOCHATSCHEDULEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "video_chat_scheduled"

    @classmethod
    def register_video_chat_scheduled(cls, video_chat_scheduled_cls: Type) -> None:
        """Register a new video_chat_scheduled handler."""
        instance = video_chat_scheduled_cls()
        for name in instance.__names__:
            cls.VIDEOCHATSCHEDULEDS_REGISTRY[name] = video_chat_scheduled_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.video_chat_scheduled
        trigger_value = obj.start_date
        return cls.VIDEOCHATSCHEDULEDS_REGISTRY.get(trigger_value)()
