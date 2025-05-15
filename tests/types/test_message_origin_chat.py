import pytest
from surfgram.types.message_origin_chat import MessageOriginChat
from surfgram.types.message_origin_chat.factory import MessageOriginChatsFactory


class TestMessageOriginChat:
    """Tests for MessageOriginChat base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            MessageOriginChat()

    @pytest.fixture
    def concrete_message_origin_chat(self):
        """Concrete MessageOriginChat implementation for testing."""

        class ConcreteMessageOriginChat(MessageOriginChat):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteMessageOriginChat

    def test_concrete_instantiation(self, concrete_message_origin_chat):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_message_origin_chat()
        assert isinstance(instance, MessageOriginChat)


class TestMessageOriginChatsFactory:
    """Tests for MessageOriginChatsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        MessageOriginChatsFactory.MESSAGEORIGINCHATS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(MessageOriginChat):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        MessageOriginChatsFactory.register_message_origin_chat(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.message_origin_chat = mocker.MagicMock()
        mock_update.message_origin_chat.type = "test_trigger"

        result = await MessageOriginChatsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.message_origin_chat = mocker.MagicMock()
        mock_update.message_origin_chat.type = "unknown_trigger"

        assert await MessageOriginChatsFactory.create(mock_update) is None
