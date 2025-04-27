from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class UserProfilePhotosMeta(ABCMeta):
    """Metaclass for UserProfilePhotos classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            UserProfilePhotosFactory.register_user_profile_photos(new_class)
        return new_class


class UserProfilePhotosFactory(TypesFactory):
    """Factory for creating UserProfilePhotos instances."""

    USERPROFILEPHOTOS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "user_profile_photos"

    @classmethod
    def register_user_profile_photos(cls, user_profile_photos_cls: Type) -> None:
        """Register a new user_profile_photos handler."""
        instance = user_profile_photos_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = user_profile_photos_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.USERPROFILEPHOTOS_REGISTRY[name] = user_profile_photos_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.user_profile_photos
        trigger_value = obj.photos

        # Try to get specific handler first
        handler_cls = cls.USERPROFILEPHOTOS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
