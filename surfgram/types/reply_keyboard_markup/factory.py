from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ReplyKeyboardMarkupMeta(ABCMeta):
    """Metaclass for ReplyKeyboardMarkup classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ReplyKeyboardMarkupsFactory.register_reply_keyboard_markup(new_class)
        return new_class


class ReplyKeyboardMarkupsFactory(TypesFactory):
    """Factory for creating ReplyKeyboardMarkup instances."""

    REPLYKEYBOARDMARKUPS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "reply_keyboard_markup"

    @classmethod
    def register_reply_keyboard_markup(cls, reply_keyboard_markup_cls: Type) -> None:
        """Register a new reply_keyboard_markup handler."""
        instance = reply_keyboard_markup_cls()
        for name in instance.__names__:
            cls.REPLYKEYBOARDMARKUPS_REGISTRY[name] = reply_keyboard_markup_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.reply_keyboard_markup
        trigger_value = obj.input_field_placeholder
        return cls.REPLYKEYBOARDMARKUPS_REGISTRY.get(trigger_value)()
