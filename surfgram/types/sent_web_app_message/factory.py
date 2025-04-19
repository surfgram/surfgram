from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class SentWebAppMessageMeta(ABCMeta):
    """Metaclass for SentWebAppMessage classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            SentWebAppMessagesFactory.register_sent_web_app_message(new_class)
        return new_class


class SentWebAppMessagesFactory(TypesFactory):
    """Factory for creating SentWebAppMessage instances."""

    SENTWEBAPPMESSAGES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "sent_web_app_message"

    @classmethod
    def register_sent_web_app_message(cls, sent_web_app_message_cls: Type) -> None:
        """Register a new sent_web_app_message handler."""
        instance = sent_web_app_message_cls()
        for name in instance.__names__:
            cls.SENTWEBAPPMESSAGES_REGISTRY[name] = sent_web_app_message_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.sent_web_app_message
        trigger_value = obj.inline_message_id
        return cls.SENTWEBAPPMESSAGES_REGISTRY.get(trigger_value)()
