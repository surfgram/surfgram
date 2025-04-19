from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BusinessIntroMeta(ABCMeta):
    """Metaclass for BusinessIntro classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BusinessIntrosFactory.register_business_intro(new_class)
        return new_class


class BusinessIntrosFactory(TypesFactory):
    """Factory for creating BusinessIntro instances."""

    BUSINESSINTROS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "business_intro"

    @classmethod
    def register_business_intro(cls, business_intro_cls: Type) -> None:
        """Register a new business_intro handler."""
        instance = business_intro_cls()
        for name in instance.__names__:
            cls.BUSINESSINTROS_REGISTRY[name] = business_intro_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.business_intro
        trigger_value = obj.title
        return cls.BUSINESSINTROS_REGISTRY.get(trigger_value)()
