from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputProfilePhotoStaticMeta(ABCMeta):
    """Metaclass for InputProfilePhotoStatic classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputProfilePhotoStaticsFactory.register_input_profile_photo_static(
                new_class
            )
        return new_class


class InputProfilePhotoStaticsFactory(TypesFactory):
    """Factory for creating InputProfilePhotoStatic instances."""

    INPUTPROFILEPHOTOSTATICS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "input_profile_photo_static"

    @classmethod
    def register_input_profile_photo_static(
        cls, input_profile_photo_static_cls: Type
    ) -> None:
        """Register a new input_profile_photo_static handler."""
        instance = input_profile_photo_static_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = input_profile_photo_static_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.INPUTPROFILEPHOTOSTATICS_REGISTRY[name] = (
                        input_profile_photo_static_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_profile_photo_static
        trigger_value = obj.photo

        # Try to get specific handler first
        handler_cls = cls.INPUTPROFILEPHOTOSTATICS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
