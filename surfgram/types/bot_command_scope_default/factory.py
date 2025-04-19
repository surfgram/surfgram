from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BotCommandScopeDefaultMeta(ABCMeta):
    """Metaclass for BotCommandScopeDefault classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BotCommandScopeDefaultsFactory.register_bot_command_scope_default(new_class)
        return new_class


class BotCommandScopeDefaultsFactory(TypesFactory):
    """Factory for creating BotCommandScopeDefault instances."""

    BOTCOMMANDSCOPEDEFAULTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "bot_command_scope_default"

    @classmethod
    def register_bot_command_scope_default(
        cls, bot_command_scope_default_cls: Type
    ) -> None:
        """Register a new bot_command_scope_default handler."""
        instance = bot_command_scope_default_cls()
        for name in instance.__names__:
            cls.BOTCOMMANDSCOPEDEFAULTS_REGISTRY[name] = bot_command_scope_default_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.bot_command_scope_default
        trigger_value = obj.type
        return cls.BOTCOMMANDSCOPEDEFAULTS_REGISTRY.get(trigger_value)()
