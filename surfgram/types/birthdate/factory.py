from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BirthdateMeta(ABCMeta):
    """Metaclass for Birthdate classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BirthdatesFactory.register_birthdate(new_class)
        return new_class


class BirthdatesFactory(TypesFactory):
    """Factory for creating Birthdate instances."""

    BIRTHDATES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "birthdate"

    @classmethod
    def register_birthdate(cls, birthdate_cls: Type) -> None:
        """Register a new birthdate handler."""
        instance = birthdate_cls()
        for name in instance.__names__:
            cls.BIRTHDATES_REGISTRY[name] = birthdate_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.birthdate
        trigger_value = obj.day
        return cls.BIRTHDATES_REGISTRY.get(trigger_value)()
