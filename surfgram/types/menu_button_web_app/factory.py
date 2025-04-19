from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class MenuButtonWebAppMeta(ABCMeta):
    """Metaclass for MenuButtonWebApp classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            MenuButtonWebAppsFactory.register_menu_button_web_app(new_class)
        return new_class


class MenuButtonWebAppsFactory(TypesFactory):
    """Factory for creating MenuButtonWebApp instances."""

    MENUBUTTONWEBAPPS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "menu_button_web_app"

    @classmethod
    def register_menu_button_web_app(cls, menu_button_web_app_cls: Type) -> None:
        """Register a new menu_button_web_app handler."""
        instance = menu_button_web_app_cls()
        for name in instance.__names__:
            cls.MENUBUTTONWEBAPPS_REGISTRY[name] = menu_button_web_app_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.menu_button_web_app
        trigger_value = obj.text
        return cls.MENUBUTTONWEBAPPS_REGISTRY.get(trigger_value)()
