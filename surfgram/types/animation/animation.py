from abc import ABCMeta, abstractmethod
from typing import List, Callable, Any
from .factory import AnimationMeta


class Animation(metaclass=AnimationMeta):
    """Telegram Bot API Animation type"""

    __is_active__: bool = True

    @property
    def __names__(self) -> List[str]:
        """Names/triggers that identify this handler.

        Returns:
            List of trigger names that activate this handler
        """
        return []

    @property
    @abstractmethod
    def __callback__(self) -> Callable[..., Any]:
        """Main handler callback function.

        Returns:
            The callable that will handle the event
        """
        raise NotImplementedError

    def __repr__(self) -> str:
        return f"<{self.__class__.__name__} names={self.__names__}>"
