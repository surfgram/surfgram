from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatBoostAddedMeta(ABCMeta):
    """Metaclass for ChatBoostAdded classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatBoostAddedsFactory.register_chat_boost_added(new_class)
        return new_class


class ChatBoostAddedsFactory(TypesFactory):
    """Factory for creating ChatBoostAdded instances."""

    CHATBOOSTADDEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_boost_added"

    @classmethod
    def register_chat_boost_added(cls, chat_boost_added_cls: Type) -> None:
        """Register a new chat_boost_added handler."""
        instance = chat_boost_added_cls()
        for name in instance.__names__:
            cls.CHATBOOSTADDEDS_REGISTRY[name] = chat_boost_added_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_boost_added
        trigger_value = obj.boost_count
        return cls.CHATBOOSTADDEDS_REGISTRY.get(trigger_value)()
