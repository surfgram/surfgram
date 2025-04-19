import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.chat import Chat
from surfgram.types.chat.factory import ChatsFactory


class TestChat:
    """Tests for Chat base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Chat()

    @pytest.fixture
    def concrete_chat(self):
        """Concrete Chat implementation for testing."""

        class ConcreteChat(Chat):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteChat()

    def test_concrete_instantiation(self, concrete_chat):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_chat, Chat)


class TestChatsFactory:
    """Tests for ChatsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatsFactory.CHATS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Chat):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        ChatsFactory.register_chat(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.chat = MagicMock()
        mock_update.chat.title = "test_trigger"

        result = await ChatsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.chat = MagicMock()
        mock_update.chat.title = "unknown_trigger"

        assert await ChatsFactory.create(mock_update) is None
