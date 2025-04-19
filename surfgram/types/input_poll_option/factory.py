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
    __type_name__ = "input_poll_option"

    @classmethod
    def register_input_poll_option(cls, input_poll_option_cls: Type) -> None:
        """Register a new input_poll_option handler."""
        instance = input_poll_option_cls()
        for name in instance.__names__:
            cls.INPUTPOLLOPTIONS_REGISTRY[name] = input_poll_option_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_poll_option
        trigger_value = obj.text
        return cls.INPUTPOLLOPTIONS_REGISTRY.get(trigger_value)()
