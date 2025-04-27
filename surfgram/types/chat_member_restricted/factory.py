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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "chat_member_restricted"

    @classmethod
    def register_chat_member_restricted(cls, chat_member_restricted_cls: Type) -> None:
        """Register a new chat_member_restricted handler."""
        instance = chat_member_restricted_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = chat_member_restricted_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.CHATMEMBERRESTRICTEDS_REGISTRY[name] = (
                        chat_member_restricted_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_member_restricted
        trigger_value = obj.can_send_audios

        # Try to get specific handler first
        handler_cls = cls.CHATMEMBERRESTRICTEDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
