import pytest
from surfgram.types.chat_member_owner import ChatMemberOwner
from surfgram.types.chat_member_owner.factory import ChatMemberOwnersFactory


class TestChatMemberOwner:
    """Tests for ChatMemberOwner base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatMemberOwner()

    @pytest.fixture
    def concrete_chat_member_owner(self):
        """Concrete ChatMemberOwner implementation for testing."""

        class ConcreteChatMemberOwner(ChatMemberOwner):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteChatMemberOwner

    def test_concrete_instantiation(self, concrete_chat_member_owner):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chat_member_owner()
        assert isinstance(instance, ChatMemberOwner)


class TestChatMemberOwnersFactory:
    """Tests for ChatMemberOwnersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatMemberOwnersFactory.CHATMEMBEROWNERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatMemberOwner):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ChatMemberOwnersFactory.register_chat_member_owner(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_member_owner = mocker.MagicMock()
        mock_update.chat_member_owner.custom_title = "test_trigger"

        result = await ChatMemberOwnersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_member_owner = mocker.MagicMock()
        mock_update.chat_member_owner.custom_title = "unknown_trigger"

        assert await ChatMemberOwnersFactory.create(mock_update) is None
