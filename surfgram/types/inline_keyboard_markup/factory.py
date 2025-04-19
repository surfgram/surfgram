from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineKeyboardMarkupMeta(ABCMeta):
    """Metaclass for InlineKeyboardMarkup classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineKeyboardMarkupsFactory.register_inline_keyboard_markup(new_class)
        return new_class


class InlineKeyboardMarkupsFactory(TypesFactory):
    """Factory for creating InlineKeyboardMarkup instances."""

    INLINEKEYBOARDMARKUPS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_keyboard_markup"

    @classmethod
    def register_inline_keyboard_markup(cls, inline_keyboard_markup_cls: Type) -> None:
        """Register a new inline_keyboard_markup handler."""
        instance = inline_keyboard_markup_cls()
        for name in instance.__names__:
            cls.INLINEKEYBOARDMARKUPS_REGISTRY[name] = inline_keyboard_markup_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_keyboard_markup
        trigger_value = obj.inline_keyboard
        return cls.INLINEKEYBOARDMARKUPS_REGISTRY.get(trigger_value)()
