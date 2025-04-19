from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatBoostSourcePremiumMeta(ABCMeta):
    """Metaclass for ChatBoostSourcePremium classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatBoostSourcePremiumsFactory.register_chat_boost_source_premium(new_class)
        return new_class


class ChatBoostSourcePremiumsFactory(TypesFactory):
    """Factory for creating ChatBoostSourcePremium instances."""

    CHATBOOSTSOURCEPREMIUMS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_boost_source_premium"

    @classmethod
    def register_chat_boost_source_premium(
        cls, chat_boost_source_premium_cls: Type
    ) -> None:
        """Register a new chat_boost_source_premium handler."""
        instance = chat_boost_source_premium_cls()
        for name in instance.__names__:
            cls.CHATBOOSTSOURCEPREMIUMS_REGISTRY[name] = chat_boost_source_premium_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_boost_source_premium
        trigger_value = obj.source
        return cls.CHATBOOSTSOURCEPREMIUMS_REGISTRY.get(trigger_value)()
