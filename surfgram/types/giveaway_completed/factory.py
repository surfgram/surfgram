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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "giveaway_completed"

    @classmethod
    def register_giveaway_completed(cls, giveaway_completed_cls: Type) -> None:
        """Register a new giveaway_completed handler."""
        instance = giveaway_completed_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = giveaway_completed_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.GIVEAWAYCOMPLETEDS_REGISTRY[name] = giveaway_completed_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.giveaway_completed
        trigger_value = obj.winner_count

        # Try to get specific handler first
        handler_cls = cls.GIVEAWAYCOMPLETEDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
