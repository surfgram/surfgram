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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "callback_query"

    @classmethod
    def register_callback_query(cls, callback_query_cls: Type) -> None:
        """Register a new callback_query handler."""
        instance = callback_query_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = callback_query_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.CALLBACKQUERIES_REGISTRY[name] = callback_query_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.callback_query
        trigger_value = obj.data

        # Try to get specific handler first
        handler_cls = cls.CALLBACKQUERIES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
