from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryResultCachedVoiceMeta(ABCMeta):
    """Metaclass for InlineQueryResultCachedVoice classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueryResultCachedVoicesFactory.register_inline_query_result_cached_voice(
                new_class
            )
        return new_class


class InlineQueryResultCachedVoicesFactory(TypesFactory):
    """Factory for creating InlineQueryResultCachedVoice instances."""

    INLINEQUERYRESULTCACHEDVOICES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_query_result_cached_voice"

    @classmethod
    def register_inline_query_result_cached_voice(
        cls, inline_query_result_cached_voice_cls: Type
    ) -> None:
        """Register a new inline_query_result_cached_voice handler."""
        instance = inline_query_result_cached_voice_cls()
        for name in instance.__names__:
            cls.INLINEQUERYRESULTCACHEDVOICES_REGISTRY[name] = (
                inline_query_result_cached_voice_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query_result_cached_voice
        trigger_value = obj.title
        return cls.INLINEQUERYRESULTCACHEDVOICES_REGISTRY.get(trigger_value)()
