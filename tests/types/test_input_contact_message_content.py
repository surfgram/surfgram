import pytest
from surfgram.types.input_contact_message_content import InputContactMessageContent
from surfgram.types.input_contact_message_content.factory import (
    InputContactMessageContentsFactory,
)


class TestInputContactMessageContent:
    """Tests for InputContactMessageContent base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputContactMessageContent()

    @pytest.fixture
    def concrete_input_contact_message_content(self):
        """Concrete InputContactMessageContent implementation for testing."""

        class ConcreteInputContactMessageContent(InputContactMessageContent):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInputContactMessageContent

    def test_concrete_instantiation(self, concrete_input_contact_message_content):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_input_contact_message_content()
        assert isinstance(instance, InputContactMessageContent)


class TestInputContactMessageContentsFactory:
    """Tests for InputContactMessageContentsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputContactMessageContentsFactory.INPUTCONTACTMESSAGECONTENTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputContactMessageContent):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InputContactMessageContentsFactory.register_input_contact_message_content(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_contact_message_content = mocker.MagicMock()
        mock_update.input_contact_message_content.phone_number = "test_trigger"

        result = await InputContactMessageContentsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_contact_message_content = mocker.MagicMock()
        mock_update.input_contact_message_content.phone_number = "unknown_trigger"

        assert await InputContactMessageContentsFactory.create(mock_update) is None
