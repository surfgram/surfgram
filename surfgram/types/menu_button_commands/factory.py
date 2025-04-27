from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class MenuButtonCommandsMeta(ABCMeta):
    """Metaclass for MenuButtonCommands classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            MenuButtonCommandsFactory.register_menu_button_commands(new_class)
        return new_class


class MenuButtonCommandsFactory(TypesFactory):
    """Factory for creating MenuButtonCommands instances."""

    MENUBUTTONCOMMANDS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "menu_button_commands"

    @classmethod
    def register_menu_button_commands(cls, menu_button_commands_cls: Type) -> None:
        """Register a new menu_button_commands handler."""
        instance = menu_button_commands_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = menu_button_commands_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.MENUBUTTONCOMMANDS_REGISTRY[name] = menu_button_commands_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.menu_button_commands
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.MENUBUTTONCOMMANDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
