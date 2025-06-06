import pytest
from surfgram.types.inaccessible_message import InaccessibleMessage
from surfgram.types.inaccessible_message.factory import InaccessibleMessagesFactory


class TestInaccessibleMessage:
    """Tests for InaccessibleMessage base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InaccessibleMessage()

    @pytest.fixture
    def concrete_inaccessible_message(self):
        """Concrete InaccessibleMessage implementation for testing."""

        class ConcreteInaccessibleMessage(InaccessibleMessage):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInaccessibleMessage

    def test_concrete_instantiation(self, concrete_inaccessible_message):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_inaccessible_message()
        assert isinstance(instance, InaccessibleMessage)


class TestInaccessibleMessagesFactory:
    """Tests for InaccessibleMessagesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InaccessibleMessagesFactory.INACCESSIBLEMESSAGES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InaccessibleMessage):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InaccessibleMessagesFactory.register_inaccessible_message(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.inaccessible_message = mocker.MagicMock()
        mock_update.inaccessible_message.chat = "test_trigger"

        result = await InaccessibleMessagesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.inaccessible_message = mocker.MagicMock()
        mock_update.inaccessible_message.chat = "unknown_trigger"

        assert await InaccessibleMessagesFactory.create(mock_update) is None
