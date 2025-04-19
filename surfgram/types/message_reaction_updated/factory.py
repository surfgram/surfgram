from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class MessageReactionUpdatedMeta(ABCMeta):
    """Metaclass for MessageReactionUpdated classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            MessageReactionUpdatedsFactory.register_message_reaction_updated(new_class)
        return new_class


class MessageReactionUpdatedsFactory(TypesFactory):
    """Factory for creating MessageReactionUpdated instances."""

    MESSAGEREACTIONUPDATEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "message_reaction_updated"

    @classmethod
    def register_message_reaction_updated(
        cls, message_reaction_updated_cls: Type
    ) -> None:
        """Register a new message_reaction_updated handler."""
        instance = message_reaction_updated_cls()
        for name in instance.__names__:
            cls.MESSAGEREACTIONUPDATEDS_REGISTRY[name] = message_reaction_updated_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.message_reaction_updated
        trigger_value = obj.actor_chat
        return cls.MESSAGEREACTIONUPDATEDS_REGISTRY.get(trigger_value)()
