from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryResultCachedAudioMeta(ABCMeta):
    """Metaclass for InlineQueryResultCachedAudio classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueryResultCachedAudiosFactory.register_inline_query_result_cached_audio(
                new_class
            )
        return new_class


class InlineQueryResultCachedAudiosFactory(TypesFactory):
    """Factory for creating InlineQueryResultCachedAudio instances."""

    INLINEQUERYRESULTCACHEDAUDIOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_query_result_cached_audio"

    @classmethod
    def register_inline_query_result_cached_audio(
        cls, inline_query_result_cached_audio_cls: Type
    ) -> None:
        """Register a new inline_query_result_cached_audio handler."""
        instance = inline_query_result_cached_audio_cls()
        for name in instance.__names__:
            cls.INLINEQUERYRESULTCACHEDAUDIOS_REGISTRY[name] = (
                inline_query_result_cached_audio_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query_result_cached_audio
        trigger_value = obj.caption
        return cls.INLINEQUERYRESULTCACHEDAUDIOS_REGISTRY.get(trigger_value)()
