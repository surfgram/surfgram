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
    __type_name__ = "web_app_data"

    @classmethod
    def register_web_app_data(cls, web_app_data_cls: Type) -> None:
        """Register a new web_app_data handler."""
        instance = web_app_data_cls()
        for name in instance.__names__:
            cls.WEBAPPDATA_REGISTRY[name] = web_app_data_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.web_app_data
        trigger_value = obj.data
        return cls.WEBAPPDATA_REGISTRY.get(trigger_value)()
