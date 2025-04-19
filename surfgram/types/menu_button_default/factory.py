from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class MenuButtonDefaultMeta(ABCMeta):
    """Metaclass for MenuButtonDefault classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            MenuButtonDefaultsFactory.register_menu_button_default(new_class)
        return new_class


class MenuButtonDefaultsFactory(TypesFactory):
    """Factory for creating MenuButtonDefault instances."""

    MENUBUTTONDEFAULTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "menu_button_default"

    @classmethod
    def register_menu_button_default(cls, menu_button_default_cls: Type) -> None:
        """Register a new menu_button_default handler."""
        instance = menu_button_default_cls()
        for name in instance.__names__:
            cls.MENUBUTTONDEFAULTS_REGISTRY[name] = menu_button_default_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.menu_button_default
        trigger_value = obj.type
        return cls.MENUBUTTONDEFAULTS_REGISTRY.get(trigger_value)()
