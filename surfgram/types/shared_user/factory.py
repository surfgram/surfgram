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
    __type_name__ = "shared_user"

    @classmethod
    def register_shared_user(cls, shared_user_cls: Type) -> None:
        """Register a new shared_user handler."""
        instance = shared_user_cls()
        for name in instance.__names__:
            cls.SHAREDUSERS_REGISTRY[name] = shared_user_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.shared_user
        trigger_value = obj.photo
        return cls.SHAREDUSERS_REGISTRY.get(trigger_value)()
