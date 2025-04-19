from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PassportElementErrorSelfieMeta(ABCMeta):
    """Metaclass for PassportElementErrorSelfie classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PassportElementErrorSelfiesFactory.register_passport_element_error_selfie(
                new_class
            )
        return new_class


class PassportElementErrorSelfiesFactory(TypesFactory):
    """Factory for creating PassportElementErrorSelfie instances."""

    PASSPORTELEMENTERRORSELFIES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "passport_element_error_selfie"

    @classmethod
    def register_passport_element_error_selfie(
        cls, passport_element_error_selfie_cls: Type
    ) -> None:
        """Register a new passport_element_error_selfie handler."""
        instance = passport_element_error_selfie_cls()
        for name in instance.__names__:
            cls.PASSPORTELEMENTERRORSELFIES_REGISTRY[name] = (
                passport_element_error_selfie_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.passport_element_error_selfie
        trigger_value = obj.source
        return cls.PASSPORTELEMENTERRORSELFIES_REGISTRY.get(trigger_value)()
