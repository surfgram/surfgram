from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BotShortDescriptionMeta(ABCMeta):
    """Metaclass for BotShortDescription classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BotShortDescriptionsFactory.register_bot_short_description(new_class)
        return new_class


class BotShortDescriptionsFactory(TypesFactory):
    """Factory for creating BotShortDescription instances."""

    BOTSHORTDESCRIPTIONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "bot_short_description"

    @classmethod
    def register_bot_short_description(cls, bot_short_description_cls: Type) -> None:
        """Register a new bot_short_description handler."""
        instance = bot_short_description_cls()
        for name in instance.__names__:
            cls.BOTSHORTDESCRIPTIONS_REGISTRY[name] = bot_short_description_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.bot_short_description
        trigger_value = obj.short_description
        return cls.BOTSHORTDESCRIPTIONS_REGISTRY.get(trigger_value)()
