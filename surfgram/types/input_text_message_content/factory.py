from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputTextMessageContentMeta(ABCMeta):
    """Metaclass for InputTextMessageContent classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputTextMessageContentsFactory.register_input_text_message_content(
                new_class
            )
        return new_class


class InputTextMessageContentsFactory(TypesFactory):
    """Factory for creating InputTextMessageContent instances."""

    INPUTTEXTMESSAGECONTENTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "input_text_message_content"

    @classmethod
    def register_input_text_message_content(
        cls, input_text_message_content_cls: Type
    ) -> None:
        """Register a new input_text_message_content handler."""
        instance = input_text_message_content_cls()
        for name in instance.__names__:
            cls.INPUTTEXTMESSAGECONTENTS_REGISTRY[name] = input_text_message_content_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_text_message_content
        trigger_value = obj.message_text
        return cls.INPUTTEXTMESSAGECONTENTS_REGISTRY.get(trigger_value)()
