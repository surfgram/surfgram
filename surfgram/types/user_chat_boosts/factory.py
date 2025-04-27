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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "user_chat_boosts"

    @classmethod
    def register_user_chat_boosts(cls, user_chat_boosts_cls: Type) -> None:
        """Register a new user_chat_boosts handler."""
        instance = user_chat_boosts_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = user_chat_boosts_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.USERCHATBOOSTS_REGISTRY[name] = user_chat_boosts_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.user_chat_boosts
        trigger_value = obj.boosts

        # Try to get specific handler first
        handler_cls = cls.USERCHATBOOSTS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
