from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatMemberAdministratorMeta(ABCMeta):
    """Metaclass for ChatMemberAdministrator classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatMemberAdministratorsFactory.register_chat_member_administrator(
                new_class
            )
        return new_class


class ChatMemberAdministratorsFactory(TypesFactory):
    """Factory for creating ChatMemberAdministrator instances."""

    CHATMEMBERADMINISTRATORS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_member_administrator"

    @classmethod
    def register_chat_member_administrator(
        cls, chat_member_administrator_cls: Type
    ) -> None:
        """Register a new chat_member_administrator handler."""
        instance = chat_member_administrator_cls()
        for name in instance.__names__:
            cls.CHATMEMBERADMINISTRATORS_REGISTRY[name] = chat_member_administrator_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_member_administrator
        trigger_value = obj.can_manage_video_chats
        return cls.CHATMEMBERADMINISTRATORS_REGISTRY.get(trigger_value)()
