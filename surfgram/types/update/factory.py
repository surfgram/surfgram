from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class UpdateMeta(ABCMeta):
    """Metaclass for Update classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            UpdatesFactory.register_update(new_class)
        return new_class


class UpdatesFactory(TypesFactory):
    """Factory for creating Update instances."""

    UPDATES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "update"

    @classmethod
    def register_update(cls, update_cls: Type) -> None:
        """Register a new update handler."""
        instance = update_cls()
        for name in instance.__names__:
            cls.UPDATES_REGISTRY[name] = update_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.update
        trigger_value = obj.inline_query
        return cls.UPDATES_REGISTRY.get(trigger_value)()
