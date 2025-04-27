from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class DiceMeta(ABCMeta):
    """Metaclass for Dice classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            DiceFactory.register_dice(new_class)
        return new_class


class DiceFactory(TypesFactory):
    """Factory for creating Dice instances."""

    DICE_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "dice"

    @classmethod
    def register_dice(cls, dice_cls: Type) -> None:
        """Register a new dice handler."""
        instance = dice_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = dice_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.DICE_REGISTRY[name] = dice_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.dice
        trigger_value = obj.emoji

        # Try to get specific handler first
        handler_cls = cls.DICE_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
