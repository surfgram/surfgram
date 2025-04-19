from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BusinessConnectionMeta(ABCMeta):
    """Metaclass for BusinessConnection classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BusinessConnectionsFactory.register_business_connection(new_class)
        return new_class


class BusinessConnectionsFactory(TypesFactory):
    """Factory for creating BusinessConnection instances."""

    BUSINESSCONNECTIONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "business_connection"

    @classmethod
    def register_business_connection(cls, business_connection_cls: Type) -> None:
        """Register a new business_connection handler."""
        instance = business_connection_cls()
        for name in instance.__names__:
            cls.BUSINESSCONNECTIONS_REGISTRY[name] = business_connection_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.business_connection
        trigger_value = obj.user_chat_id
        return cls.BUSINESSCONNECTIONS_REGISTRY.get(trigger_value)()
