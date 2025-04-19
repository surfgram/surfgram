from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BackgroundTypeChatThemeMeta(ABCMeta):
    """Metaclass for BackgroundTypeChatTheme classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BackgroundTypeChatThemesFactory.register_background_type_chat_theme(
                new_class
            )
        return new_class


class BackgroundTypeChatThemesFactory(TypesFactory):
    """Factory for creating BackgroundTypeChatTheme instances."""

    BACKGROUNDTYPECHATTHEMES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "background_type_chat_theme"

    @classmethod
    def register_background_type_chat_theme(
        cls, background_type_chat_theme_cls: Type
    ) -> None:
        """Register a new background_type_chat_theme handler."""
        instance = background_type_chat_theme_cls()
        for name in instance.__names__:
            cls.BACKGROUNDTYPECHATTHEMES_REGISTRY[name] = background_type_chat_theme_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.background_type_chat_theme
        trigger_value = obj.type
        return cls.BACKGROUNDTYPECHATTHEMES_REGISTRY.get(trigger_value)()
