from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class GiftMeta(ABCMeta):
    """Metaclass for Gift classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            GiftsFactory.register_gift(new_class)
        return new_class


class GiftsFactory(TypesFactory):
    """Factory for creating Gift instances."""

    GIFTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "gift"

    @classmethod
    def register_gift(cls, gift_cls: Type) -> None:
        """Register a new gift handler."""
        instance = gift_cls()
        for name in instance.__names__:
            cls.GIFTS_REGISTRY[name] = gift_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.gift
        trigger_value = obj.sticker
        return cls.GIFTS_REGISTRY.get(trigger_value)()
