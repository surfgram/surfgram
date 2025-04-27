from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryResultDocumentMeta(ABCMeta):
    """Metaclass for InlineQueryResultDocument classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueryResultDocumentsFactory.register_inline_query_result_document(
                new_class
            )
        return new_class


class InlineQueryResultDocumentsFactory(TypesFactory):
    """Factory for creating InlineQueryResultDocument instances."""

    INLINEQUERYRESULTDOCUMENTS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "inline_query_result_document"

    @classmethod
    def register_inline_query_result_document(
        cls, inline_query_result_document_cls: Type
    ) -> None:
        """Register a new inline_query_result_document handler."""
        instance = inline_query_result_document_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = inline_query_result_document_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.INLINEQUERYRESULTDOCUMENTS_REGISTRY[name] = (
                        inline_query_result_document_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query_result_document
        trigger_value = obj.title

        # Try to get specific handler first
        handler_cls = cls.INLINEQUERYRESULTDOCUMENTS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
