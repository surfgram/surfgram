from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class MessageReactionCountUpdatedMeta(ABCMeta):
    """Metaclass for MessageReactionCountUpdated classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            MessageReactionCountUpdatedsFactory.register_message_reaction_count_updated(
                new_class
            )
        return new_class


class MessageReactionCountUpdatedsFactory(TypesFactory):
    """Factory for creating MessageReactionCountUpdated instances."""

    MESSAGEREACTIONCOUNTUPDATEDS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "message_reaction_count_updated"

    @classmethod
    def register_message_reaction_count_updated(
        cls, message_reaction_count_updated_cls: Type
    ) -> None:
        """Register a new message_reaction_count_updated handler."""
        instance = message_reaction_count_updated_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = message_reaction_count_updated_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.MESSAGEREACTIONCOUNTUPDATEDS_REGISTRY[name] = (
                        message_reaction_count_updated_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.message_reaction_count_updated
        trigger_value = obj.reactions

        # Try to get specific handler first
        handler_cls = cls.MESSAGEREACTIONCOUNTUPDATEDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
