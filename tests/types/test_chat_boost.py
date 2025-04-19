import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.chat_boost import ChatBoost
from surfgram.types.chat_boost.factory import ChatBoostsFactory


class TestChatBoost:
    """Tests for ChatBoost base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatBoost()

    @pytest.fixture
    def concrete_chat_boost(self):
        """Concrete ChatBoost implementation for testing."""

        class ConcreteChatBoost(ChatBoost):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteChatBoost()

    def test_concrete_instantiation(self, concrete_chat_boost):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_chat_boost, ChatBoost)


class TestChatBoostsFactory:
    """Tests for ChatBoostsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatBoostsFactory.CHATBOOSTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatBoost):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        ChatBoostsFactory.register_chat_boost(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.chat_boost = MagicMock()
        mock_update.chat_boost.boost_id = "test_trigger"

        result = await ChatBoostsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.chat_boost = MagicMock()
        mock_update.chat_boost.boost_id = "unknown_trigger"

        assert await ChatBoostsFactory.create(mock_update) is None
