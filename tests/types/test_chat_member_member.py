import pytest
from surfgram.types.chat_member_member import ChatMemberMember
from surfgram.types.chat_member_member.factory import ChatMemberMembersFactory


class TestChatMemberMember:
    """Tests for ChatMemberMember base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatMemberMember()

    @pytest.fixture
    def concrete_chat_member_member(self):
        """Concrete ChatMemberMember implementation for testing."""

        class ConcreteChatMemberMember(ChatMemberMember):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteChatMemberMember

    def test_concrete_instantiation(self, concrete_chat_member_member):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chat_member_member()
        assert isinstance(instance, ChatMemberMember)


class TestChatMemberMembersFactory:
    """Tests for ChatMemberMembersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatMemberMembersFactory.CHATMEMBERMEMBERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatMemberMember):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ChatMemberMembersFactory.register_chat_member_member(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_member_member = mocker.MagicMock()
        mock_update.chat_member_member.status = "test_trigger"

        result = await ChatMemberMembersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_member_member = mocker.MagicMock()
        mock_update.chat_member_member.status = "unknown_trigger"

        assert await ChatMemberMembersFactory.create(mock_update) is None
