import pytest
from surfgram.types.input_invoice_message_content import InputInvoiceMessageContent
from surfgram.types.input_invoice_message_content.factory import (
    InputInvoiceMessageContentsFactory,
)


class TestInputInvoiceMessageContent:
    """Tests for InputInvoiceMessageContent base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputInvoiceMessageContent()

    @pytest.fixture
    def concrete_input_invoice_message_content(self):
        """Concrete InputInvoiceMessageContent implementation for testing."""

        class ConcreteInputInvoiceMessageContent(InputInvoiceMessageContent):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInputInvoiceMessageContent

    def test_concrete_instantiation(self, concrete_input_invoice_message_content):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_input_invoice_message_content()
        assert isinstance(instance, InputInvoiceMessageContent)


class TestInputInvoiceMessageContentsFactory:
    """Tests for InputInvoiceMessageContentsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputInvoiceMessageContentsFactory.INPUTINVOICEMESSAGECONTENTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputInvoiceMessageContent):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InputInvoiceMessageContentsFactory.register_input_invoice_message_content(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_invoice_message_content = mocker.MagicMock()
        mock_update.input_invoice_message_content.title = "test_trigger"

        result = await InputInvoiceMessageContentsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_invoice_message_content = mocker.MagicMock()
        mock_update.input_invoice_message_content.title = "unknown_trigger"

        assert await InputInvoiceMessageContentsFactory.create(mock_update) is None
