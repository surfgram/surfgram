from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class UniqueGiftInfoMeta(ABCMeta):
    """Metaclass for UniqueGiftInfo classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            UniqueGiftInfosFactory.register_unique_gift_info(new_class)
        return new_class


class UniqueGiftInfosFactory(TypesFactory):
    """Factory for creating UniqueGiftInfo instances."""

    UNIQUEGIFTINFOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "unique_gift_info"

    @classmethod
    def register_unique_gift_info(cls, unique_gift_info_cls: Type) -> None:
        """Register a new unique_gift_info handler."""
        instance = unique_gift_info_cls()
        for name in instance.__names__:
            cls.UNIQUEGIFTINFOS_REGISTRY[name] = unique_gift_info_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.unique_gift_info
        trigger_value = obj.origin
        return cls.UNIQUEGIFTINFOS_REGISTRY.get(trigger_value)()
