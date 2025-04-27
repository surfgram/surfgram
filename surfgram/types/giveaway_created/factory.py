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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "giveaway_created"

    @classmethod
    def register_giveaway_created(cls, giveaway_created_cls: Type) -> None:
        """Register a new giveaway_created handler."""
        instance = giveaway_created_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = giveaway_created_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.GIVEAWAYCREATEDS_REGISTRY[name] = giveaway_created_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.giveaway_created
        trigger_value = obj.prize_star_count

        # Try to get specific handler first
        handler_cls = cls.GIVEAWAYCREATEDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
