from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatBoostRemovedMeta(ABCMeta):
    """Metaclass for ChatBoostRemoved classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatBoostRemovedsFactory.register_chat_boost_removed(new_class)
        return new_class


class ChatBoostRemovedsFactory(TypesFactory):
    """Factory for creating ChatBoostRemoved instances."""

    CHATBOOSTREMOVEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_boost_removed"

    @classmethod
    def register_chat_boost_removed(cls, chat_boost_removed_cls: Type) -> None:
        """Register a new chat_boost_removed handler."""
        instance = chat_boost_removed_cls()
        for name in instance.__names__:
            cls.CHATBOOSTREMOVEDS_REGISTRY[name] = chat_boost_removed_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_boost_removed
        trigger_value = obj.boost_id
        return cls.CHATBOOSTREMOVEDS_REGISTRY.get(trigger_value)()
