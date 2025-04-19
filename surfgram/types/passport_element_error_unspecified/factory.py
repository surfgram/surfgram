from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PassportElementErrorUnspecifiedMeta(ABCMeta):
    """Metaclass for PassportElementErrorUnspecified classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PassportElementErrorUnspecifiedsFactory.register_passport_element_error_unspecified(
                new_class
            )
        return new_class


class PassportElementErrorUnspecifiedsFactory(TypesFactory):
    """Factory for creating PassportElementErrorUnspecified instances."""

    PASSPORTELEMENTERRORUNSPECIFIEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "passport_element_error_unspecified"

    @classmethod
    def register_passport_element_error_unspecified(
        cls, passport_element_error_unspecified_cls: Type
    ) -> None:
        """Register a new passport_element_error_unspecified handler."""
        instance = passport_element_error_unspecified_cls()
        for name in instance.__names__:
            cls.PASSPORTELEMENTERRORUNSPECIFIEDS_REGISTRY[name] = (
                passport_element_error_unspecified_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.passport_element_error_unspecified
        trigger_value = obj.source
        return cls.PASSPORTELEMENTERRORUNSPECIFIEDS_REGISTRY.get(trigger_value)()
