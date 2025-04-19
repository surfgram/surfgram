from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BackgroundFillGradientMeta(ABCMeta):
    """Metaclass for BackgroundFillGradient classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BackgroundFillGradientsFactory.register_background_fill_gradient(new_class)
        return new_class


class BackgroundFillGradientsFactory(TypesFactory):
    """Factory for creating BackgroundFillGradient instances."""

    BACKGROUNDFILLGRADIENTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "background_fill_gradient"

    @classmethod
    def register_background_fill_gradient(
        cls, background_fill_gradient_cls: Type
    ) -> None:
        """Register a new background_fill_gradient handler."""
        instance = background_fill_gradient_cls()
        for name in instance.__names__:
            cls.BACKGROUNDFILLGRADIENTS_REGISTRY[name] = background_fill_gradient_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.background_fill_gradient
        trigger_value = obj.type
        return cls.BACKGROUNDFILLGRADIENTS_REGISTRY.get(trigger_value)()
