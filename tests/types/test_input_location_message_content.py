import pytest
from surfgram.types.input_location_message_content import InputLocationMessageContent
from surfgram.types.input_location_message_content.factory import (
    InputLocationMessageContentsFactory,
)


class TestInputLocationMessageContent:
    """Tests for InputLocationMessageContent base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputLocationMessageContent()

    @pytest.fixture
    def concrete_input_location_message_content(self):
        """Concrete InputLocationMessageContent implementation for testing."""

        class ConcreteInputLocationMessageContent(InputLocationMessageContent):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInputLocationMessageContent

    def test_concrete_instantiation(self, concrete_input_location_message_content):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_input_location_message_content()
        assert isinstance(instance, InputLocationMessageContent)


class TestInputLocationMessageContentsFactory:
    """Tests for InputLocationMessageContentsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputLocationMessageContentsFactory.INPUTLOCATIONMESSAGECONTENTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputLocationMessageContent):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InputLocationMessageContentsFactory.register_input_location_message_content(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_location_message_content = mocker.MagicMock()
        mock_update.input_location_message_content.latitude = "test_trigger"

        result = await InputLocationMessageContentsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_location_message_content = mocker.MagicMock()
        mock_update.input_location_message_content.latitude = "unknown_trigger"

        assert await InputLocationMessageContentsFactory.create(mock_update) is None
