from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class GiftsMeta(ABCMeta):
    """Metaclass for Gifts classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            GiftsFactory.register_gifts(new_class)
        return new_class


class GiftsFactory(TypesFactory):
    """Factory for creating Gifts instances."""

    GIFTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "gifts"

    @classmethod
    def register_gifts(cls, gifts_cls: Type) -> None:
        """Register a new gifts handler."""
        instance = gifts_cls()
        for name in instance.__names__:
            cls.GIFTS_REGISTRY[name] = gifts_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.gifts
        trigger_value = obj.gifts
        return cls.GIFTS_REGISTRY.get(trigger_value)()
