from dataclasses import dataclass, field
from typing import Dict, Any, Optional, Union


@dataclass
class InlineKeyboardButton:
    """
    Represents an inline keyboard button in Telegram.

    This class encapsulates the data for an inline keyboard button,
    allowing for the creation of interactive elements within Telegram
    messages.  It leverages dataclasses for concise data representation
    and provides methods for initialization and data conversion.
    The `extra` field allows storing additional parameters not explicitly
    defined by Telegram's Bot API.
    """

    extra: Dict[str, Any] = field(default_factory=dict)
    """
    A dictionary to store extra, optional parameters for the button.
    This allows for compatibility with future Telegram API updates or
    custom button configurations.  It's initialized as an empty dict.
    """

    def __post_init__(self):
        """
        Post-initialization method (empty implementation).

        This method is called automatically after the object is initialized.
        It's a standard part of dataclasses.  This implementation is empty,
        but it's included in case subclasses need to perform
        post-initialization tasks.
        """
        pass  # pragma: no cover

    def __init__(self, **kwargs):
        """
        Initializes an InlineKeyboardButton instance with keyword arguments.

        This constructor allows setting button properties using keyword
        arguments.  It updates the `extra` dictionary with the provided
        keyword arguments. This provides a flexible way to set the
        button's attributes, including properties not directly defined
        by dataclass fields.

        Args:
            **kwargs: Keyword arguments representing the button's properties
                     (e.g., `text`, `url`, `callback_data`). These are
                     stored within the `extra` dictionary.
        """
        object.__setattr__(
            self, "extra", {}
        )  # prevents dataclass from trying to initialize it before
        self.extra.update(kwargs)

    def to_dict(self) -> Dict[str, Any]:
        """
        Converts the InlineKeyboardButton object to a dictionary.

        This method returns a dictionary representation of the button's
        data, suitable for serialization (e.g., to JSON) when sending
        it to the Telegram Bot API. The dictionary contains all key-value
        pairs from the `extra` dictionary.

        Returns:
            A dictionary representing the InlineKeyboardButton data.
        """
        return self.extra
