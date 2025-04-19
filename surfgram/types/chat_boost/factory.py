from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatBoostMeta(ABCMeta):
    """Metaclass for ChatBoost classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatBoostsFactory.register_chat_boost(new_class)
        return new_class


class ChatBoostsFactory(TypesFactory):
    """Factory for creating ChatBoost instances."""

    CHATBOOSTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_boost"

    @classmethod
    def register_chat_boost(cls, chat_boost_cls: Type) -> None:
        """Register a new chat_boost handler."""
        instance = chat_boost_cls()
        for name in instance.__names__:
            cls.CHATBOOSTS_REGISTRY[name] = chat_boost_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_boost
        trigger_value = obj.boost_id
        return cls.CHATBOOSTS_REGISTRY.get(trigger_value)()
