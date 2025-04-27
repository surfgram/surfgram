from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class SwitchInlineQueryChosenChatMeta(ABCMeta):
    """Metaclass for SwitchInlineQueryChosenChat classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            SwitchInlineQueryChosenChatsFactory.register_switch_inline_query_chosen_chat(
                new_class
            )
        return new_class


class SwitchInlineQueryChosenChatsFactory(TypesFactory):
    """Factory for creating SwitchInlineQueryChosenChat instances."""

    SWITCHINLINEQUERYCHOSENCHATS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "switch_inline_query_chosen_chat"

    @classmethod
    def register_switch_inline_query_chosen_chat(
        cls, switch_inline_query_chosen_chat_cls: Type
    ) -> None:
        """Register a new switch_inline_query_chosen_chat handler."""
        instance = switch_inline_query_chosen_chat_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = switch_inline_query_chosen_chat_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.SWITCHINLINEQUERYCHOSENCHATS_REGISTRY[name] = (
                        switch_inline_query_chosen_chat_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.switch_inline_query_chosen_chat
        trigger_value = obj.query

        # Try to get specific handler first
        handler_cls = cls.SWITCHINLINEQUERYCHOSENCHATS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
