import pytest
from surfgram.types.chat_member_left import ChatMemberLeft
from surfgram.types.chat_member_left.factory import ChatMemberLeftsFactory


class TestChatMemberLeft:
    """Tests for ChatMemberLeft base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatMemberLeft()

    @pytest.fixture
    def concrete_chat_member_left(self):
        """Concrete ChatMemberLeft implementation for testing."""

        class ConcreteChatMemberLeft(ChatMemberLeft):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteChatMemberLeft

    def test_concrete_instantiation(self, concrete_chat_member_left):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chat_member_left()
        assert isinstance(instance, ChatMemberLeft)


class TestChatMemberLeftsFactory:
    """Tests for ChatMemberLeftsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatMemberLeftsFactory.CHATMEMBERLEFTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatMemberLeft):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ChatMemberLeftsFactory.register_chat_member_left(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_member_left = mocker.MagicMock()
        mock_update.chat_member_left.status = "test_trigger"

        result = await ChatMemberLeftsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_member_left = mocker.MagicMock()
        mock_update.chat_member_left.status = "unknown_trigger"

        assert await ChatMemberLeftsFactory.create(mock_update) is None
