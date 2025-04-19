from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class UsersSharedMeta(ABCMeta):
    """Metaclass for UsersShared classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            UsersSharedsFactory.register_users_shared(new_class)
        return new_class


class UsersSharedsFactory(TypesFactory):
    """Factory for creating UsersShared instances."""

    USERSSHAREDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "users_shared"

    @classmethod
    def register_users_shared(cls, users_shared_cls: Type) -> None:
        """Register a new users_shared handler."""
        instance = users_shared_cls()
        for name in instance.__names__:
            cls.USERSSHAREDS_REGISTRY[name] = users_shared_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.users_shared
        trigger_value = obj.request_id
        return cls.USERSSHAREDS_REGISTRY.get(trigger_value)()
