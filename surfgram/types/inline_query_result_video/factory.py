from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryResultVideoMeta(ABCMeta):
    """Metaclass for InlineQueryResultVideo classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueryResultVideosFactory.register_inline_query_result_video(new_class)
        return new_class


class InlineQueryResultVideosFactory(TypesFactory):
    """Factory for creating InlineQueryResultVideo instances."""

    INLINEQUERYRESULTVIDEOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_query_result_video"

    @classmethod
    def register_inline_query_result_video(
        cls, inline_query_result_video_cls: Type
    ) -> None:
        """Register a new inline_query_result_video handler."""
        instance = inline_query_result_video_cls()
        for name in instance.__names__:
            cls.INLINEQUERYRESULTVIDEOS_REGISTRY[name] = inline_query_result_video_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query_result_video
        trigger_value = obj.mime_type
        return cls.INLINEQUERYRESULTVIDEOS_REGISTRY.get(trigger_value)()
