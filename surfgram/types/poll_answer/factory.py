from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PollAnswerMeta(ABCMeta):
    """Metaclass for PollAnswer classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PollAnswersFactory.register_poll_answer(new_class)
        return new_class


class PollAnswersFactory(TypesFactory):
    """Factory for creating PollAnswer instances."""

    POLLANSWERS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "poll_answer"

    @classmethod
    def register_poll_answer(cls, poll_answer_cls: Type) -> None:
        """Register a new poll_answer handler."""
        instance = poll_answer_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = poll_answer_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.POLLANSWERS_REGISTRY[name] = poll_answer_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.poll_answer
        trigger_value = obj.poll_id

        # Try to get specific handler first
        handler_cls = cls.POLLANSWERS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
