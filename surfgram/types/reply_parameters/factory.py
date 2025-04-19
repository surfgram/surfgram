from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ReplyParametersMeta(ABCMeta):
    """Metaclass for ReplyParameters classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ReplyParametersFactory.register_reply_parameters(new_class)
        return new_class


class ReplyParametersFactory(TypesFactory):
    """Factory for creating ReplyParameters instances."""

    REPLYPARAMETERS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "reply_parameters"

    @classmethod
    def register_reply_parameters(cls, reply_parameters_cls: Type) -> None:
        """Register a new reply_parameters handler."""
        instance = reply_parameters_cls()
        for name in instance.__names__:
            cls.REPLYPARAMETERS_REGISTRY[name] = reply_parameters_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.reply_parameters
        trigger_value = obj.quote
        return cls.REPLYPARAMETERS_REGISTRY.get(trigger_value)()
