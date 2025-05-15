import pytest
from surfgram.types.message_origin_channel import MessageOriginChannel
from surfgram.types.message_origin_channel.factory import MessageOriginChannelsFactory


class TestMessageOriginChannel:
    """Tests for MessageOriginChannel base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            MessageOriginChannel()

    @pytest.fixture
    def concrete_message_origin_channel(self):
        """Concrete MessageOriginChannel implementation for testing."""

        class ConcreteMessageOriginChannel(MessageOriginChannel):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteMessageOriginChannel

    def test_concrete_instantiation(self, concrete_message_origin_channel):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_message_origin_channel()
        assert isinstance(instance, MessageOriginChannel)


class TestMessageOriginChannelsFactory:
    """Tests for MessageOriginChannelsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        MessageOriginChannelsFactory.MESSAGEORIGINCHANNELS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(MessageOriginChannel):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        MessageOriginChannelsFactory.register_message_origin_channel(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.message_origin_channel = mocker.MagicMock()
        mock_update.message_origin_channel.type = "test_trigger"

        result = await MessageOriginChannelsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.message_origin_channel = mocker.MagicMock()
        mock_update.message_origin_channel.type = "unknown_trigger"

        assert await MessageOriginChannelsFactory.create(mock_update) is None
