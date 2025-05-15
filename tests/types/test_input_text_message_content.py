import pytest
from surfgram.types.input_text_message_content import InputTextMessageContent
from surfgram.types.input_text_message_content.factory import (
    InputTextMessageContentsFactory,
)


class TestInputTextMessageContent:
    """Tests for InputTextMessageContent base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputTextMessageContent()

    @pytest.fixture
    def concrete_input_text_message_content(self):
        """Concrete InputTextMessageContent implementation for testing."""

        class ConcreteInputTextMessageContent(InputTextMessageContent):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInputTextMessageContent

    def test_concrete_instantiation(self, concrete_input_text_message_content):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_input_text_message_content()
        assert isinstance(instance, InputTextMessageContent)


class TestInputTextMessageContentsFactory:
    """Tests for InputTextMessageContentsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputTextMessageContentsFactory.INPUTTEXTMESSAGECONTENTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputTextMessageContent):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InputTextMessageContentsFactory.register_input_text_message_content(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_text_message_content = mocker.MagicMock()
        mock_update.input_text_message_content.message_text = "test_trigger"

        result = await InputTextMessageContentsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_text_message_content = mocker.MagicMock()
        mock_update.input_text_message_content.message_text = "unknown_trigger"

        assert await InputTextMessageContentsFactory.create(mock_update) is None
