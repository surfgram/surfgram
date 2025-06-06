import pytest
from surfgram.types.input_venue_message_content import InputVenueMessageContent
from surfgram.types.input_venue_message_content.factory import (
    InputVenueMessageContentsFactory,
)


class TestInputVenueMessageContent:
    """Tests for InputVenueMessageContent base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputVenueMessageContent()

    @pytest.fixture
    def concrete_input_venue_message_content(self):
        """Concrete InputVenueMessageContent implementation for testing."""

        class ConcreteInputVenueMessageContent(InputVenueMessageContent):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInputVenueMessageContent

    def test_concrete_instantiation(self, concrete_input_venue_message_content):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_input_venue_message_content()
        assert isinstance(instance, InputVenueMessageContent)


class TestInputVenueMessageContentsFactory:
    """Tests for InputVenueMessageContentsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputVenueMessageContentsFactory.INPUTVENUEMESSAGECONTENTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputVenueMessageContent):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InputVenueMessageContentsFactory.register_input_venue_message_content(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_venue_message_content = mocker.MagicMock()
        mock_update.input_venue_message_content.title = "test_trigger"

        result = await InputVenueMessageContentsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_venue_message_content = mocker.MagicMock()
        mock_update.input_venue_message_content.title = "unknown_trigger"

        assert await InputVenueMessageContentsFactory.create(mock_update) is None
