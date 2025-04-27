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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "background_type_chat_theme"

    @classmethod
    def register_background_type_chat_theme(
        cls, background_type_chat_theme_cls: Type
    ) -> None:
        """Register a new background_type_chat_theme handler."""
        instance = background_type_chat_theme_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = background_type_chat_theme_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.BACKGROUNDTYPECHATTHEMES_REGISTRY[name] = (
                        background_type_chat_theme_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.background_type_chat_theme
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.BACKGROUNDTYPECHATTHEMES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
