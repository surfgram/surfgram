from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class MessageOriginChannelMeta(ABCMeta):
    """Metaclass for MessageOriginChannel classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            MessageOriginChannelsFactory.register_message_origin_channel(new_class)
        return new_class


class MessageOriginChannelsFactory(TypesFactory):
    """Factory for creating MessageOriginChannel instances."""

    MESSAGEORIGINCHANNELS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "message_origin_channel"

    @classmethod
    def register_message_origin_channel(cls, message_origin_channel_cls: Type) -> None:
        """Register a new message_origin_channel handler."""
        instance = message_origin_channel_cls()
        for name in instance.__names__:
            cls.MESSAGEORIGINCHANNELS_REGISTRY[name] = message_origin_channel_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.message_origin_channel
        trigger_value = obj.type
        return cls.MESSAGEORIGINCHANNELS_REGISTRY.get(trigger_value)()
