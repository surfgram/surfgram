from typing import List, Dict, Any


class InlineKeyboard:
    """
    Represents an inline keyboard for Telegram.

    This class encapsulates the data for an inline keyboard,
    allowing for the creation of interactive elements within Telegram
    messages. It provides a method to convert the keyboard to a markup
    dictionary, which can be sent to the Telegram Bot API.
    """

    @property
    def __keyboard__(self) -> List[List["InlineKeyboardButton"]]:
        """
        Gets the inline keyboard layout.

        This property must be implemented by subclasses to return
        a 2D list of InlineKeyboardButton instances, representing the
        keyboard's layout.

        Raises:
            NotImplementedError: If not implemented by a subclass.
        """
        raise NotImplementedError()

    def to_markup(self, **kwargs) -> Dict[str, Any]:
        """
        Converts the inline keyboard to a markup dictionary.

        This method takes the keyboard layout and converts it into a
        dictionary that can be sent to the Telegram Bot API. It also
        accepts additional keyword arguments to be merged into the
        resulting dictionary.

        Args:
            **kwargs: Additional keyword arguments to be included in the markup dictionary.

        Returns:
            A dictionary representing the inline keyboard markup.
        """
        keyboard_data = {
            "inline_keyboard": [
                [button.to_dict() for button in row] for row in self.__keyboard__
            ],
        }

        keyboard_data.update(kwargs)
        return keyboard_data

    def __new__(cls, *args, **kwargs):
        """
        Creates a new instance of the InlineKeyboard class and returns its markup.

        This method overrides the default __new__ method to return the
        keyboard's markup dictionary instead of the instance itself.

        Args:
            *args: Variable length argument list.
            **kwargs: Arbitrary keyword arguments.

        Returns:
            The markup dictionary for the inline keyboard.
        """
        instance = super().__new__(cls)
        return instance.to_markup()

    def __repr__(self) -> str:
        """
        Returns a string representation of the inline keyboard.

        This method returns a string representation of the keyboard's
        markup dictionary.

        Returns:
            A string representation of the inline keyboard markup.
        """
        return str(self.to_markup())

    def __str__(self) -> str:
        """
        Returns a string representation of the inline keyboard.

        This method returns a string representation of the keyboard's
        markup dictionary.

        Returns:
            A string representation of the inline keyboard markup.
        """
        return str(self.to_markup())
