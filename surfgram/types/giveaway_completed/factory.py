from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class GiveawayCompletedMeta(ABCMeta):
    """Metaclass for GiveawayCompleted classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            GiveawayCompletedsFactory.register_giveaway_completed(new_class)
        return new_class


class GiveawayCompletedsFactory(TypesFactory):
    """Factory for creating GiveawayCompleted instances."""

    GIVEAWAYCOMPLETEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "giveaway_completed"

    @classmethod
    def register_giveaway_completed(cls, giveaway_completed_cls: Type) -> None:
        """Register a new giveaway_completed handler."""
        instance = giveaway_completed_cls()
        for name in instance.__names__:
            cls.GIVEAWAYCOMPLETEDS_REGISTRY[name] = giveaway_completed_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.giveaway_completed
        trigger_value = obj.winner_count
        return cls.GIVEAWAYCOMPLETEDS_REGISTRY.get(trigger_value)()
