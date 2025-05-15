import pytest
from surfgram.types.message import Message
from surfgram.types.message.factory import MessagesFactory


class TestMessage:
    """Tests for Message base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Message()

    @pytest.fixture
    def concrete_message(self):
        """Concrete Message implementation for testing."""

        class ConcreteMessage(Message):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteMessage

    def test_concrete_instantiation(self, concrete_message):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_message()
        assert isinstance(instance, Message)


class TestMessagesFactory:
    """Tests for MessagesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        MessagesFactory.MESSAGES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Message):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        MessagesFactory.register_message(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.message = mocker.MagicMock()
        mock_update.message.text = "test_trigger"

        result = await MessagesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.message = mocker.MagicMock()
        mock_update.message.text = "unknown_trigger"

        assert await MessagesFactory.create(mock_update) is None
