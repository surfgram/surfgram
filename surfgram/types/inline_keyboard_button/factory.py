from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineKeyboardButtonMeta(ABCMeta):
    """Metaclass for InlineKeyboardButton classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineKeyboardButtonsFactory.register_inline_keyboard_button(new_class)
        return new_class


class InlineKeyboardButtonsFactory(TypesFactory):
    """Factory for creating InlineKeyboardButton instances."""

    INLINEKEYBOARDBUTTONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_keyboard_button"

    @classmethod
    def register_inline_keyboard_button(cls, inline_keyboard_button_cls: Type) -> None:
        """Register a new inline_keyboard_button handler."""
        instance = inline_keyboard_button_cls()
        for name in instance.__names__:
            cls.INLINEKEYBOARDBUTTONS_REGISTRY[name] = inline_keyboard_button_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_keyboard_button
        trigger_value = obj.text
        return cls.INLINEKEYBOARDBUTTONS_REGISTRY.get(trigger_value)()
