from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputContactMessageContentMeta(ABCMeta):
    """Metaclass for InputContactMessageContent classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputContactMessageContentsFactory.register_input_contact_message_content(
                new_class
            )
        return new_class


class InputContactMessageContentsFactory(TypesFactory):
    """Factory for creating InputContactMessageContent instances."""

    INPUTCONTACTMESSAGECONTENTS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "input_contact_message_content"

    @classmethod
    def register_input_contact_message_content(
        cls, input_contact_message_content_cls: Type
    ) -> None:
        """Register a new input_contact_message_content handler."""
        instance = input_contact_message_content_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = input_contact_message_content_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.INPUTCONTACTMESSAGECONTENTS_REGISTRY[name] = (
                        input_contact_message_content_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_contact_message_content
        trigger_value = obj.phone_number

        # Try to get specific handler first
        handler_cls = cls.INPUTCONTACTMESSAGECONTENTS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
