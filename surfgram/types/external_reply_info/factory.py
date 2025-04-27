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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "external_reply_info"

    @classmethod
    def register_external_reply_info(cls, external_reply_info_cls: Type) -> None:
        """Register a new external_reply_info handler."""
        instance = external_reply_info_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = external_reply_info_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.EXTERNALREPLYINFOS_REGISTRY[name] = external_reply_info_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.external_reply_info
        trigger_value = obj.audio

        # Try to get specific handler first
        handler_cls = cls.EXTERNALREPLYINFOS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
