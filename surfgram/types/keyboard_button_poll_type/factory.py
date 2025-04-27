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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "keyboard_button_poll_type"

    @classmethod
    def register_keyboard_button_poll_type(
        cls, keyboard_button_poll_type_cls: Type
    ) -> None:
        """Register a new keyboard_button_poll_type handler."""
        instance = keyboard_button_poll_type_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = keyboard_button_poll_type_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.KEYBOARDBUTTONPOLLTYPES_REGISTRY[name] = (
                        keyboard_button_poll_type_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.keyboard_button_poll_type
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.KEYBOARDBUTTONPOLLTYPES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
