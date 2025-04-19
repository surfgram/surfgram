from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class WriteAccessAllowedMeta(ABCMeta):
    """Metaclass for WriteAccessAllowed classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            WriteAccessAllowedsFactory.register_write_access_allowed(new_class)
        return new_class


class WriteAccessAllowedsFactory(TypesFactory):
    """Factory for creating WriteAccessAllowed instances."""

    WRITEACCESSALLOWEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "write_access_allowed"

    @classmethod
    def register_write_access_allowed(cls, write_access_allowed_cls: Type) -> None:
        """Register a new write_access_allowed handler."""
        instance = write_access_allowed_cls()
        for name in instance.__names__:
            cls.WRITEACCESSALLOWEDS_REGISTRY[name] = write_access_allowed_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.write_access_allowed
        trigger_value = obj.web_app_name
        return cls.WRITEACCESSALLOWEDS_REGISTRY.get(trigger_value)()
