from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class GiveawayWinnersMeta(ABCMeta):
    """Metaclass for GiveawayWinners classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            GiveawayWinnersFactory.register_giveaway_winners(new_class)
        return new_class


class GiveawayWinnersFactory(TypesFactory):
    """Factory for creating GiveawayWinners instances."""

    GIVEAWAYWINNERS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "giveaway_winners"

    @classmethod
    def register_giveaway_winners(cls, giveaway_winners_cls: Type) -> None:
        """Register a new giveaway_winners handler."""
        instance = giveaway_winners_cls()
        for name in instance.__names__:
            cls.GIVEAWAYWINNERS_REGISTRY[name] = giveaway_winners_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.giveaway_winners
        trigger_value = obj.prize_description
        return cls.GIVEAWAYWINNERS_REGISTRY.get(trigger_value)()
