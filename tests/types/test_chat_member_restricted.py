import pytest
from surfgram.types.chat_member_restricted import ChatMemberRestricted
from surfgram.types.chat_member_restricted.factory import ChatMemberRestrictedsFactory


class TestChatMemberRestricted:
    """Tests for ChatMemberRestricted base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatMemberRestricted()

    @pytest.fixture
    def concrete_chat_member_restricted(self):
        """Concrete ChatMemberRestricted implementation for testing."""

        class ConcreteChatMemberRestricted(ChatMemberRestricted):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteChatMemberRestricted

    def test_concrete_instantiation(self, concrete_chat_member_restricted):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chat_member_restricted()
        assert isinstance(instance, ChatMemberRestricted)


class TestChatMemberRestrictedsFactory:
    """Tests for ChatMemberRestrictedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatMemberRestrictedsFactory.CHATMEMBERRESTRICTEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatMemberRestricted):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ChatMemberRestrictedsFactory.register_chat_member_restricted(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_member_restricted = mocker.MagicMock()
        mock_update.chat_member_restricted.can_send_audios = "test_trigger"

        result = await ChatMemberRestrictedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_member_restricted = mocker.MagicMock()
        mock_update.chat_member_restricted.can_send_audios = "unknown_trigger"

        assert await ChatMemberRestrictedsFactory.create(mock_update) is None
