from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatInviteLinkMeta(ABCMeta):
    """Metaclass for ChatInviteLink classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatInviteLinksFactory.register_chat_invite_link(new_class)
        return new_class


class ChatInviteLinksFactory(TypesFactory):
    """Factory for creating ChatInviteLink instances."""

    CHATINVITELINKS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_invite_link"

    @classmethod
    def register_chat_invite_link(cls, chat_invite_link_cls: Type) -> None:
        """Register a new chat_invite_link handler."""
        instance = chat_invite_link_cls()
        for name in instance.__names__:
            cls.CHATINVITELINKS_REGISTRY[name] = chat_invite_link_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_invite_link
        trigger_value = obj.invite_link
        return cls.CHATINVITELINKS_REGISTRY.get(trigger_value)()
