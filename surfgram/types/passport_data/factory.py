from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PassportDataMeta(ABCMeta):
    """Metaclass for PassportData classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PassportDataFactory.register_passport_data(new_class)
        return new_class


class PassportDataFactory(TypesFactory):
    """Factory for creating PassportData instances."""

    PASSPORTDATA_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "passport_data"

    @classmethod
    def register_passport_data(cls, passport_data_cls: Type) -> None:
        """Register a new passport_data handler."""
        instance = passport_data_cls()
        for name in instance.__names__:
            cls.PASSPORTDATA_REGISTRY[name] = passport_data_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.passport_data
        trigger_value = obj.data
        return cls.PASSPORTDATA_REGISTRY.get(trigger_value)()
