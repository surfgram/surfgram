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
    __type_name__ = "login_url"

    @classmethod
    def register_login_url(cls, login_url_cls: Type) -> None:
        """Register a new login_url handler."""
        instance = login_url_cls()
        for name in instance.__names__:
            cls.LOGINURLS_REGISTRY[name] = login_url_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.login_url
        trigger_value = obj.forward_text
        return cls.LOGINURLS_REGISTRY.get(trigger_value)()
