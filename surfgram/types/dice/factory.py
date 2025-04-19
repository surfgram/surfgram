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
    __type_name__ = "dice"

    @classmethod
    def register_dice(cls, dice_cls: Type) -> None:
        """Register a new dice handler."""
        instance = dice_cls()
        for name in instance.__names__:
            cls.DICE_REGISTRY[name] = dice_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.dice
        trigger_value = obj.emoji
        return cls.DICE_REGISTRY.get(trigger_value)()
