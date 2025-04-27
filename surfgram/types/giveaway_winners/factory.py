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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "giveaway_winners"

    @classmethod
    def register_giveaway_winners(cls, giveaway_winners_cls: Type) -> None:
        """Register a new giveaway_winners handler."""
        instance = giveaway_winners_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = giveaway_winners_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.GIVEAWAYWINNERS_REGISTRY[name] = giveaway_winners_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.giveaway_winners
        trigger_value = obj.prize_description

        # Try to get specific handler first
        handler_cls = cls.GIVEAWAYWINNERS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
