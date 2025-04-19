from .converter import CaseConverter


class CamelCaseConverter(CaseConverter):
    """
    Converter for transforming strings into CamelCase format.

    This class implements the `convert` method to convert
    a given string into CamelCase, which capitalizes the first
    letter of each word following the first word and removes any separators.
    """

    def convert(self, name: str) -> str:
        """
        Convert the given name to CamelCase.

        Args:
            name (str): The input string to be converted, expected
                         to be in snake_case format.

        Returns:
            str: The CamelCase representation of the input string.
        """
        words = name.split("_")
        return words[0] + "".join(word.capitalize() for word in words[1:])
