from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class GiftInfoMeta(ABCMeta):
    """Metaclass for GiftInfo classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            GiftInfosFactory.register_gift_info(new_class)
        return new_class


class GiftInfosFactory(TypesFactory):
    """Factory for creating GiftInfo instances."""

    GIFTINFOS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "gift_info"

    @classmethod
    def register_gift_info(cls, gift_info_cls: Type) -> None:
        """Register a new gift_info handler."""
        instance = gift_info_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = gift_info_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.GIFTINFOS_REGISTRY[name] = gift_info_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.gift_info
        trigger_value = obj.text

        # Try to get specific handler first
        handler_cls = cls.GIFTINFOS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
