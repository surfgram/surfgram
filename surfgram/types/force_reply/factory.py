from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ForceReplyMeta(ABCMeta):
    """Metaclass for ForceReply classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ForceRepliesFactory.register_force_reply(new_class)
        return new_class


class ForceRepliesFactory(TypesFactory):
    """Factory for creating ForceReply instances."""

    FORCEREPLIES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "force_reply"

    @classmethod
    def register_force_reply(cls, force_reply_cls: Type) -> None:
        """Register a new force_reply handler."""
        instance = force_reply_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = force_reply_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.FORCEREPLIES_REGISTRY[name] = force_reply_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.force_reply
        trigger_value = obj.input_field_placeholder

        # Try to get specific handler first
        handler_cls = cls.FORCEREPLIES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
