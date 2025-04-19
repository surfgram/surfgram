from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PassportElementErrorFrontSideMeta(ABCMeta):
    """Metaclass for PassportElementErrorFrontSide classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PassportElementErrorFrontSidesFactory.register_passport_element_error_front_side(
                new_class
            )
        return new_class


class PassportElementErrorFrontSidesFactory(TypesFactory):
    """Factory for creating PassportElementErrorFrontSide instances."""

    PASSPORTELEMENTERRORFRONTSIDES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "passport_element_error_front_side"

    @classmethod
    def register_passport_element_error_front_side(
        cls, passport_element_error_front_side_cls: Type
    ) -> None:
        """Register a new passport_element_error_front_side handler."""
        instance = passport_element_error_front_side_cls()
        for name in instance.__names__:
            cls.PASSPORTELEMENTERRORFRONTSIDES_REGISTRY[name] = (
                passport_element_error_front_side_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.passport_element_error_front_side
        trigger_value = obj.source
        return cls.PASSPORTELEMENTERRORFRONTSIDES_REGISTRY.get(trigger_value)()
