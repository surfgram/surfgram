from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class KeyboardButtonRequestUsersMeta(ABCMeta):
    """Metaclass for KeyboardButtonRequestUsers classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            KeyboardButtonRequestUsersFactory.register_keyboard_button_request_users(
                new_class
            )
        return new_class


class KeyboardButtonRequestUsersFactory(TypesFactory):
    """Factory for creating KeyboardButtonRequestUsers instances."""

    KEYBOARDBUTTONREQUESTUSERS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "keyboard_button_request_users"

    @classmethod
    def register_keyboard_button_request_users(
        cls, keyboard_button_request_users_cls: Type
    ) -> None:
        """Register a new keyboard_button_request_users handler."""
        instance = keyboard_button_request_users_cls()
        for name in instance.__names__:
            cls.KEYBOARDBUTTONREQUESTUSERS_REGISTRY[name] = (
                keyboard_button_request_users_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.keyboard_button_request_users
        trigger_value = obj.request_photo
        return cls.KEYBOARDBUTTONREQUESTUSERS_REGISTRY.get(trigger_value)()
