from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryResultCachedPhotoMeta(ABCMeta):
    """Metaclass for InlineQueryResultCachedPhoto classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueryResultCachedPhotosFactory.register_inline_query_result_cached_photo(
                new_class
            )
        return new_class


class InlineQueryResultCachedPhotosFactory(TypesFactory):
    """Factory for creating InlineQueryResultCachedPhoto instances."""

    INLINEQUERYRESULTCACHEDPHOTOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_query_result_cached_photo"

    @classmethod
    def register_inline_query_result_cached_photo(
        cls, inline_query_result_cached_photo_cls: Type
    ) -> None:
        """Register a new inline_query_result_cached_photo handler."""
        instance = inline_query_result_cached_photo_cls()
        for name in instance.__names__:
            cls.INLINEQUERYRESULTCACHEDPHOTOS_REGISTRY[name] = (
                inline_query_result_cached_photo_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query_result_cached_photo
        trigger_value = obj.title
        return cls.INLINEQUERYRESULTCACHEDPHOTOS_REGISTRY.get(trigger_value)()
