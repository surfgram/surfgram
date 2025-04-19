from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryResultPhotoMeta(ABCMeta):
    """Metaclass for InlineQueryResultPhoto classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueryResultPhotosFactory.register_inline_query_result_photo(new_class)
        return new_class


class InlineQueryResultPhotosFactory(TypesFactory):
    """Factory for creating InlineQueryResultPhoto instances."""

    INLINEQUERYRESULTPHOTOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_query_result_photo"

    @classmethod
    def register_inline_query_result_photo(
        cls, inline_query_result_photo_cls: Type
    ) -> None:
        """Register a new inline_query_result_photo handler."""
        instance = inline_query_result_photo_cls()
        for name in instance.__names__:
            cls.INLINEQUERYRESULTPHOTOS_REGISTRY[name] = inline_query_result_photo_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query_result_photo
        trigger_value = obj.title
        return cls.INLINEQUERYRESULTPHOTOS_REGISTRY.get(trigger_value)()
