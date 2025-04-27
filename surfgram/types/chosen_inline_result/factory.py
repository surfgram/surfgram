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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "chosen_inline_result"

    @classmethod
    def register_chosen_inline_result(cls, chosen_inline_result_cls: Type) -> None:
        """Register a new chosen_inline_result handler."""
        instance = chosen_inline_result_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = chosen_inline_result_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.CHOSENINLINERESULTS_REGISTRY[name] = chosen_inline_result_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chosen_inline_result
        trigger_value = obj.result_id

        # Try to get specific handler first
        handler_cls = cls.CHOSENINLINERESULTS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
