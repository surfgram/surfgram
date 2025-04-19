from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ForceReplyMeta(ABCMeta):
    """Metaclass for ForceReply classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ForceRepliesFactory.register_force_reply(new_class)
        return new_class


class ForceRepliesFactory(TypesFactory):
    """Factory for creating ForceReply instances."""

    FORCEREPLIES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "force_reply"

    @classmethod
    def register_force_reply(cls, force_reply_cls: Type) -> None:
        """Register a new force_reply handler."""
        instance = force_reply_cls()
        for name in instance.__names__:
            cls.FORCEREPLIES_REGISTRY[name] = force_reply_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.force_reply
        trigger_value = obj.input_field_placeholder
        return cls.FORCEREPLIES_REGISTRY.get(trigger_value)()
