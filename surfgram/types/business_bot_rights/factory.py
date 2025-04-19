from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BusinessBotRightsMeta(ABCMeta):
    """Metaclass for BusinessBotRights classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BusinessBotRightsFactory.register_business_bot_rights(new_class)
        return new_class


class BusinessBotRightsFactory(TypesFactory):
    """Factory for creating BusinessBotRights instances."""

    BUSINESSBOTRIGHTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "business_bot_rights"

    @classmethod
    def register_business_bot_rights(cls, business_bot_rights_cls: Type) -> None:
        """Register a new business_bot_rights handler."""
        instance = business_bot_rights_cls()
        for name in instance.__names__:
            cls.BUSINESSBOTRIGHTS_REGISTRY[name] = business_bot_rights_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.business_bot_rights
        trigger_value = obj.can_edit_profile_photo
        return cls.BUSINESSBOTRIGHTS_REGISTRY.get(trigger_value)()
