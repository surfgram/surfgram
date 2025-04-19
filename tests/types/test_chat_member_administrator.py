import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.chat_member_administrator import ChatMemberAdministrator
from surfgram.types.chat_member_administrator.factory import (
    ChatMemberAdministratorsFactory,
)


class TestChatMemberAdministrator:
    """Tests for ChatMemberAdministrator base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatMemberAdministrator()

    @pytest.fixture
    def concrete_chat_member_administrator(self):
        """Concrete ChatMemberAdministrator implementation for testing."""

        class ConcreteChatMemberAdministrator(ChatMemberAdministrator):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteChatMemberAdministrator()

    def test_concrete_instantiation(self, concrete_chat_member_administrator):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_chat_member_administrator, ChatMemberAdministrator)


class TestChatMemberAdministratorsFactory:
    """Tests for ChatMemberAdministratorsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatMemberAdministratorsFactory.CHATMEMBERADMINISTRATORS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatMemberAdministrator):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        ChatMemberAdministratorsFactory.register_chat_member_administrator(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.chat_member_administrator = MagicMock()
        mock_update.chat_member_administrator.can_manage_video_chats = "test_trigger"

        result = await ChatMemberAdministratorsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.chat_member_administrator = MagicMock()
        mock_update.chat_member_administrator.can_manage_video_chats = "unknown_trigger"

        assert await ChatMemberAdministratorsFactory.create(mock_update) is None
