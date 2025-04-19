from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class UserMeta(ABCMeta):
    """Metaclass for User classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            UsersFactory.register_user(new_class)
        return new_class


class UsersFactory(TypesFactory):
    """Factory for creating User instances."""

    USERS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "user"

    @classmethod
    def register_user(cls, user_cls: Type) -> None:
        """Register a new user handler."""
        instance = user_cls()
        for name in instance.__names__:
            cls.USERS_REGISTRY[name] = user_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.user
        trigger_value = obj.first_name
        return cls.USERS_REGISTRY.get(trigger_value)()
