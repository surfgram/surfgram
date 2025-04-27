from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class SharedUserMeta(ABCMeta):
    """Metaclass for SharedUser classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            SharedUsersFactory.register_shared_user(new_class)
        return new_class


class SharedUsersFactory(TypesFactory):
    """Factory for creating SharedUser instances."""

    SHAREDUSERS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "shared_user"

    @classmethod
    def register_shared_user(cls, shared_user_cls: Type) -> None:
        """Register a new shared_user handler."""
        instance = shared_user_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = shared_user_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.SHAREDUSERS_REGISTRY[name] = shared_user_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.shared_user
        trigger_value = obj.photo

        # Try to get specific handler first
        handler_cls = cls.SHAREDUSERS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
