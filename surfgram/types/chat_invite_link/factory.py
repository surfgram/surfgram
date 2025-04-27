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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "chat_invite_link"

    @classmethod
    def register_chat_invite_link(cls, chat_invite_link_cls: Type) -> None:
        """Register a new chat_invite_link handler."""
        instance = chat_invite_link_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = chat_invite_link_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.CHATINVITELINKS_REGISTRY[name] = chat_invite_link_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_invite_link
        trigger_value = obj.invite_link

        # Try to get specific handler first
        handler_cls = cls.CHATINVITELINKS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
