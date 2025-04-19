import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.chat_join_request import ChatJoinRequest
from surfgram.types.chat_join_request.factory import ChatJoinRequestsFactory


class TestChatJoinRequest:
    """Tests for ChatJoinRequest base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatJoinRequest()

    @pytest.fixture
    def concrete_chat_join_request(self):
        """Concrete ChatJoinRequest implementation for testing."""

        class ConcreteChatJoinRequest(ChatJoinRequest):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteChatJoinRequest()

    def test_concrete_instantiation(self, concrete_chat_join_request):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_chat_join_request, ChatJoinRequest)


class TestChatJoinRequestsFactory:
    """Tests for ChatJoinRequestsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatJoinRequestsFactory.CHATJOINREQUESTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatJoinRequest):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        ChatJoinRequestsFactory.register_chat_join_request(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.chat_join_request = MagicMock()
        mock_update.chat_join_request.bio = "test_trigger"

        result = await ChatJoinRequestsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.chat_join_request = MagicMock()
        mock_update.chat_join_request.bio = "unknown_trigger"

        assert await ChatJoinRequestsFactory.create(mock_update) is None
