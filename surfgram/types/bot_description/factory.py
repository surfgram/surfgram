from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BotDescriptionMeta(ABCMeta):
    """Metaclass for BotDescription classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BotDescriptionsFactory.register_bot_description(new_class)
        return new_class


class BotDescriptionsFactory(TypesFactory):
    """Factory for creating BotDescription instances."""

    BOTDESCRIPTIONS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "bot_description"

    @classmethod
    def register_bot_description(cls, bot_description_cls: Type) -> None:
        """Register a new bot_description handler."""
        instance = bot_description_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = bot_description_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.BOTDESCRIPTIONS_REGISTRY[name] = bot_description_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.bot_description
        trigger_value = obj.description

        # Try to get specific handler first
        handler_cls = cls.BOTDESCRIPTIONS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
