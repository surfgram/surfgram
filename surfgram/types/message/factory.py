from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class MessageMeta(ABCMeta):
    """Metaclass for Message classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            MessagesFactory.register_message(new_class)
        return new_class


class MessagesFactory(TypesFactory):
    """Factory for creating Message instances."""

    MESSAGES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "message"

    @classmethod
    def register_message(cls, message_cls: Type) -> None:
        """Register a new message handler."""
        instance = message_cls()
        for name in instance.__names__:
            cls.MESSAGES_REGISTRY[name] = message_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.message
        trigger_value = obj.text
        return cls.MESSAGES_REGISTRY.get(trigger_value)()
