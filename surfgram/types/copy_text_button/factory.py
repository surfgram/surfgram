from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class CopyTextButtonMeta(ABCMeta):
    """Metaclass for CopyTextButton classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            CopyTextButtonsFactory.register_copy_text_button(new_class)
        return new_class


class CopyTextButtonsFactory(TypesFactory):
    """Factory for creating CopyTextButton instances."""

    COPYTEXTBUTTONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "copy_text_button"

    @classmethod
    def register_copy_text_button(cls, copy_text_button_cls: Type) -> None:
        """Register a new copy_text_button handler."""
        instance = copy_text_button_cls()
        for name in instance.__names__:
            cls.COPYTEXTBUTTONS_REGISTRY[name] = copy_text_button_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.copy_text_button
        trigger_value = obj.text
        return cls.COPYTEXTBUTTONS_REGISTRY.get(trigger_value)()
