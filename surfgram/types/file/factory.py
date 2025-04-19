from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class FileMeta(ABCMeta):
    """Metaclass for File classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            FilesFactory.register_file(new_class)
        return new_class


class FilesFactory(TypesFactory):
    """Factory for creating File instances."""

    FILES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "file"

    @classmethod
    def register_file(cls, file_cls: Type) -> None:
        """Register a new file handler."""
        instance = file_cls()
        for name in instance.__names__:
            cls.FILES_REGISTRY[name] = file_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.file
        trigger_value = obj.file_id
        return cls.FILES_REGISTRY.get(trigger_value)()
