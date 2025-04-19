import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.chat_background import ChatBackground
from surfgram.types.chat_background.factory import ChatBackgroundsFactory


class TestChatBackground:
    """Tests for ChatBackground base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatBackground()

    @pytest.fixture
    def concrete_chat_background(self):
        """Concrete ChatBackground implementation for testing."""

        class ConcreteChatBackground(ChatBackground):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteChatBackground()

    def test_concrete_instantiation(self, concrete_chat_background):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_chat_background, ChatBackground)


class TestChatBackgroundsFactory:
    """Tests for ChatBackgroundsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatBackgroundsFactory.CHATBACKGROUNDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatBackground):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        ChatBackgroundsFactory.register_chat_background(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.chat_background = MagicMock()
        mock_update.chat_background.type = "test_trigger"

        result = await ChatBackgroundsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.chat_background = MagicMock()
        mock_update.chat_background.type = "unknown_trigger"

        assert await ChatBackgroundsFactory.create(mock_update) is None
