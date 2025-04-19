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
    __type_name__ = "document"

    @classmethod
    def register_document(cls, document_cls: Type) -> None:
        """Register a new document handler."""
        instance = document_cls()
        for name in instance.__names__:
            cls.DOCUMENTS_REGISTRY[name] = document_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.document
        trigger_value = obj.mime_type
        return cls.DOCUMENTS_REGISTRY.get(trigger_value)()
