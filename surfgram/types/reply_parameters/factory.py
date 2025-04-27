from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ReplyParametersMeta(ABCMeta):
    """Metaclass for ReplyParameters classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ReplyParametersFactory.register_reply_parameters(new_class)
        return new_class


class ReplyParametersFactory(TypesFactory):
    """Factory for creating ReplyParameters instances."""

    REPLYPARAMETERS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "reply_parameters"

    @classmethod
    def register_reply_parameters(cls, reply_parameters_cls: Type) -> None:
        """Register a new reply_parameters handler."""
        instance = reply_parameters_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = reply_parameters_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.REPLYPARAMETERS_REGISTRY[name] = reply_parameters_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.reply_parameters
        trigger_value = obj.quote

        # Try to get specific handler first
        handler_cls = cls.REPLYPARAMETERS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
