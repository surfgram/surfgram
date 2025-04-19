from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PaidMediaInfoMeta(ABCMeta):
    """Metaclass for PaidMediaInfo classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PaidMediaInfosFactory.register_paid_media_info(new_class)
        return new_class


class PaidMediaInfosFactory(TypesFactory):
    """Factory for creating PaidMediaInfo instances."""

    PAIDMEDIAINFOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "paid_media_info"

    @classmethod
    def register_paid_media_info(cls, paid_media_info_cls: Type) -> None:
        """Register a new paid_media_info handler."""
        instance = paid_media_info_cls()
        for name in instance.__names__:
            cls.PAIDMEDIAINFOS_REGISTRY[name] = paid_media_info_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.paid_media_info
        trigger_value = obj.star_count
        return cls.PAIDMEDIAINFOS_REGISTRY.get(trigger_value)()
