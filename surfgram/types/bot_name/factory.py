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
    __type_name__ = "bot_name"

    @classmethod
    def register_bot_name(cls, bot_name_cls: Type) -> None:
        """Register a new bot_name handler."""
        instance = bot_name_cls()
        for name in instance.__names__:
            cls.BOTNAMES_REGISTRY[name] = bot_name_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.bot_name
        trigger_value = obj.name
        return cls.BOTNAMES_REGISTRY.get(trigger_value)()
