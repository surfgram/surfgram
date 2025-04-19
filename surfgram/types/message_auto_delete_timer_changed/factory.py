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
    __type_name__ = "message_auto_delete_timer_changed"

    @classmethod
    def register_message_auto_delete_timer_changed(
        cls, message_auto_delete_timer_changed_cls: Type
    ) -> None:
        """Register a new message_auto_delete_timer_changed handler."""
        instance = message_auto_delete_timer_changed_cls()
        for name in instance.__names__:
            cls.MESSAGEAUTODELETETIMERCHANGEDS_REGISTRY[name] = (
                message_auto_delete_timer_changed_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.message_auto_delete_timer_changed
        trigger_value = obj.message_auto_delete_time
        return cls.MESSAGEAUTODELETETIMERCHANGEDS_REGISTRY.get(trigger_value)()
