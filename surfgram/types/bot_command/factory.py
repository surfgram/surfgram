from typing import Optional, Type, Dict, Any
from abc import ABCMeta
from surfgram.types import TypesFactory


class BotCommandMeta(ABCMeta):
    """Metaclass for BotCommand classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and getattr(new_class, "__is_active__", False):
            BotCommandsFactory.register_bot_command(new_class)
        return new_class


class BotCommandsFactory(TypesFactory):
    """Factory for creating BotCommand instances."""

    COMMANDS: Dict[str, Type] = {}
    __type_name__ = "bot_command"

    @classmethod
    def register_bot_command(cls, bot_command_cls: Type) -> None:
        """Register a new bot_command handler."""
        # Create instance only if needed for getting names
        command_obj = bot_command_cls()
        for command_name in command_obj.__names__:
            cls.COMMANDS[command_name] = bot_command_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        if update.message and update.message.text:
            text = update.message.text
            if text.startswith("/"):
                command_triggers = text.split(" ")
                command_name = command_triggers[0][1:]  # leading slash is exile

                command_class = cls.COMMANDS.get(command_name)
                if command_class:
                    return command_class()
        return None
