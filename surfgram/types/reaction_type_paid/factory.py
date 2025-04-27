from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ReactionTypePaidMeta(ABCMeta):
    """Metaclass for ReactionTypePaid classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ReactionTypePaidsFactory.register_reaction_type_paid(new_class)
        return new_class


class ReactionTypePaidsFactory(TypesFactory):
    """Factory for creating ReactionTypePaid instances."""

    REACTIONTYPEPAIDS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "reaction_type_paid"

    @classmethod
    def register_reaction_type_paid(cls, reaction_type_paid_cls: Type) -> None:
        """Register a new reaction_type_paid handler."""
        instance = reaction_type_paid_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = reaction_type_paid_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.REACTIONTYPEPAIDS_REGISTRY[name] = reaction_type_paid_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.reaction_type_paid
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.REACTIONTYPEPAIDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
