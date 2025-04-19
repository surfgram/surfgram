from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PassportElementErrorTranslationFileMeta(ABCMeta):
    """Metaclass for PassportElementErrorTranslationFile classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PassportElementErrorTranslationFilesFactory.register_passport_element_error_translation_file(
                new_class
            )
        return new_class


class PassportElementErrorTranslationFilesFactory(TypesFactory):
    """Factory for creating PassportElementErrorTranslationFile instances."""

    PASSPORTELEMENTERRORTRANSLATIONFILES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "passport_element_error_translation_file"

    @classmethod
    def register_passport_element_error_translation_file(
        cls, passport_element_error_translation_file_cls: Type
    ) -> None:
        """Register a new passport_element_error_translation_file handler."""
        instance = passport_element_error_translation_file_cls()
        for name in instance.__names__:
            cls.PASSPORTELEMENTERRORTRANSLATIONFILES_REGISTRY[name] = (
                passport_element_error_translation_file_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.passport_element_error_translation_file
        trigger_value = obj.source
        return cls.PASSPORTELEMENTERRORTRANSLATIONFILES_REGISTRY.get(trigger_value)()
