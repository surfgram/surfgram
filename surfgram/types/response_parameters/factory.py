from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ResponseParametersMeta(ABCMeta):
    """Metaclass for ResponseParameters classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ResponseParametersFactory.register_response_parameters(new_class)
        return new_class


class ResponseParametersFactory(TypesFactory):
    """Factory for creating ResponseParameters instances."""

    RESPONSEPARAMETERS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "response_parameters"

    @classmethod
    def register_response_parameters(cls, response_parameters_cls: Type) -> None:
        """Register a new response_parameters handler."""
        instance = response_parameters_cls()
        for name in instance.__names__:
            cls.RESPONSEPARAMETERS_REGISTRY[name] = response_parameters_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.response_parameters
        trigger_value = obj.migrate_to_chat_id
        return cls.RESPONSEPARAMETERS_REGISTRY.get(trigger_value)()
