import pytest
from surfgram.types.chat_permissions import ChatPermissions
from surfgram.types.chat_permissions.factory import ChatPermissionsFactory


class TestChatPermissions:
    """Tests for ChatPermissions base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatPermissions()

    @pytest.fixture
    def concrete_chat_permissions(self):
        """Concrete ChatPermissions implementation for testing."""

        class ConcreteChatPermissions(ChatPermissions):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteChatPermissions

    def test_concrete_instantiation(self, concrete_chat_permissions):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chat_permissions()
        assert isinstance(instance, ChatPermissions)


class TestChatPermissionsFactory:
    """Tests for ChatPermissionsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatPermissionsFactory.CHATPERMISSIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatPermissions):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ChatPermissionsFactory.register_chat_permissions(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_permissions = mocker.MagicMock()
        mock_update.chat_permissions.can_send_audios = "test_trigger"

        result = await ChatPermissionsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_permissions = mocker.MagicMock()
        mock_update.chat_permissions.can_send_audios = "unknown_trigger"

        assert await ChatPermissionsFactory.create(mock_update) is None
