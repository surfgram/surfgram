from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class MessageAutoDeleteTimerChangedMeta(ABCMeta):
    """Metaclass for MessageAutoDeleteTimerChanged classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            MessageAutoDeleteTimerChangedsFactory.register_message_auto_delete_timer_changed(
                new_class
            )
        return new_class


class MessageAutoDeleteTimerChangedsFactory(TypesFactory):
    """Factory for creating MessageAutoDeleteTimerChanged instances."""

    MESSAGEAUTODELETETIMERCHANGEDS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "message_auto_delete_timer_changed"

    @classmethod
    def register_message_auto_delete_timer_changed(
        cls, message_auto_delete_timer_changed_cls: Type
    ) -> None:
        """Register a new message_auto_delete_timer_changed handler."""
        instance = message_auto_delete_timer_changed_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = message_auto_delete_timer_changed_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.MESSAGEAUTODELETETIMERCHANGEDS_REGISTRY[name] = (
                        message_auto_delete_timer_changed_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.message_auto_delete_timer_changed
        trigger_value = obj.message_auto_delete_time

        # Try to get specific handler first
        handler_cls = cls.MESSAGEAUTODELETETIMERCHANGEDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
