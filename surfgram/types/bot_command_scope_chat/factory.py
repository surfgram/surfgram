from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BotCommandScopeChatMeta(ABCMeta):
    """Metaclass for BotCommandScopeChat classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BotCommandScopeChatsFactory.register_bot_command_scope_chat(new_class)
        return new_class


class BotCommandScopeChatsFactory(TypesFactory):
    """Factory for creating BotCommandScopeChat instances."""

    BOTCOMMANDSCOPECHATS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "bot_command_scope_chat"

    @classmethod
    def register_bot_command_scope_chat(cls, bot_command_scope_chat_cls: Type) -> None:
        """Register a new bot_command_scope_chat handler."""
        instance = bot_command_scope_chat_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = bot_command_scope_chat_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.BOTCOMMANDSCOPECHATS_REGISTRY[name] = bot_command_scope_chat_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.bot_command_scope_chat
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.BOTCOMMANDSCOPECHATS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
