from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BotCommandScopeChatMemberMeta(ABCMeta):
    """Metaclass for BotCommandScopeChatMember classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BotCommandScopeChatMembersFactory.register_bot_command_scope_chat_member(
                new_class
            )
        return new_class


class BotCommandScopeChatMembersFactory(TypesFactory):
    """Factory for creating BotCommandScopeChatMember instances."""

    BOTCOMMANDSCOPECHATMEMBERS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "bot_command_scope_chat_member"

    @classmethod
    def register_bot_command_scope_chat_member(
        cls, bot_command_scope_chat_member_cls: Type
    ) -> None:
        """Register a new bot_command_scope_chat_member handler."""
        instance = bot_command_scope_chat_member_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = bot_command_scope_chat_member_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.BOTCOMMANDSCOPECHATMEMBERS_REGISTRY[name] = (
                        bot_command_scope_chat_member_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.bot_command_scope_chat_member
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.BOTCOMMANDSCOPECHATMEMBERS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
