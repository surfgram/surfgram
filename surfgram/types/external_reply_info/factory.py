from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ExternalReplyInfoMeta(ABCMeta):
    """Metaclass for ExternalReplyInfo classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ExternalReplyInfosFactory.register_external_reply_info(new_class)
        return new_class


class ExternalReplyInfosFactory(TypesFactory):
    """Factory for creating ExternalReplyInfo instances."""

    EXTERNALREPLYINFOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "external_reply_info"

    @classmethod
    def register_external_reply_info(cls, external_reply_info_cls: Type) -> None:
        """Register a new external_reply_info handler."""
        instance = external_reply_info_cls()
        for name in instance.__names__:
            cls.EXTERNALREPLYINFOS_REGISTRY[name] = external_reply_info_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.external_reply_info
        trigger_value = obj.audio
        return cls.EXTERNALREPLYINFOS_REGISTRY.get(trigger_value)()
