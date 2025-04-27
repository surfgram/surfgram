from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class LinkPreviewOptionsMeta(ABCMeta):
    """Metaclass for LinkPreviewOptions classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            LinkPreviewOptionsFactory.register_link_preview_options(new_class)
        return new_class


class LinkPreviewOptionsFactory(TypesFactory):
    """Factory for creating LinkPreviewOptions instances."""

    LINKPREVIEWOPTIONS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "link_preview_options"

    @classmethod
    def register_link_preview_options(cls, link_preview_options_cls: Type) -> None:
        """Register a new link_preview_options handler."""
        instance = link_preview_options_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = link_preview_options_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.LINKPREVIEWOPTIONS_REGISTRY[name] = link_preview_options_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.link_preview_options
        trigger_value = obj.show_above_text

        # Try to get specific handler first
        handler_cls = cls.LINKPREVIEWOPTIONS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
