from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatBoostUpdatedMeta(ABCMeta):
    """Metaclass for ChatBoostUpdated classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatBoostUpdatedsFactory.register_chat_boost_updated(new_class)
        return new_class


class ChatBoostUpdatedsFactory(TypesFactory):
    """Factory for creating ChatBoostUpdated instances."""

    CHATBOOSTUPDATEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_boost_updated"

    @classmethod
    def register_chat_boost_updated(cls, chat_boost_updated_cls: Type) -> None:
        """Register a new chat_boost_updated handler."""
        instance = chat_boost_updated_cls()
        for name in instance.__names__:
            cls.CHATBOOSTUPDATEDS_REGISTRY[name] = chat_boost_updated_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_boost_updated
        trigger_value = obj.boost
        return cls.CHATBOOSTUPDATEDS_REGISTRY.get(trigger_value)()
