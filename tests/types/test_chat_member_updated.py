import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.chat_member_updated import ChatMemberUpdated
from surfgram.types.chat_member_updated.factory import ChatMemberUpdatedsFactory


class TestChatMemberUpdated:
    """Tests for ChatMemberUpdated base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatMemberUpdated()

    @pytest.fixture
    def concrete_chat_member_updated(self):
        """Concrete ChatMemberUpdated implementation for testing."""

        class ConcreteChatMemberUpdated(ChatMemberUpdated):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteChatMemberUpdated()

    def test_concrete_instantiation(self, concrete_chat_member_updated):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_chat_member_updated, ChatMemberUpdated)


class TestChatMemberUpdatedsFactory:
    """Tests for ChatMemberUpdatedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatMemberUpdatedsFactory.CHATMEMBERUPDATEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatMemberUpdated):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        ChatMemberUpdatedsFactory.register_chat_member_updated(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.chat_member_updated = MagicMock()
        mock_update.chat_member_updated.old_chat_member = "test_trigger"

        result = await ChatMemberUpdatedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.chat_member_updated = MagicMock()
        mock_update.chat_member_updated.old_chat_member = "unknown_trigger"

        assert await ChatMemberUpdatedsFactory.create(mock_update) is None
