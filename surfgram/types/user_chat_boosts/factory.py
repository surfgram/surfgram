from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class UserChatBoostsMeta(ABCMeta):
    """Metaclass for UserChatBoosts classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            UserChatBoostsFactory.register_user_chat_boosts(new_class)
        return new_class


class UserChatBoostsFactory(TypesFactory):
    """Factory for creating UserChatBoosts instances."""

    USERCHATBOOSTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "user_chat_boosts"

    @classmethod
    def register_user_chat_boosts(cls, user_chat_boosts_cls: Type) -> None:
        """Register a new user_chat_boosts handler."""
        instance = user_chat_boosts_cls()
        for name in instance.__names__:
            cls.USERCHATBOOSTS_REGISTRY[name] = user_chat_boosts_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.user_chat_boosts
        trigger_value = obj.boosts
        return cls.USERCHATBOOSTS_REGISTRY.get(trigger_value)()
