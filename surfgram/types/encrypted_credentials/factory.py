from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class EncryptedCredentialsMeta(ABCMeta):
    """Metaclass for EncryptedCredentials classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            EncryptedCredentialsFactory.register_encrypted_credentials(new_class)
        return new_class


class EncryptedCredentialsFactory(TypesFactory):
    """Factory for creating EncryptedCredentials instances."""

    ENCRYPTEDCREDENTIALS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "encrypted_credentials"

    @classmethod
    def register_encrypted_credentials(cls, encrypted_credentials_cls: Type) -> None:
        """Register a new encrypted_credentials handler."""
        instance = encrypted_credentials_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = encrypted_credentials_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.ENCRYPTEDCREDENTIALS_REGISTRY[name] = encrypted_credentials_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.encrypted_credentials
        trigger_value = obj.data

        # Try to get specific handler first
        handler_cls = cls.ENCRYPTEDCREDENTIALS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
