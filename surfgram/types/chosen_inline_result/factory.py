from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChosenInlineResultMeta(ABCMeta):
    """Metaclass for ChosenInlineResult classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChosenInlineResultsFactory.register_chosen_inline_result(new_class)
        return new_class


class ChosenInlineResultsFactory(TypesFactory):
    """Factory for creating ChosenInlineResult instances."""

    CHOSENINLINERESULTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chosen_inline_result"

    @classmethod
    def register_chosen_inline_result(cls, chosen_inline_result_cls: Type) -> None:
        """Register a new chosen_inline_result handler."""
        instance = chosen_inline_result_cls()
        for name in instance.__names__:
            cls.CHOSENINLINERESULTS_REGISTRY[name] = chosen_inline_result_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chosen_inline_result
        trigger_value = obj.result_id
        return cls.CHOSENINLINERESULTS_REGISTRY.get(trigger_value)()
