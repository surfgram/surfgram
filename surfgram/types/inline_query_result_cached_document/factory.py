from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryResultCachedDocumentMeta(ABCMeta):
    """Metaclass for InlineQueryResultCachedDocument classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueryResultCachedDocumentsFactory.register_inline_query_result_cached_document(
                new_class
            )
        return new_class


class InlineQueryResultCachedDocumentsFactory(TypesFactory):
    """Factory for creating InlineQueryResultCachedDocument instances."""

    INLINEQUERYRESULTCACHEDDOCUMENTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_query_result_cached_document"

    @classmethod
    def register_inline_query_result_cached_document(
        cls, inline_query_result_cached_document_cls: Type
    ) -> None:
        """Register a new inline_query_result_cached_document handler."""
        instance = inline_query_result_cached_document_cls()
        for name in instance.__names__:
            cls.INLINEQUERYRESULTCACHEDDOCUMENTS_REGISTRY[name] = (
                inline_query_result_cached_document_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query_result_cached_document
        trigger_value = obj.title
        return cls.INLINEQUERYRESULTCACHEDDOCUMENTS_REGISTRY.get(trigger_value)()
