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
    __type_name__ = "bot_description"

    @classmethod
    def register_bot_description(cls, bot_description_cls: Type) -> None:
        """Register a new bot_description handler."""
        instance = bot_description_cls()
        for name in instance.__names__:
            cls.BOTDESCRIPTIONS_REGISTRY[name] = bot_description_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.bot_description
        trigger_value = obj.description
        return cls.BOTDESCRIPTIONS_REGISTRY.get(trigger_value)()
