from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BackgroundFillFreeformGradientMeta(ABCMeta):
    """Metaclass for BackgroundFillFreeformGradient classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BackgroundFillFreeformGradientsFactory.register_background_fill_freeform_gradient(
                new_class
            )
        return new_class


class BackgroundFillFreeformGradientsFactory(TypesFactory):
    """Factory for creating BackgroundFillFreeformGradient instances."""

    BACKGROUNDFILLFREEFORMGRADIENTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "background_fill_freeform_gradient"

    @classmethod
    def register_background_fill_freeform_gradient(
        cls, background_fill_freeform_gradient_cls: Type
    ) -> None:
        """Register a new background_fill_freeform_gradient handler."""
        instance = background_fill_freeform_gradient_cls()
        for name in instance.__names__:
            cls.BACKGROUNDFILLFREEFORMGRADIENTS_REGISTRY[name] = (
                background_fill_freeform_gradient_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.background_fill_freeform_gradient
        trigger_value = obj.type
        return cls.BACKGROUNDFILLFREEFORMGRADIENTS_REGISTRY.get(trigger_value)()
