from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatBoostSourceGiveawayMeta(ABCMeta):
    """Metaclass for ChatBoostSourceGiveaway classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatBoostSourceGiveawaysFactory.register_chat_boost_source_giveaway(
                new_class
            )
        return new_class


class ChatBoostSourceGiveawaysFactory(TypesFactory):
    """Factory for creating ChatBoostSourceGiveaway instances."""

    CHATBOOSTSOURCEGIVEAWAYS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_boost_source_giveaway"

    @classmethod
    def register_chat_boost_source_giveaway(
        cls, chat_boost_source_giveaway_cls: Type
    ) -> None:
        """Register a new chat_boost_source_giveaway handler."""
        instance = chat_boost_source_giveaway_cls()
        for name in instance.__names__:
            cls.CHATBOOSTSOURCEGIVEAWAYS_REGISTRY[name] = chat_boost_source_giveaway_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_boost_source_giveaway
        trigger_value = obj.source
        return cls.CHATBOOSTSOURCEGIVEAWAYS_REGISTRY.get(trigger_value)()
