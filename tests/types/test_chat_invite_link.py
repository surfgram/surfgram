import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.chat_invite_link import ChatInviteLink
from surfgram.types.chat_invite_link.factory import ChatInviteLinksFactory


class TestChatInviteLink:
    """Tests for ChatInviteLink base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatInviteLink()

    @pytest.fixture
    def concrete_chat_invite_link(self):
        """Concrete ChatInviteLink implementation for testing."""

        class ConcreteChatInviteLink(ChatInviteLink):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteChatInviteLink()

    def test_concrete_instantiation(self, concrete_chat_invite_link):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_chat_invite_link, ChatInviteLink)


class TestChatInviteLinksFactory:
    """Tests for ChatInviteLinksFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatInviteLinksFactory.CHATINVITELINKS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatInviteLink):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        ChatInviteLinksFactory.register_chat_invite_link(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.chat_invite_link = MagicMock()
        mock_update.chat_invite_link.invite_link = "test_trigger"

        result = await ChatInviteLinksFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.chat_invite_link = MagicMock()
        mock_update.chat_invite_link.invite_link = "unknown_trigger"

        assert await ChatInviteLinksFactory.create(mock_update) is None
