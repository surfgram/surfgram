import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.chat_boost_removed import ChatBoostRemoved
from surfgram.types.chat_boost_removed.factory import ChatBoostRemovedsFactory


class TestChatBoostRemoved:
    """Tests for ChatBoostRemoved base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatBoostRemoved()

    @pytest.fixture
    def concrete_chat_boost_removed(self):
        """Concrete ChatBoostRemoved implementation for testing."""

        class ConcreteChatBoostRemoved(ChatBoostRemoved):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteChatBoostRemoved()

    def test_concrete_instantiation(self, concrete_chat_boost_removed):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_chat_boost_removed, ChatBoostRemoved)


class TestChatBoostRemovedsFactory:
    """Tests for ChatBoostRemovedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatBoostRemovedsFactory.CHATBOOSTREMOVEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatBoostRemoved):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        ChatBoostRemovedsFactory.register_chat_boost_removed(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.chat_boost_removed = MagicMock()
        mock_update.chat_boost_removed.boost_id = "test_trigger"

        result = await ChatBoostRemovedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.chat_boost_removed = MagicMock()
        mock_update.chat_boost_removed.boost_id = "unknown_trigger"

        assert await ChatBoostRemovedsFactory.create(mock_update) is None
