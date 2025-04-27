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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "encrypted_passport_element"

    @classmethod
    def register_encrypted_passport_element(
        cls, encrypted_passport_element_cls: Type
    ) -> None:
        """Register a new encrypted_passport_element handler."""
        instance = encrypted_passport_element_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = encrypted_passport_element_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.ENCRYPTEDPASSPORTELEMENTS_REGISTRY[name] = (
                        encrypted_passport_element_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.encrypted_passport_element
        trigger_value = obj.data

        # Try to get specific handler first
        handler_cls = cls.ENCRYPTEDPASSPORTELEMENTS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
