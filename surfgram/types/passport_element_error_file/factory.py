from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PassportElementErrorFileMeta(ABCMeta):
    """Metaclass for PassportElementErrorFile classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PassportElementErrorFilesFactory.register_passport_element_error_file(
                new_class
            )
        return new_class


class PassportElementErrorFilesFactory(TypesFactory):
    """Factory for creating PassportElementErrorFile instances."""

    PASSPORTELEMENTERRORFILES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "passport_element_error_file"

    @classmethod
    def register_passport_element_error_file(
        cls, passport_element_error_file_cls: Type
    ) -> None:
        """Register a new passport_element_error_file handler."""
        instance = passport_element_error_file_cls()
        for name in instance.__names__:
            cls.PASSPORTELEMENTERRORFILES_REGISTRY[name] = (
                passport_element_error_file_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.passport_element_error_file
        trigger_value = obj.source
        return cls.PASSPORTELEMENTERRORFILES_REGISTRY.get(trigger_value)()
