from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PreparedInlineMessageMeta(ABCMeta):
    """Metaclass for PreparedInlineMessage classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PreparedInlineMessagesFactory.register_prepared_inline_message(new_class)
        return new_class


class PreparedInlineMessagesFactory(TypesFactory):
    """Factory for creating PreparedInlineMessage instances."""

    PREPAREDINLINEMESSAGES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "prepared_inline_message"

    @classmethod
    def register_prepared_inline_message(
        cls, prepared_inline_message_cls: Type
    ) -> None:
        """Register a new prepared_inline_message handler."""
        instance = prepared_inline_message_cls()
        for name in instance.__names__:
            cls.PREPAREDINLINEMESSAGES_REGISTRY[name] = prepared_inline_message_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.prepared_inline_message
        trigger_value = obj.expiration_date
        return cls.PREPAREDINLINEMESSAGES_REGISTRY.get(trigger_value)()
