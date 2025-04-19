from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class OwnedGiftRegularMeta(ABCMeta):
    """Metaclass for OwnedGiftRegular classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            OwnedGiftRegularsFactory.register_owned_gift_regular(new_class)
        return new_class


class OwnedGiftRegularsFactory(TypesFactory):
    """Factory for creating OwnedGiftRegular instances."""

    OWNEDGIFTREGULARS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "owned_gift_regular"

    @classmethod
    def register_owned_gift_regular(cls, owned_gift_regular_cls: Type) -> None:
        """Register a new owned_gift_regular handler."""
        instance = owned_gift_regular_cls()
        for name in instance.__names__:
            cls.OWNEDGIFTREGULARS_REGISTRY[name] = owned_gift_regular_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.owned_gift_regular
        trigger_value = obj.text
        return cls.OWNEDGIFTREGULARS_REGISTRY.get(trigger_value)()
