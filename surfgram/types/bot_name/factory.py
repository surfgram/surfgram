from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BotNameMeta(ABCMeta):
    """Metaclass for BotName classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BotNamesFactory.register_bot_name(new_class)
        return new_class


class BotNamesFactory(TypesFactory):
    """Factory for creating BotName instances."""

    BOTNAMES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "bot_name"

    @classmethod
    def register_bot_name(cls, bot_name_cls: Type) -> None:
        """Register a new bot_name handler."""
        instance = bot_name_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = bot_name_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.BOTNAMES_REGISTRY[name] = bot_name_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.bot_name
        trigger_value = obj.name

        # Try to get specific handler first
        handler_cls = cls.BOTNAMES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
