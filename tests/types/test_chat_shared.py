import pytest
from surfgram.types.chat_shared import ChatShared
from surfgram.types.chat_shared.factory import ChatSharedsFactory


class TestChatShared:
    """Tests for ChatShared base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatShared()

    @pytest.fixture
    def concrete_chat_shared(self):
        """Concrete ChatShared implementation for testing."""

        class ConcreteChatShared(ChatShared):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteChatShared

    def test_concrete_instantiation(self, concrete_chat_shared):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chat_shared()
        assert isinstance(instance, ChatShared)


class TestChatSharedsFactory:
    """Tests for ChatSharedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatSharedsFactory.CHATSHAREDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatShared):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ChatSharedsFactory.register_chat_shared(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_shared = mocker.MagicMock()
        mock_update.chat_shared.title = "test_trigger"

        result = await ChatSharedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_shared = mocker.MagicMock()
        mock_update.chat_shared.title = "unknown_trigger"

        assert await ChatSharedsFactory.create(mock_update) is None
