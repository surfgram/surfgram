import pytest
from surfgram.types.chat_administrator_rights import ChatAdministratorRights
from surfgram.types.chat_administrator_rights.factory import (
    ChatAdministratorRightsFactory,
)


class TestChatAdministratorRights:
    """Tests for ChatAdministratorRights base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatAdministratorRights()

    @pytest.fixture
    def concrete_chat_administrator_rights(self):
        """Concrete ChatAdministratorRights implementation for testing."""

        class ConcreteChatAdministratorRights(ChatAdministratorRights):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteChatAdministratorRights

    def test_concrete_instantiation(self, concrete_chat_administrator_rights):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chat_administrator_rights()
        assert isinstance(instance, ChatAdministratorRights)


class TestChatAdministratorRightsFactory:
    """Tests for ChatAdministratorRightsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatAdministratorRightsFactory.CHATADMINISTRATORRIGHTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatAdministratorRights):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ChatAdministratorRightsFactory.register_chat_administrator_rights(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_administrator_rights = mocker.MagicMock()
        mock_update.chat_administrator_rights.can_manage_video_chats = "test_trigger"

        result = await ChatAdministratorRightsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_administrator_rights = mocker.MagicMock()
        mock_update.chat_administrator_rights.can_manage_video_chats = "unknown_trigger"

        assert await ChatAdministratorRightsFactory.create(mock_update) is None
