from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class UniqueGiftBackdropMeta(ABCMeta):
    """Metaclass for UniqueGiftBackdrop classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            UniqueGiftBackdropsFactory.register_unique_gift_backdrop(new_class)
        return new_class


class UniqueGiftBackdropsFactory(TypesFactory):
    """Factory for creating UniqueGiftBackdrop instances."""

    UNIQUEGIFTBACKDROPS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "unique_gift_backdrop"

    @classmethod
    def register_unique_gift_backdrop(cls, unique_gift_backdrop_cls: Type) -> None:
        """Register a new unique_gift_backdrop handler."""
        instance = unique_gift_backdrop_cls()
        for name in instance.__names__:
            cls.UNIQUEGIFTBACKDROPS_REGISTRY[name] = unique_gift_backdrop_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.unique_gift_backdrop
        trigger_value = obj.name
        return cls.UNIQUEGIFTBACKDROPS_REGISTRY.get(trigger_value)()
