from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class OwnedGiftUniqueMeta(ABCMeta):
    """Metaclass for OwnedGiftUnique classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            OwnedGiftUniquesFactory.register_owned_gift_unique(new_class)
        return new_class


class OwnedGiftUniquesFactory(TypesFactory):
    """Factory for creating OwnedGiftUnique instances."""

    OWNEDGIFTUNIQUES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "owned_gift_unique"

    @classmethod
    def register_owned_gift_unique(cls, owned_gift_unique_cls: Type) -> None:
        """Register a new owned_gift_unique handler."""
        instance = owned_gift_unique_cls()
        for name in instance.__names__:
            cls.OWNEDGIFTUNIQUES_REGISTRY[name] = owned_gift_unique_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.owned_gift_unique
        trigger_value = obj.type
        return cls.OWNEDGIFTUNIQUES_REGISTRY.get(trigger_value)()
