from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class KeyboardButtonMeta(ABCMeta):
    """Metaclass for KeyboardButton classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            KeyboardButtonsFactory.register_keyboard_button(new_class)
        return new_class


class KeyboardButtonsFactory(TypesFactory):
    """Factory for creating KeyboardButton instances."""

    KEYBOARDBUTTONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "keyboard_button"

    @classmethod
    def register_keyboard_button(cls, keyboard_button_cls: Type) -> None:
        """Register a new keyboard_button handler."""
        instance = keyboard_button_cls()
        for name in instance.__names__:
            cls.KEYBOARDBUTTONS_REGISTRY[name] = keyboard_button_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.keyboard_button
        trigger_value = obj.text
        return cls.KEYBOARDBUTTONS_REGISTRY.get(trigger_value)()
