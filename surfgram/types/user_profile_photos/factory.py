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
    __type_name__ = "user_profile_photos"

    @classmethod
    def register_user_profile_photos(cls, user_profile_photos_cls: Type) -> None:
        """Register a new user_profile_photos handler."""
        instance = user_profile_photos_cls()
        for name in instance.__names__:
            cls.USERPROFILEPHOTOS_REGISTRY[name] = user_profile_photos_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.user_profile_photos
        trigger_value = obj.photos
        return cls.USERPROFILEPHOTOS_REGISTRY.get(trigger_value)()
