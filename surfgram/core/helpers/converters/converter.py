from abc import ABC, abstractmethod


class CaseConverter(ABC):
    """
    Abstract base class representing a case converter interface.

    This class defines the interface for case converters.
    Subclasses should implement the `convert` method to provide
    specific case conversion logic.
    """

    @abstractmethod
    def convert(self, name: str) -> str:
        """
        Convert the given name to a specific case format.

        Args:
            name (str): The input string to be converted.

        Returns:
            str: The converted string in the specified case format.
        """
        pass
