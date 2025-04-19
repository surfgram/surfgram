from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class MessageIdMeta(ABCMeta):
    """Metaclass for MessageId classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            MessageIdsFactory.register_message_id(new_class)
        return new_class


class MessageIdsFactory(TypesFactory):
    """Factory for creating MessageId instances."""

    MESSAGEIDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "message_id"

    @classmethod
    def register_message_id(cls, message_id_cls: Type) -> None:
        """Register a new message_id handler."""
        instance = message_id_cls()
        for name in instance.__names__:
            cls.MESSAGEIDS_REGISTRY[name] = message_id_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.message_id
        trigger_value = obj.message_id
        return cls.MESSAGEIDS_REGISTRY.get(trigger_value)()
