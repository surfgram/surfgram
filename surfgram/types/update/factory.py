from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class UpdateMeta(ABCMeta):
    """Metaclass for Update classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            UpdatesFactory.register_update(new_class)
        return new_class


class UpdatesFactory(TypesFactory):
    """Factory for creating Update instances."""

    UPDATES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "update"

    @classmethod
    def register_update(cls, update_cls: Type) -> None:
        """Register a new update handler."""
        instance = update_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = update_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.UPDATES_REGISTRY[name] = update_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.update
        trigger_value = obj.inline_query

        # Try to get specific handler first
        handler_cls = cls.UPDATES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
