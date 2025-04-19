from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class AcceptedGiftTypesMeta(ABCMeta):
    """Metaclass for AcceptedGiftTypes classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            AcceptedGiftTypesFactory.register_accepted_gift_types(new_class)
        return new_class


class AcceptedGiftTypesFactory(TypesFactory):
    """Factory for creating AcceptedGiftTypes instances."""

    ACCEPTEDGIFTTYPES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "accepted_gift_types"

    @classmethod
    def register_accepted_gift_types(cls, accepted_gift_types_cls: Type) -> None:
        """Register a new accepted_gift_types handler."""
        instance = accepted_gift_types_cls()
        for name in instance.__names__:
            cls.ACCEPTEDGIFTTYPES_REGISTRY[name] = accepted_gift_types_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.accepted_gift_types
        trigger_value = obj.unlimited_gifts
        return cls.ACCEPTEDGIFTTYPES_REGISTRY.get(trigger_value)()
