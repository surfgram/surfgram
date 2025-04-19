from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatMemberBannedMeta(ABCMeta):
    """Metaclass for ChatMemberBanned classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatMemberBannedsFactory.register_chat_member_banned(new_class)
        return new_class


class ChatMemberBannedsFactory(TypesFactory):
    """Factory for creating ChatMemberBanned instances."""

    CHATMEMBERBANNEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_member_banned"

    @classmethod
    def register_chat_member_banned(cls, chat_member_banned_cls: Type) -> None:
        """Register a new chat_member_banned handler."""
        instance = chat_member_banned_cls()
        for name in instance.__names__:
            cls.CHATMEMBERBANNEDS_REGISTRY[name] = chat_member_banned_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_member_banned
        trigger_value = obj.status
        return cls.CHATMEMBERBANNEDS_REGISTRY.get(trigger_value)()
