from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PaidMediaPreviewMeta(ABCMeta):
    """Metaclass for PaidMediaPreview classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PaidMediaPreviewsFactory.register_paid_media_preview(new_class)
        return new_class


class PaidMediaPreviewsFactory(TypesFactory):
    """Factory for creating PaidMediaPreview instances."""

    PAIDMEDIAPREVIEWS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "paid_media_preview"

    @classmethod
    def register_paid_media_preview(cls, paid_media_preview_cls: Type) -> None:
        """Register a new paid_media_preview handler."""
        instance = paid_media_preview_cls()
        for name in instance.__names__:
            cls.PAIDMEDIAPREVIEWS_REGISTRY[name] = paid_media_preview_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.paid_media_preview
        trigger_value = obj.type
        return cls.PAIDMEDIAPREVIEWS_REGISTRY.get(trigger_value)()
