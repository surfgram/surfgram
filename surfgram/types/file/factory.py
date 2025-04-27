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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "file"

    @classmethod
    def register_file(cls, file_cls: Type) -> None:
        """Register a new file handler."""
        instance = file_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = file_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.FILES_REGISTRY[name] = file_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.file
        trigger_value = obj.file_id

        # Try to get specific handler first
        handler_cls = cls.FILES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
