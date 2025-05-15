import pytest
from surfgram.types.refunded_payment import RefundedPayment
from surfgram.types.refunded_payment.factory import RefundedPaymentsFactory


class TestRefundedPayment:
    """Tests for RefundedPayment base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            RefundedPayment()

    @pytest.fixture
    def concrete_refunded_payment(self):
        """Concrete RefundedPayment implementation for testing."""

        class ConcreteRefundedPayment(RefundedPayment):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteRefundedPayment

    def test_concrete_instantiation(self, concrete_refunded_payment):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_refunded_payment()
        assert isinstance(instance, RefundedPayment)


class TestRefundedPaymentsFactory:
    """Tests for RefundedPaymentsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        RefundedPaymentsFactory.REFUNDEDPAYMENTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(RefundedPayment):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        RefundedPaymentsFactory.register_refunded_payment(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.refunded_payment = mocker.MagicMock()
        mock_update.refunded_payment.invoice_payload = "test_trigger"

        result = await RefundedPaymentsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.refunded_payment = mocker.MagicMock()
        mock_update.refunded_payment.invoice_payload = "unknown_trigger"

        assert await RefundedPaymentsFactory.create(mock_update) is None
