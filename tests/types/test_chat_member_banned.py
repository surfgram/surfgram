import pytest
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

            async def __callback__(self):
                return None

        return ConcreteChatMemberBanned

    def test_concrete_instantiation(self, concrete_chat_member_banned):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chat_member_banned()
        assert isinstance(instance, ChatMemberBanned)


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

            async def __callback__(self):
                return None

        ChatMemberBannedsFactory.register_chat_member_banned(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_member_banned = mocker.MagicMock()
        mock_update.chat_member_banned.status = "test_trigger"

        result = await ChatMemberBannedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_member_banned = mocker.MagicMock()
        mock_update.chat_member_banned.status = "unknown_trigger"

        assert await ChatMemberBannedsFactory.create(mock_update) is None
