from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class GiveawayCreatedMeta(ABCMeta):
    """Metaclass for GiveawayCreated classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            GiveawayCreatedsFactory.register_giveaway_created(new_class)
        return new_class


class GiveawayCreatedsFactory(TypesFactory):
    """Factory for creating GiveawayCreated instances."""

    GIVEAWAYCREATEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "giveaway_created"

    @classmethod
    def register_giveaway_created(cls, giveaway_created_cls: Type) -> None:
        """Register a new giveaway_created handler."""
        instance = giveaway_created_cls()
        for name in instance.__names__:
            cls.GIVEAWAYCREATEDS_REGISTRY[name] = giveaway_created_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.giveaway_created
        trigger_value = obj.prize_star_count
        return cls.GIVEAWAYCREATEDS_REGISTRY.get(trigger_value)()
