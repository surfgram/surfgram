from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class StarAmountMeta(ABCMeta):
    """Metaclass for StarAmount classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            StarAmountsFactory.register_star_amount(new_class)
        return new_class


class StarAmountsFactory(TypesFactory):
    """Factory for creating StarAmount instances."""

    STARAMOUNTS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "star_amount"

    @classmethod
    def register_star_amount(cls, star_amount_cls: Type) -> None:
        """Register a new star_amount handler."""
        instance = star_amount_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = star_amount_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.STARAMOUNTS_REGISTRY[name] = star_amount_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.star_amount
        trigger_value = obj.amount

        # Try to get specific handler first
        handler_cls = cls.STARAMOUNTS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
