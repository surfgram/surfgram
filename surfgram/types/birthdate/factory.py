from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BirthdateMeta(ABCMeta):
    """Metaclass for Birthdate classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BirthdatesFactory.register_birthdate(new_class)
        return new_class


class BirthdatesFactory(TypesFactory):
    """Factory for creating Birthdate instances."""

    BIRTHDATES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "birthdate"

    @classmethod
    def register_birthdate(cls, birthdate_cls: Type) -> None:
        """Register a new birthdate handler."""
        instance = birthdate_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = birthdate_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.BIRTHDATES_REGISTRY[name] = birthdate_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.birthdate
        trigger_value = obj.day

        # Try to get specific handler first
        handler_cls = cls.BIRTHDATES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
