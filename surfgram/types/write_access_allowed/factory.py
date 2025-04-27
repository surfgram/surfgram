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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "write_access_allowed"

    @classmethod
    def register_write_access_allowed(cls, write_access_allowed_cls: Type) -> None:
        """Register a new write_access_allowed handler."""
        instance = write_access_allowed_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = write_access_allowed_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.WRITEACCESSALLOWEDS_REGISTRY[name] = write_access_allowed_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.write_access_allowed
        trigger_value = obj.web_app_name

        # Try to get specific handler first
        handler_cls = cls.WRITEACCESSALLOWEDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
