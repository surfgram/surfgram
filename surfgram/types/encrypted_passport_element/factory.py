from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class EncryptedPassportElementMeta(ABCMeta):
    """Metaclass for EncryptedPassportElement classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            EncryptedPassportElementsFactory.register_encrypted_passport_element(
                new_class
            )
        return new_class


class EncryptedPassportElementsFactory(TypesFactory):
    """Factory for creating EncryptedPassportElement instances."""

    ENCRYPTEDPASSPORTELEMENTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "encrypted_passport_element"

    @classmethod
    def register_encrypted_passport_element(
        cls, encrypted_passport_element_cls: Type
    ) -> None:
        """Register a new encrypted_passport_element handler."""
        instance = encrypted_passport_element_cls()
        for name in instance.__names__:
            cls.ENCRYPTEDPASSPORTELEMENTS_REGISTRY[name] = (
                encrypted_passport_element_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.encrypted_passport_element
        trigger_value = obj.data
        return cls.ENCRYPTEDPASSPORTELEMENTS_REGISTRY.get(trigger_value)()
