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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "keyboard_button_request_chat"

    @classmethod
    def register_keyboard_button_request_chat(
        cls, keyboard_button_request_chat_cls: Type
    ) -> None:
        """Register a new keyboard_button_request_chat handler."""
        instance = keyboard_button_request_chat_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = keyboard_button_request_chat_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.KEYBOARDBUTTONREQUESTCHATS_REGISTRY[name] = (
                        keyboard_button_request_chat_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.keyboard_button_request_chat
        trigger_value = obj.request_title

        # Try to get specific handler first
        handler_cls = cls.KEYBOARDBUTTONREQUESTCHATS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
