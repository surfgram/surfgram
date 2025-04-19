from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryResultCachedStickerMeta(ABCMeta):
    """Metaclass for InlineQueryResultCachedSticker classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueryResultCachedStickersFactory.register_inline_query_result_cached_sticker(
                new_class
            )
        return new_class


class InlineQueryResultCachedStickersFactory(TypesFactory):
    """Factory for creating InlineQueryResultCachedSticker instances."""

    INLINEQUERYRESULTCACHEDSTICKERS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_query_result_cached_sticker"

    @classmethod
    def register_inline_query_result_cached_sticker(
        cls, inline_query_result_cached_sticker_cls: Type
    ) -> None:
        """Register a new inline_query_result_cached_sticker handler."""
        instance = inline_query_result_cached_sticker_cls()
        for name in instance.__names__:
            cls.INLINEQUERYRESULTCACHEDSTICKERS_REGISTRY[name] = (
                inline_query_result_cached_sticker_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query_result_cached_sticker
        trigger_value = obj.sticker_file_id
        return cls.INLINEQUERYRESULTCACHEDSTICKERS_REGISTRY.get(trigger_value)()
