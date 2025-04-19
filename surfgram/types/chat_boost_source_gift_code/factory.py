from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatBoostSourceGiftCodeMeta(ABCMeta):
    """Metaclass for ChatBoostSourceGiftCode classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatBoostSourceGiftCodesFactory.register_chat_boost_source_gift_code(
                new_class
            )
        return new_class


class ChatBoostSourceGiftCodesFactory(TypesFactory):
    """Factory for creating ChatBoostSourceGiftCode instances."""

    CHATBOOSTSOURCEGIFTCODES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_boost_source_gift_code"

    @classmethod
    def register_chat_boost_source_gift_code(
        cls, chat_boost_source_gift_code_cls: Type
    ) -> None:
        """Register a new chat_boost_source_gift_code handler."""
        instance = chat_boost_source_gift_code_cls()
        for name in instance.__names__:
            cls.CHATBOOSTSOURCEGIFTCODES_REGISTRY[name] = (
                chat_boost_source_gift_code_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_boost_source_gift_code
        trigger_value = obj.source
        return cls.CHATBOOSTSOURCEGIFTCODES_REGISTRY.get(trigger_value)()
