from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputMediaDocumentMeta(ABCMeta):
    """Metaclass for InputMediaDocument classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputMediaDocumentsFactory.register_input_media_document(new_class)
        return new_class


class InputMediaDocumentsFactory(TypesFactory):
    """Factory for creating InputMediaDocument instances."""

    INPUTMEDIADOCUMENTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "input_media_document"

    @classmethod
    def register_input_media_document(cls, input_media_document_cls: Type) -> None:
        """Register a new input_media_document handler."""
        instance = input_media_document_cls()
        for name in instance.__names__:
            cls.INPUTMEDIADOCUMENTS_REGISTRY[name] = input_media_document_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_media_document
        trigger_value = obj.caption
        return cls.INPUTMEDIADOCUMENTS_REGISTRY.get(trigger_value)()
