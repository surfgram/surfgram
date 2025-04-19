from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class MessageEntityMeta(ABCMeta):
    """Metaclass for MessageEntity classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            MessageEntitiesFactory.register_message_entity(new_class)
        return new_class


class MessageEntitiesFactory(TypesFactory):
    """Factory for creating MessageEntity instances."""

    MESSAGEENTITIES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "message_entity"

    @classmethod
    def register_message_entity(cls, message_entity_cls: Type) -> None:
        """Register a new message_entity handler."""
        instance = message_entity_cls()
        for name in instance.__names__:
            cls.MESSAGEENTITIES_REGISTRY[name] = message_entity_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.message_entity
        trigger_value = obj.type
        return cls.MESSAGEENTITIES_REGISTRY.get(trigger_value)()
