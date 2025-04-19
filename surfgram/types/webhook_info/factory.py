from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class WebhookInfoMeta(ABCMeta):
    """Metaclass for WebhookInfo classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            WebhookInfosFactory.register_webhook_info(new_class)
        return new_class


class WebhookInfosFactory(TypesFactory):
    """Factory for creating WebhookInfo instances."""

    WEBHOOKINFOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "webhook_info"

    @classmethod
    def register_webhook_info(cls, webhook_info_cls: Type) -> None:
        """Register a new webhook_info handler."""
        instance = webhook_info_cls()
        for name in instance.__names__:
            cls.WEBHOOKINFOS_REGISTRY[name] = webhook_info_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.webhook_info
        trigger_value = obj.ip_address
        return cls.WEBHOOKINFOS_REGISTRY.get(trigger_value)()
