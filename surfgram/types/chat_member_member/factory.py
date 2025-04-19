from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatMemberMemberMeta(ABCMeta):
    """Metaclass for ChatMemberMember classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatMemberMembersFactory.register_chat_member_member(new_class)
        return new_class


class ChatMemberMembersFactory(TypesFactory):
    """Factory for creating ChatMemberMember instances."""

    CHATMEMBERMEMBERS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_member_member"

    @classmethod
    def register_chat_member_member(cls, chat_member_member_cls: Type) -> None:
        """Register a new chat_member_member handler."""
        instance = chat_member_member_cls()
        for name in instance.__names__:
            cls.CHATMEMBERMEMBERS_REGISTRY[name] = chat_member_member_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_member_member
        trigger_value = obj.status
        return cls.CHATMEMBERMEMBERS_REGISTRY.get(trigger_value)()
