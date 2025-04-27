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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "passport_element_error_translation_file"

    @classmethod
    def register_passport_element_error_translation_file(
        cls, passport_element_error_translation_file_cls: Type
    ) -> None:
        """Register a new passport_element_error_translation_file handler."""
        instance = passport_element_error_translation_file_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = passport_element_error_translation_file_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.PASSPORTELEMENTERRORTRANSLATIONFILES_REGISTRY[name] = (
                        passport_element_error_translation_file_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.passport_element_error_translation_file
        trigger_value = obj.source

        # Try to get specific handler first
        handler_cls = cls.PASSPORTELEMENTERRORTRANSLATIONFILES_REGISTRY.get(
            trigger_value
        )

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
