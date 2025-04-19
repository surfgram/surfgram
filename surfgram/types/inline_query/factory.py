from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryMeta(ABCMeta):
    """Metaclass for InlineQuery classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueriesFactory.register_inline_query(new_class)
        return new_class


class InlineQueriesFactory(TypesFactory):
    """Factory for creating InlineQuery instances."""

    INLINEQUERIES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_query"

    @classmethod
    def register_inline_query(cls, inline_query_cls: Type) -> None:
        """Register a new inline_query handler."""
        instance = inline_query_cls()
        for name in instance.__names__:
            cls.INLINEQUERIES_REGISTRY[name] = inline_query_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query
        trigger_value = obj.query
        return cls.INLINEQUERIES_REGISTRY.get(trigger_value)()
