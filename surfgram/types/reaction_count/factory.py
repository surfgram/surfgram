from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ReactionCountMeta(ABCMeta):
    """Metaclass for ReactionCount classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ReactionCountsFactory.register_reaction_count(new_class)
        return new_class


class ReactionCountsFactory(TypesFactory):
    """Factory for creating ReactionCount instances."""

    REACTIONCOUNTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "reaction_count"

    @classmethod
    def register_reaction_count(cls, reaction_count_cls: Type) -> None:
        """Register a new reaction_count handler."""
        instance = reaction_count_cls()
        for name in instance.__names__:
            cls.REACTIONCOUNTS_REGISTRY[name] = reaction_count_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.reaction_count
        trigger_value = obj.type
        return cls.REACTIONCOUNTS_REGISTRY.get(trigger_value)()
