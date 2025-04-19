from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BotCommandScopeAllPrivateChatsMeta(ABCMeta):
    """Metaclass for BotCommandScopeAllPrivateChats classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BotCommandScopeAllPrivateChatsFactory.register_bot_command_scope_all_private_chats(
                new_class
            )
        return new_class


class BotCommandScopeAllPrivateChatsFactory(TypesFactory):
    """Factory for creating BotCommandScopeAllPrivateChats instances."""

    BOTCOMMANDSCOPEALLPRIVATECHATS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "bot_command_scope_all_private_chats"

    @classmethod
    def register_bot_command_scope_all_private_chats(
        cls, bot_command_scope_all_private_chats_cls: Type
    ) -> None:
        """Register a new bot_command_scope_all_private_chats handler."""
        instance = bot_command_scope_all_private_chats_cls()
        for name in instance.__names__:
            cls.BOTCOMMANDSCOPEALLPRIVATECHATS_REGISTRY[name] = (
                bot_command_scope_all_private_chats_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.bot_command_scope_all_private_chats
        trigger_value = obj.type
        return cls.BOTCOMMANDSCOPEALLPRIVATECHATS_REGISTRY.get(trigger_value)()
