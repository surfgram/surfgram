import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.successful_payment import SuccessfulPayment
from surfgram.types.successful_payment.factory import SuccessfulPaymentsFactory


class TestSuccessfulPayment:
    """Tests for SuccessfulPayment base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            SuccessfulPayment()

    @pytest.fixture
    def concrete_successful_payment(self):
        """Concrete SuccessfulPayment implementation for testing."""

        class ConcreteSuccessfulPayment(SuccessfulPayment):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteSuccessfulPayment()

    def test_concrete_instantiation(self, concrete_successful_payment):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_successful_payment, SuccessfulPayment)


class TestSuccessfulPaymentsFactory:
    """Tests for SuccessfulPaymentsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        SuccessfulPaymentsFactory.SUCCESSFULPAYMENTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(SuccessfulPayment):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        SuccessfulPaymentsFactory.register_successful_payment(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.successful_payment = MagicMock()
        mock_update.successful_payment.invoice_payload = "test_trigger"

        result = await SuccessfulPaymentsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.successful_payment = MagicMock()
        mock_update.successful_payment.invoice_payload = "unknown_trigger"

        assert await SuccessfulPaymentsFactory.create(mock_update) is None
