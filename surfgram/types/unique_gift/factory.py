from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class UniqueGiftMeta(ABCMeta):
    """Metaclass for UniqueGift classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            UniqueGiftsFactory.register_unique_gift(new_class)
        return new_class


class UniqueGiftsFactory(TypesFactory):
    """Factory for creating UniqueGift instances."""

    UNIQUEGIFTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "unique_gift"

    @classmethod
    def register_unique_gift(cls, unique_gift_cls: Type) -> None:
        """Register a new unique_gift handler."""
        instance = unique_gift_cls()
        for name in instance.__names__:
            cls.UNIQUEGIFTS_REGISTRY[name] = unique_gift_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.unique_gift
        trigger_value = obj.base_name
        return cls.UNIQUEGIFTS_REGISTRY.get(trigger_value)()
