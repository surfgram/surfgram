from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryResultVenueMeta(ABCMeta):
    """Metaclass for InlineQueryResultVenue classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueryResultVenuesFactory.register_inline_query_result_venue(new_class)
        return new_class


class InlineQueryResultVenuesFactory(TypesFactory):
    """Factory for creating InlineQueryResultVenue instances."""

    INLINEQUERYRESULTVENUES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_query_result_venue"

    @classmethod
    def register_inline_query_result_venue(
        cls, inline_query_result_venue_cls: Type
    ) -> None:
        """Register a new inline_query_result_venue handler."""
        instance = inline_query_result_venue_cls()
        for name in instance.__names__:
            cls.INLINEQUERYRESULTVENUES_REGISTRY[name] = inline_query_result_venue_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query_result_venue
        trigger_value = obj.title
        return cls.INLINEQUERYRESULTVENUES_REGISTRY.get(trigger_value)()
