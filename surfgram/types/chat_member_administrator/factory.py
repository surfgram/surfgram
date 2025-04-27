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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "chat_member_administrator"

    @classmethod
    def register_chat_member_administrator(
        cls, chat_member_administrator_cls: Type
    ) -> None:
        """Register a new chat_member_administrator handler."""
        instance = chat_member_administrator_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = chat_member_administrator_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.CHATMEMBERADMINISTRATORS_REGISTRY[name] = (
                        chat_member_administrator_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_member_administrator
        trigger_value = obj.can_manage_video_chats

        # Try to get specific handler first
        handler_cls = cls.CHATMEMBERADMINISTRATORS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
