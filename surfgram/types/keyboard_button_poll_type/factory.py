from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class KeyboardButtonPollTypeMeta(ABCMeta):
    """Metaclass for KeyboardButtonPollType classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            KeyboardButtonPollTypesFactory.register_keyboard_button_poll_type(new_class)
        return new_class


class KeyboardButtonPollTypesFactory(TypesFactory):
    """Factory for creating KeyboardButtonPollType instances."""

    KEYBOARDBUTTONPOLLTYPES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "keyboard_button_poll_type"

    @classmethod
    def register_keyboard_button_poll_type(
        cls, keyboard_button_poll_type_cls: Type
    ) -> None:
        """Register a new keyboard_button_poll_type handler."""
        instance = keyboard_button_poll_type_cls()
        for name in instance.__names__:
            cls.KEYBOARDBUTTONPOLLTYPES_REGISTRY[name] = keyboard_button_poll_type_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.keyboard_button_poll_type
        trigger_value = obj.type
        return cls.KEYBOARDBUTTONPOLLTYPES_REGISTRY.get(trigger_value)()
