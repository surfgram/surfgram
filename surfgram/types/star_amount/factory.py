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
    __type_name__ = "star_amount"

    @classmethod
    def register_star_amount(cls, star_amount_cls: Type) -> None:
        """Register a new star_amount handler."""
        instance = star_amount_cls()
        for name in instance.__names__:
            cls.STARAMOUNTS_REGISTRY[name] = star_amount_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.star_amount
        trigger_value = obj.amount
        return cls.STARAMOUNTS_REGISTRY.get(trigger_value)()
