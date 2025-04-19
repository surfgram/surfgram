from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputVenueMessageContentMeta(ABCMeta):
    """Metaclass for InputVenueMessageContent classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputVenueMessageContentsFactory.register_input_venue_message_content(
                new_class
            )
        return new_class


class InputVenueMessageContentsFactory(TypesFactory):
    """Factory for creating InputVenueMessageContent instances."""

    INPUTVENUEMESSAGECONTENTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "input_venue_message_content"

    @classmethod
    def register_input_venue_message_content(
        cls, input_venue_message_content_cls: Type
    ) -> None:
        """Register a new input_venue_message_content handler."""
        instance = input_venue_message_content_cls()
        for name in instance.__names__:
            cls.INPUTVENUEMESSAGECONTENTS_REGISTRY[name] = (
                input_venue_message_content_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_venue_message_content
        trigger_value = obj.title
        return cls.INPUTVENUEMESSAGECONTENTS_REGISTRY.get(trigger_value)()
