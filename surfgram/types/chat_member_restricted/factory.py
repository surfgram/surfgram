from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatMemberRestrictedMeta(ABCMeta):
    """Metaclass for ChatMemberRestricted classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatMemberRestrictedsFactory.register_chat_member_restricted(new_class)
        return new_class


class ChatMemberRestrictedsFactory(TypesFactory):
    """Factory for creating ChatMemberRestricted instances."""

    CHATMEMBERRESTRICTEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_member_restricted"

    @classmethod
    def register_chat_member_restricted(cls, chat_member_restricted_cls: Type) -> None:
        """Register a new chat_member_restricted handler."""
        instance = chat_member_restricted_cls()
        for name in instance.__names__:
            cls.CHATMEMBERRESTRICTEDS_REGISTRY[name] = chat_member_restricted_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_member_restricted
        trigger_value = obj.can_send_audios
        return cls.CHATMEMBERRESTRICTEDS_REGISTRY.get(trigger_value)()
