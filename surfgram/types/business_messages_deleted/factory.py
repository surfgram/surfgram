from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class BusinessMessagesDeletedMeta(ABCMeta):
    """Metaclass for BusinessMessagesDeleted classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            BusinessMessagesDeletedsFactory.register_business_messages_deleted(
                new_class
            )
        return new_class


class BusinessMessagesDeletedsFactory(TypesFactory):
    """Factory for creating BusinessMessagesDeleted instances."""

    BUSINESSMESSAGESDELETEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "business_messages_deleted"

    @classmethod
    def register_business_messages_deleted(
        cls, business_messages_deleted_cls: Type
    ) -> None:
        """Register a new business_messages_deleted handler."""
        instance = business_messages_deleted_cls()
        for name in instance.__names__:
            cls.BUSINESSMESSAGESDELETEDS_REGISTRY[name] = business_messages_deleted_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.business_messages_deleted
        trigger_value = obj.business_connection_id
        return cls.BUSINESSMESSAGESDELETEDS_REGISTRY.get(trigger_value)()
