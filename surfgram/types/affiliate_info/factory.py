from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class AffiliateInfoMeta(ABCMeta):
    """Metaclass for AffiliateInfo classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            AffiliateInfosFactory.register_affiliate_info(new_class)
        return new_class


class AffiliateInfosFactory(TypesFactory):
    """Factory for creating AffiliateInfo instances."""

    AFFILIATEINFOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "affiliate_info"

    @classmethod
    def register_affiliate_info(cls, affiliate_info_cls: Type) -> None:
        """Register a new affiliate_info handler."""
        instance = affiliate_info_cls()
        for name in instance.__names__:
            cls.AFFILIATEINFOS_REGISTRY[name] = affiliate_info_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.affiliate_info
        trigger_value = obj.affiliate_user
        return cls.AFFILIATEINFOS_REGISTRY.get(trigger_value)()
