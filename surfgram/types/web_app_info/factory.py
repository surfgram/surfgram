from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class WebAppInfoMeta(ABCMeta):
    """Metaclass for WebAppInfo classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            WebAppInfosFactory.register_web_app_info(new_class)
        return new_class


class WebAppInfosFactory(TypesFactory):
    """Factory for creating WebAppInfo instances."""

    WEBAPPINFOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "web_app_info"

    @classmethod
    def register_web_app_info(cls, web_app_info_cls: Type) -> None:
        """Register a new web_app_info handler."""
        instance = web_app_info_cls()
        for name in instance.__names__:
            cls.WEBAPPINFOS_REGISTRY[name] = web_app_info_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.web_app_info
        trigger_value = obj.url
        return cls.WEBAPPINFOS_REGISTRY.get(trigger_value)()
