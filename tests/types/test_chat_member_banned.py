import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.chat_member_banned import ChatMemberBanned
from surfgram.types.chat_member_banned.factory import ChatMemberBannedsFactory


class TestChatMemberBanned:
    """Tests for ChatMemberBanned base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatMemberBanned()

    @pytest.fixture
    def concrete_chat_member_banned(self):
        """Concrete ChatMemberBanned implementation for testing."""

        class ConcreteChatMemberBanned(ChatMemberBanned):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteChatMemberBanned()

    def test_concrete_instantiation(self, concrete_chat_member_banned):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_chat_member_banned, ChatMemberBanned)


class TestChatMemberBannedsFactory:
    """Tests for ChatMemberBannedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatMemberBannedsFactory.CHATMEMBERBANNEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatMemberBanned):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        ChatMemberBannedsFactory.register_chat_member_banned(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.chat_member_banned = MagicMock()
        mock_update.chat_member_banned.status = "test_trigger"

        result = await ChatMemberBannedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.chat_member_banned = MagicMock()
        mock_update.chat_member_banned.status = "unknown_trigger"

        assert await ChatMemberBannedsFactory.create(mock_update) is None
