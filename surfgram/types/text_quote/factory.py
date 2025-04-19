from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class TextQuoteMeta(ABCMeta):
    """Metaclass for TextQuote classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            TextQuotesFactory.register_text_quote(new_class)
        return new_class


class TextQuotesFactory(TypesFactory):
    """Factory for creating TextQuote instances."""

    TEXTQUOTES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "text_quote"

    @classmethod
    def register_text_quote(cls, text_quote_cls: Type) -> None:
        """Register a new text_quote handler."""
        instance = text_quote_cls()
        for name in instance.__names__:
            cls.TEXTQUOTES_REGISTRY[name] = text_quote_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.text_quote
        trigger_value = obj.text
        return cls.TEXTQUOTES_REGISTRY.get(trigger_value)()
