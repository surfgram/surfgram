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
    __type_name__ = "switch_inline_query_chosen_chat"

    @classmethod
    def register_switch_inline_query_chosen_chat(
        cls, switch_inline_query_chosen_chat_cls: Type
    ) -> None:
        """Register a new switch_inline_query_chosen_chat handler."""
        instance = switch_inline_query_chosen_chat_cls()
        for name in instance.__names__:
            cls.SWITCHINLINEQUERYCHOSENCHATS_REGISTRY[name] = (
                switch_inline_query_chosen_chat_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.switch_inline_query_chosen_chat
        trigger_value = obj.query
        return cls.SWITCHINLINEQUERYCHOSENCHATS_REGISTRY.get(trigger_value)()
