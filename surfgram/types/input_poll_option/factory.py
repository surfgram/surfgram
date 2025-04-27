from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputPollOptionMeta(ABCMeta):
    """Metaclass for InputPollOption classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputPollOptionsFactory.register_input_poll_option(new_class)
        return new_class


class InputPollOptionsFactory(TypesFactory):
    """Factory for creating InputPollOption instances."""

    INPUTPOLLOPTIONS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "input_poll_option"

    @classmethod
    def register_input_poll_option(cls, input_poll_option_cls: Type) -> None:
        """Register a new input_poll_option handler."""
        instance = input_poll_option_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = input_poll_option_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.INPUTPOLLOPTIONS_REGISTRY[name] = input_poll_option_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_poll_option
        trigger_value = obj.text

        # Try to get specific handler first
        handler_cls = cls.INPUTPOLLOPTIONS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
