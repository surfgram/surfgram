from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryResultVoiceMeta(ABCMeta):
    """Metaclass for InlineQueryResultVoice classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueryResultVoicesFactory.register_inline_query_result_voice(new_class)
        return new_class


class InlineQueryResultVoicesFactory(TypesFactory):
    """Factory for creating InlineQueryResultVoice instances."""

    INLINEQUERYRESULTVOICES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_query_result_voice"

    @classmethod
    def register_inline_query_result_voice(
        cls, inline_query_result_voice_cls: Type
    ) -> None:
        """Register a new inline_query_result_voice handler."""
        instance = inline_query_result_voice_cls()
        for name in instance.__names__:
            cls.INLINEQUERYRESULTVOICES_REGISTRY[name] = inline_query_result_voice_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query_result_voice
        trigger_value = obj.title
        return cls.INLINEQUERYRESULTVOICES_REGISTRY.get(trigger_value)()
