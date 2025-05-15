import pytest
from surfgram.types.message_id import MessageId
from surfgram.types.message_id.factory import MessageIdsFactory


class TestMessageId:
    """Tests for MessageId base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            MessageId()

    @pytest.fixture
    def concrete_message_id(self):
        """Concrete MessageId implementation for testing."""

        class ConcreteMessageId(MessageId):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteMessageId

    def test_concrete_instantiation(self, concrete_message_id):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_message_id()
        assert isinstance(instance, MessageId)


class TestMessageIdsFactory:
    """Tests for MessageIdsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        MessageIdsFactory.MESSAGEIDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(MessageId):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        MessageIdsFactory.register_message_id(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.message_id = mocker.MagicMock()
        mock_update.message_id.message_id = "test_trigger"

        result = await MessageIdsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.message_id = mocker.MagicMock()
        mock_update.message_id.message_id = "unknown_trigger"

        assert await MessageIdsFactory.create(mock_update) is None
