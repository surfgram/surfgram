from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class MessageOriginUserMeta(ABCMeta):
    """Metaclass for MessageOriginUser classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            MessageOriginUsersFactory.register_message_origin_user(new_class)
        return new_class


class MessageOriginUsersFactory(TypesFactory):
    """Factory for creating MessageOriginUser instances."""

    MESSAGEORIGINUSERS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "message_origin_user"

    @classmethod
    def register_message_origin_user(cls, message_origin_user_cls: Type) -> None:
        """Register a new message_origin_user handler."""
        instance = message_origin_user_cls()
        for name in instance.__names__:
            cls.MESSAGEORIGINUSERS_REGISTRY[name] = message_origin_user_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.message_origin_user
        trigger_value = obj.type
        return cls.MESSAGEORIGINUSERS_REGISTRY.get(trigger_value)()
