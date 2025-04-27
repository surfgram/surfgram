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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "message_reaction_updated"

    @classmethod
    def register_message_reaction_updated(
        cls, message_reaction_updated_cls: Type
    ) -> None:
        """Register a new message_reaction_updated handler."""
        instance = message_reaction_updated_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = message_reaction_updated_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.MESSAGEREACTIONUPDATEDS_REGISTRY[name] = (
                        message_reaction_updated_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.message_reaction_updated
        trigger_value = obj.actor_chat

        # Try to get specific handler first
        handler_cls = cls.MESSAGEREACTIONUPDATEDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
