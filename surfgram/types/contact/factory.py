from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ContactMeta(ABCMeta):
    """Metaclass for Contact classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ContactsFactory.register_contact(new_class)
        return new_class


class ContactsFactory(TypesFactory):
    """Factory for creating Contact instances."""

    CONTACTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "contact"

    @classmethod
    def register_contact(cls, contact_cls: Type) -> None:
        """Register a new contact handler."""
        instance = contact_cls()
        for name in instance.__names__:
            cls.CONTACTS_REGISTRY[name] = contact_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.contact
        trigger_value = obj.phone_number
        return cls.CONTACTS_REGISTRY.get(trigger_value)()
