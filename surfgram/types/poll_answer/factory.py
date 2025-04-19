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
    __type_name__ = "poll_answer"

    @classmethod
    def register_poll_answer(cls, poll_answer_cls: Type) -> None:
        """Register a new poll_answer handler."""
        instance = poll_answer_cls()
        for name in instance.__names__:
            cls.POLLANSWERS_REGISTRY[name] = poll_answer_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.poll_answer
        trigger_value = obj.poll_id
        return cls.POLLANSWERS_REGISTRY.get(trigger_value)()
