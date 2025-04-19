from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BotCommandScopeChatAdministratorsMeta(ABCMeta):
    """Metaclass for BotCommandScopeChatAdministrators classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BotCommandScopeChatAdministratorsFactory.register_bot_command_scope_chat_administrators(
                new_class
            )
        return new_class


class BotCommandScopeChatAdministratorsFactory(TypesFactory):
    """Factory for creating BotCommandScopeChatAdministrators instances."""

    BOTCOMMANDSCOPECHATADMINISTRATORS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "bot_command_scope_chat_administrators"

    @classmethod
    def register_bot_command_scope_chat_administrators(
        cls, bot_command_scope_chat_administrators_cls: Type
    ) -> None:
        """Register a new bot_command_scope_chat_administrators handler."""
        instance = bot_command_scope_chat_administrators_cls()
        for name in instance.__names__:
            cls.BOTCOMMANDSCOPECHATADMINISTRATORS_REGISTRY[name] = (
                bot_command_scope_chat_administrators_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.bot_command_scope_chat_administrators
        trigger_value = obj.type
        return cls.BOTCOMMANDSCOPECHATADMINISTRATORS_REGISTRY.get(trigger_value)()
