from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class WebAppDataMeta(ABCMeta):
    """Metaclass for WebAppData classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            WebAppDataFactory.register_web_app_data(new_class)
        return new_class


class WebAppDataFactory(TypesFactory):
    """Factory for creating WebAppData instances."""

    WEBAPPDATA_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "web_app_data"

    @classmethod
    def register_web_app_data(cls, web_app_data_cls: Type) -> None:
        """Register a new web_app_data handler."""
        instance = web_app_data_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = web_app_data_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.WEBAPPDATA_REGISTRY[name] = web_app_data_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.web_app_data
        trigger_value = obj.data

        # Try to get specific handler first
        handler_cls = cls.WEBAPPDATA_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
