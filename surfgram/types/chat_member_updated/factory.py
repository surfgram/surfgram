from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatMemberUpdatedMeta(ABCMeta):
    """Metaclass for ChatMemberUpdated classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatMemberUpdatedsFactory.register_chat_member_updated(new_class)
        return new_class


class ChatMemberUpdatedsFactory(TypesFactory):
    """Factory for creating ChatMemberUpdated instances."""

    CHATMEMBERUPDATEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_member_updated"

    @classmethod
    def register_chat_member_updated(cls, chat_member_updated_cls: Type) -> None:
        """Register a new chat_member_updated handler."""
        instance = chat_member_updated_cls()
        for name in instance.__names__:
            cls.CHATMEMBERUPDATEDS_REGISTRY[name] = chat_member_updated_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_member_updated
        trigger_value = obj.old_chat_member
        return cls.CHATMEMBERUPDATEDS_REGISTRY.get(trigger_value)()
