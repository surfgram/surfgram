from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class DocumentMeta(ABCMeta):
    """Metaclass for Document classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            DocumentsFactory.register_document(new_class)
        return new_class


class DocumentsFactory(TypesFactory):
    """Factory for creating Document instances."""

    DOCUMENTS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "document"

    @classmethod
    def register_document(cls, document_cls: Type) -> None:
        """Register a new document handler."""
        instance = document_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = document_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.DOCUMENTS_REGISTRY[name] = document_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.document
        trigger_value = obj.mime_type

        # Try to get specific handler first
        handler_cls = cls.DOCUMENTS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
