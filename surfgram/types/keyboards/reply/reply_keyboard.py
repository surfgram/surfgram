from typing import List, Dict, Any


class ReplyKeyboard:
    """
    Represents a reply keyboard for Telegram.

    This class provides a mechanism to create custom keyboards that appear
    directly above the Telegram input field.  It handles the formatting
    of the keyboard's layout and allows for additional options.
    It is designed to be extended by concrete keyboard implementations
    (e.g., keyboards with specific button layouts).
    """

    @property
    def __keyboard__(self) -> List[List["ReplyKeyboardButton"]]:
        """
        Gets the reply keyboard layout.

        This property must be implemented by subclasses to return
        a 2D list of `ReplyKeyboardButton` instances, representing
        the keyboard's layout.  Each inner list represents a row of
        buttons.

        Returns:
            A 2D list of `ReplyKeyboardButton` objects representing the keyboard.

        Raises:
            NotImplementedError:  If not implemented by a subclass. This
                is essential as the base class has no concrete button
                layout.
        """
        raise NotImplementedError()

    def to_markup(self, **kwargs) -> Dict[str, Any]:
        """
        Converts the reply keyboard to a markup dictionary.

        This method transforms the keyboard layout into a dictionary
        format that can be sent to the Telegram Bot API.  It structures
        the data according to the API's requirements. It also allows for
        merging additional parameters to customize the keyboard (e.g.,
        `resize_keyboard`, `one_time_keyboard`).

        Args:
            **kwargs:  Additional keyword arguments to include in the
                       markup dictionary. These are typically options
                       related to the keyboard's behavior.

        Returns:
            A dictionary representing the reply keyboard markup.
        """
        keyboard_data = {
            "keyboard": [
                [button.to_dict() for button in row] for row in self.__keyboard__
            ],
        }

        keyboard_data.update(kwargs)
        return keyboard_data

    def __new__(cls, *args, **kwargs):
        """
        Creates a new instance of the ReplyKeyboard and returns its markup.

        This method overrides the default `__new__` method to return the
        keyboard's markup dictionary directly, instead of the instance
        itself.  This simplifies usage, as the client code doesn't need
        to call `to_markup()` explicitly.

        Args:
            *args: Variable length argument list (passed to the superclass's
                   `__new__`).
            **kwargs: Arbitrary keyword arguments (passed to the
                     superclass's `__new__`).

        Returns:
            The markup dictionary for the reply keyboard.
        """
        instance = super().__new__(cls)
        return instance.to_markup()

    def __repr__(self) -> str:
        """
        Returns a string representation of the reply keyboard.

        This method provides a string representation of the keyboard's
        markup dictionary, useful for debugging or logging.

        Returns:
            A string representation of the keyboard markup.
        """
        return str(self.to_markup())

    def __str__(self) -> str:
        """
        Returns a string representation of the reply keyboard.

        This method provides a user-friendly string representation
        of the keyboard markup, similar to `__repr__`.

        Returns:
            A string representation of the keyboard markup.
        """
        return str(self.to_markup())
