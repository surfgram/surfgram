from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BotCommandScopeAllChatAdministratorsMeta(ABCMeta):
    """Metaclass for BotCommandScopeAllChatAdministrators classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BotCommandScopeAllChatAdministratorsFactory.register_bot_command_scope_all_chat_administrators(
                new_class
            )
        return new_class


class BotCommandScopeAllChatAdministratorsFactory(TypesFactory):
    """Factory for creating BotCommandScopeAllChatAdministrators instances."""

    BOTCOMMANDSCOPEALLCHATADMINISTRATORS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "bot_command_scope_all_chat_administrators"

    @classmethod
    def register_bot_command_scope_all_chat_administrators(
        cls, bot_command_scope_all_chat_administrators_cls: Type
    ) -> None:
        """Register a new bot_command_scope_all_chat_administrators handler."""
        instance = bot_command_scope_all_chat_administrators_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = bot_command_scope_all_chat_administrators_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.BOTCOMMANDSCOPEALLCHATADMINISTRATORS_REGISTRY[name] = (
                        bot_command_scope_all_chat_administrators_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.bot_command_scope_all_chat_administrators
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.BOTCOMMANDSCOPEALLCHATADMINISTRATORS_REGISTRY.get(
            trigger_value
        )

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
