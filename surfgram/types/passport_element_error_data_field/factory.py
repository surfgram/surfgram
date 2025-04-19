from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PassportElementErrorDataFieldMeta(ABCMeta):
    """Metaclass for PassportElementErrorDataField classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PassportElementErrorDataFieldsFactory.register_passport_element_error_data_field(
                new_class
            )
        return new_class


class PassportElementErrorDataFieldsFactory(TypesFactory):
    """Factory for creating PassportElementErrorDataField instances."""

    PASSPORTELEMENTERRORDATAFIELDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "passport_element_error_data_field"

    @classmethod
    def register_passport_element_error_data_field(
        cls, passport_element_error_data_field_cls: Type
    ) -> None:
        """Register a new passport_element_error_data_field handler."""
        instance = passport_element_error_data_field_cls()
        for name in instance.__names__:
            cls.PASSPORTELEMENTERRORDATAFIELDS_REGISTRY[name] = (
                passport_element_error_data_field_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.passport_element_error_data_field
        trigger_value = obj.data_hash
        return cls.PASSPORTELEMENTERRORDATAFIELDS_REGISTRY.get(trigger_value)()
