import pytest
from surfgram.types.invoice import Invoice
from surfgram.types.invoice.factory import InvoicesFactory


class TestInvoice:
    """Tests for Invoice base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Invoice()

    @pytest.fixture
    def concrete_invoice(self):
        """Concrete Invoice implementation for testing."""

        class ConcreteInvoice(Invoice):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInvoice

    def test_concrete_instantiation(self, concrete_invoice):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_invoice()
        assert isinstance(instance, Invoice)


class TestInvoicesFactory:
    """Tests for InvoicesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InvoicesFactory.INVOICES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Invoice):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InvoicesFactory.register_invoice(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.invoice = mocker.MagicMock()
        mock_update.invoice.title = "test_trigger"

        result = await InvoicesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.invoice = mocker.MagicMock()
        mock_update.invoice.title = "unknown_trigger"

        assert await InvoicesFactory.create(mock_update) is None
