from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class GiveawayMeta(ABCMeta):
    """Metaclass for Giveaway classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            GiveawaysFactory.register_giveaway(new_class)
        return new_class


class GiveawaysFactory(TypesFactory):
    """Factory for creating Giveaway instances."""

    GIVEAWAYS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "giveaway"

    @classmethod
    def register_giveaway(cls, giveaway_cls: Type) -> None:
        """Register a new giveaway handler."""
        instance = giveaway_cls()
        for name in instance.__names__:
            cls.GIVEAWAYS_REGISTRY[name] = giveaway_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.giveaway
        trigger_value = obj.prize_description
        return cls.GIVEAWAYS_REGISTRY.get(trigger_value)()
