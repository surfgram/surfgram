from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class LoginUrlMeta(ABCMeta):
    """Metaclass for LoginUrl classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            LoginUrlsFactory.register_login_url(new_class)
        return new_class


class LoginUrlsFactory(TypesFactory):
    """Factory for creating LoginUrl instances."""

    LOGINURLS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "login_url"

    @classmethod
    def register_login_url(cls, login_url_cls: Type) -> None:
        """Register a new login_url handler."""
        instance = login_url_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = login_url_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.LOGINURLS_REGISTRY[name] = login_url_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.login_url
        trigger_value = obj.forward_text

        # Try to get specific handler first
        handler_cls = cls.LOGINURLS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
