from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class LabeledPriceMeta(ABCMeta):
    """Metaclass for LabeledPrice classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            LabeledPricesFactory.register_labeled_price(new_class)
        return new_class


class LabeledPricesFactory(TypesFactory):
    """Factory for creating LabeledPrice instances."""

    LABELEDPRICES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "labeled_price"

    @classmethod
    def register_labeled_price(cls, labeled_price_cls: Type) -> None:
        """Register a new labeled_price handler."""
        instance = labeled_price_cls()
        for name in instance.__names__:
            cls.LABELEDPRICES_REGISTRY[name] = labeled_price_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.labeled_price
        trigger_value = obj.label
        return cls.LABELEDPRICES_REGISTRY.get(trigger_value)()
