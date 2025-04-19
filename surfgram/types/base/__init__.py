from typing import Dict, Optional, Type, Union, Any


class FactoryMeta(type):
    """
    A metaclass that enables registration of types in a factory.

    This metaclass extends the behavior of the `type` metaclass,
    allowing a derived class to register its type with the factory.
    """

    def __new__(cls, name, bases, attrs):
        """
        Creates a new class and registers it with the factory if it's a derived class.

        Args:
            name: The name of the class.
            bases: The base classes of the class.
            attrs: The attributes of the class.

        Returns:
            The new class instance.
        """
        new_class = super().__new__(cls, name, bases, attrs)
        if bases:
            TypesFactory.register_type(new_class)
        return new_class


class TypesFactory(metaclass=FactoryMeta):
    """
    A factory that registers and resolves typed classes dynamically.

    This factory uses a registration mechanism to map types.
    """

    TYPES: Dict[str, Type] = {}
    """
    A dictionary mapping type names to types.
    """

    @classmethod
    def register_type(cls, type_cls: Type) -> None:
        """
        Registers a type with the factory.

        This method checks if the type has a `__type_name__` attribute
        and registers it with the factory if it does.

        Args:
            type_cls: The type to register.
        """
        if hasattr(type_cls, "__type_name__"):
            cls.TYPES[type_cls.__type_name__] = type_cls

    @classmethod
    def get_instance(cls, update) -> Optional[Type]:
        """
        Resolves a type instance from a nested dictionary.

        This method iterates over the factory's registered types and checks
        if the type name is a key or if its value is present in the dictionary.
        The first match found is returned.

        Args:
            update: The nested dictionary to resolve from.

        Returns:
            The type instance if found, or `None` if not.
        """
        for type_name, instance in cls.TYPES.items():
            if cls._key_exists(update._data, type_name) or cls._value_exists(
                update._data, type_name
            ):
                return instance
        return None

    @classmethod
    def _key_exists(cls, nested_dict: Union[dict, list], field: str) -> bool:
        """
        Checks if a field is a key in a nested dictionary.

        This method recursively checks all dictionaries and lists in the
        nested dictionary for the specified field.

        Args:
            nested_dict: The nested dictionary to search.
            field: The field to search for.

        Returns:
            `True` if the field is found, `False` otherwise.
        """
        if isinstance(nested_dict, dict):
            if field in nested_dict:
                return True
            for key, value in nested_dict.items():
                if isinstance(value, (dict, list)):
                    if cls._key_exists(value, field):
                        return True

        elif isinstance(nested_dict, list):
            for item in nested_dict:
                if isinstance(item, dict):
                    if cls._key_exists(item, field):
                        return True

        return False

    @classmethod
    def _value_exists(cls, nested_dict: Union[dict, list], field: str) -> bool:
        """
        Checks if a field is present as a value in a nested dictionary.

        This method recursively checks all values in the nested dictionary
        for exact matches with the specified field.

        Args:
            nested_dict: The nested dictionary to search.
            field: The field to search for.

        Returns:
            `True` if the field is found, `False` otherwise.
        """
        if isinstance(nested_dict, dict):
            for value in nested_dict.values():
                if value == field:
                    return True
                if isinstance(value, (dict, list)):
                    if cls._value_exists(value, field):
                        return True

        elif isinstance(nested_dict, list):
            for item in nested_dict:
                if isinstance(item, dict):
                    if cls._value_exists(item, field):
                        return True

        return False
