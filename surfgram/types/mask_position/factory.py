from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class MaskPositionMeta(ABCMeta):
    """Metaclass for MaskPosition classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            MaskPositionsFactory.register_mask_position(new_class)
        return new_class


class MaskPositionsFactory(TypesFactory):
    """Factory for creating MaskPosition instances."""

    MASKPOSITIONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "mask_position"

    @classmethod
    def register_mask_position(cls, mask_position_cls: Type) -> None:
        """Register a new mask_position handler."""
        instance = mask_position_cls()
        for name in instance.__names__:
            cls.MASKPOSITIONS_REGISTRY[name] = mask_position_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.mask_position
        trigger_value = obj.point
        return cls.MASKPOSITIONS_REGISTRY.get(trigger_value)()
