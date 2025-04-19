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
    __type_name__ = "reaction_type_paid"

    @classmethod
    def register_reaction_type_paid(cls, reaction_type_paid_cls: Type) -> None:
        """Register a new reaction_type_paid handler."""
        instance = reaction_type_paid_cls()
        for name in instance.__names__:
            cls.REACTIONTYPEPAIDS_REGISTRY[name] = reaction_type_paid_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.reaction_type_paid
        trigger_value = obj.type
        return cls.REACTIONTYPEPAIDS_REGISTRY.get(trigger_value)()
