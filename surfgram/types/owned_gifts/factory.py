from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class OwnedGiftsMeta(ABCMeta):
    """Metaclass for OwnedGifts classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            OwnedGiftsFactory.register_owned_gifts(new_class)
        return new_class


class OwnedGiftsFactory(TypesFactory):
    """Factory for creating OwnedGifts instances."""

    OWNEDGIFTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "owned_gifts"

    @classmethod
    def register_owned_gifts(cls, owned_gifts_cls: Type) -> None:
        """Register a new owned_gifts handler."""
        instance = owned_gifts_cls()
        for name in instance.__names__:
            cls.OWNEDGIFTS_REGISTRY[name] = owned_gifts_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.owned_gifts
        trigger_value = obj.next_offset
        return cls.OWNEDGIFTS_REGISTRY.get(trigger_value)()
