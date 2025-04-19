from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatMemberOwnerMeta(ABCMeta):
    """Metaclass for ChatMemberOwner classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatMemberOwnersFactory.register_chat_member_owner(new_class)
        return new_class


class ChatMemberOwnersFactory(TypesFactory):
    """Factory for creating ChatMemberOwner instances."""

    CHATMEMBEROWNERS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_member_owner"

    @classmethod
    def register_chat_member_owner(cls, chat_member_owner_cls: Type) -> None:
        """Register a new chat_member_owner handler."""
        instance = chat_member_owner_cls()
        for name in instance.__names__:
            cls.CHATMEMBEROWNERS_REGISTRY[name] = chat_member_owner_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_member_owner
        trigger_value = obj.custom_title
        return cls.CHATMEMBEROWNERS_REGISTRY.get(trigger_value)()
