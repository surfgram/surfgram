from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class KeyboardButtonRequestChatMeta(ABCMeta):
    """Metaclass for KeyboardButtonRequestChat classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            KeyboardButtonRequestChatsFactory.register_keyboard_button_request_chat(
                new_class
            )
        return new_class


class KeyboardButtonRequestChatsFactory(TypesFactory):
    """Factory for creating KeyboardButtonRequestChat instances."""

    KEYBOARDBUTTONREQUESTCHATS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "keyboard_button_request_chat"

    @classmethod
    def register_keyboard_button_request_chat(
        cls, keyboard_button_request_chat_cls: Type
    ) -> None:
        """Register a new keyboard_button_request_chat handler."""
        instance = keyboard_button_request_chat_cls()
        for name in instance.__names__:
            cls.KEYBOARDBUTTONREQUESTCHATS_REGISTRY[name] = (
                keyboard_button_request_chat_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.keyboard_button_request_chat
        trigger_value = obj.request_title
        return cls.KEYBOARDBUTTONREQUESTCHATS_REGISTRY.get(trigger_value)()
