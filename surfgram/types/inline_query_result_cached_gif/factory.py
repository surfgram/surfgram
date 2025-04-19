from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryResultCachedGifMeta(ABCMeta):
    """Metaclass for InlineQueryResultCachedGif classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueryResultCachedGifsFactory.register_inline_query_result_cached_gif(
                new_class
            )
        return new_class


class InlineQueryResultCachedGifsFactory(TypesFactory):
    """Factory for creating InlineQueryResultCachedGif instances."""

    INLINEQUERYRESULTCACHEDGIFS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_query_result_cached_gif"

    @classmethod
    def register_inline_query_result_cached_gif(
        cls, inline_query_result_cached_gif_cls: Type
    ) -> None:
        """Register a new inline_query_result_cached_gif handler."""
        instance = inline_query_result_cached_gif_cls()
        for name in instance.__names__:
            cls.INLINEQUERYRESULTCACHEDGIFS_REGISTRY[name] = (
                inline_query_result_cached_gif_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query_result_cached_gif
        trigger_value = obj.title
        return cls.INLINEQUERYRESULTCACHEDGIFS_REGISTRY.get(trigger_value)()
