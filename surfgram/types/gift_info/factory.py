from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class GiftInfoMeta(ABCMeta):
    """Metaclass for GiftInfo classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            GiftInfosFactory.register_gift_info(new_class)
        return new_class


class GiftInfosFactory(TypesFactory):
    """Factory for creating GiftInfo instances."""

    GIFTINFOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "gift_info"

    @classmethod
    def register_gift_info(cls, gift_info_cls: Type) -> None:
        """Register a new gift_info handler."""
        instance = gift_info_cls()
        for name in instance.__names__:
            cls.GIFTINFOS_REGISTRY[name] = gift_info_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.gift_info
        trigger_value = obj.text
        return cls.GIFTINFOS_REGISTRY.get(trigger_value)()
