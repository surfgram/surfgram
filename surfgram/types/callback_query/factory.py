from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class CallbackQueryMeta(ABCMeta):
    """Metaclass for CallbackQuery classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            CallbackQueriesFactory.register_callback_query(new_class)
        return new_class


class CallbackQueriesFactory(TypesFactory):
    """Factory for creating CallbackQuery instances."""

    CALLBACKQUERIES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "callback_query"

    @classmethod
    def register_callback_query(cls, callback_query_cls: Type) -> None:
        """Register a new callback_query handler."""
        instance = callback_query_cls()
        for name in instance.__names__:
            cls.CALLBACKQUERIES_REGISTRY[name] = callback_query_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.callback_query
        trigger_value = obj.data
        return cls.CALLBACKQUERIES_REGISTRY.get(trigger_value)()
