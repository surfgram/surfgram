from .converter import CaseConverter


class SnakeCaseConverter(CaseConverter):
    """
    Converter for transforming strings into snake_case format.

    This class implements the `convert` method to convert
    a given string into snake_case, where words are separated
    by underscores and all letters are in lowercase.
    """

    def convert(self, name: str) -> str:
        """
        Convert the given name to snake_case.

        Args:
            name (str): The input string to be converted.

        Returns:
            str: The snake_case representation of the input string.
        """
        return name.lower().replace(" ", "_")
