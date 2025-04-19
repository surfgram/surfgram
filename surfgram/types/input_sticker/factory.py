from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputStickerMeta(ABCMeta):
    """Metaclass for InputSticker classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputStickersFactory.register_input_sticker(new_class)
        return new_class


class InputStickersFactory(TypesFactory):
    """Factory for creating InputSticker instances."""

    INPUTSTICKERS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "input_sticker"

    @classmethod
    def register_input_sticker(cls, input_sticker_cls: Type) -> None:
        """Register a new input_sticker handler."""
        instance = input_sticker_cls()
        for name in instance.__names__:
            cls.INPUTSTICKERS_REGISTRY[name] = input_sticker_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_sticker
        trigger_value = obj.sticker
        return cls.INPUTSTICKERS_REGISTRY.get(trigger_value)()
