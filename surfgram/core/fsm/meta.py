from typing import Type, TypeVar, Dict, Any, Optional, Callable
from dataclasses import dataclass, field
from abc import ABC, abstractmethod
from .state import State


class StatesMeta(type):
    """
    Metaclass for States that automatically sets state names.
    """

    def __new__(mcls, name, bases, namespace):
        """
        Create a new class and set names for all State instances.

        Args:
            mcls: The metaclass.
            name: Name of the class being created.
            bases: Base classes.
            namespace: Class namespace dictionary.

        Returns:
            The newly created class with named states.
        """
        cls = super().__new__(mcls, name, bases, namespace)
        for attr_name, attr_value in namespace.items():
            if isinstance(attr_value, State):
                attr_value.name = f"{name}.{attr_name}"
        return cls
