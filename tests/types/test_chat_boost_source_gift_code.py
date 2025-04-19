import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.chat_boost_source_gift_code import ChatBoostSourceGiftCode
from surfgram.types.chat_boost_source_gift_code.factory import (
    ChatBoostSourceGiftCodesFactory,
)


class TestChatBoostSourceGiftCode:
    """Tests for ChatBoostSourceGiftCode base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatBoostSourceGiftCode()

    @pytest.fixture
    def concrete_chat_boost_source_gift_code(self):
        """Concrete ChatBoostSourceGiftCode implementation for testing."""

        class ConcreteChatBoostSourceGiftCode(ChatBoostSourceGiftCode):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteChatBoostSourceGiftCode()

    def test_concrete_instantiation(self, concrete_chat_boost_source_gift_code):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_chat_boost_source_gift_code, ChatBoostSourceGiftCode)


class TestChatBoostSourceGiftCodesFactory:
    """Tests for ChatBoostSourceGiftCodesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatBoostSourceGiftCodesFactory.CHATBOOSTSOURCEGIFTCODES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatBoostSourceGiftCode):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        ChatBoostSourceGiftCodesFactory.register_chat_boost_source_gift_code(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.chat_boost_source_gift_code = MagicMock()
        mock_update.chat_boost_source_gift_code.source = "test_trigger"

        result = await ChatBoostSourceGiftCodesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.chat_boost_source_gift_code = MagicMock()
        mock_update.chat_boost_source_gift_code.source = "unknown_trigger"

        assert await ChatBoostSourceGiftCodesFactory.create(mock_update) is None
