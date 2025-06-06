import pytest
from surfgram.types.revenue_withdrawal_state_pending import (
    RevenueWithdrawalStatePending,
)
from surfgram.types.revenue_withdrawal_state_pending.factory import (
    RevenueWithdrawalStatePendingsFactory,
)


class TestRevenueWithdrawalStatePending:
    """Tests for RevenueWithdrawalStatePending base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            RevenueWithdrawalStatePending()

    @pytest.fixture
    def concrete_revenue_withdrawal_state_pending(self):
        """Concrete RevenueWithdrawalStatePending implementation for testing."""

        class ConcreteRevenueWithdrawalStatePending(RevenueWithdrawalStatePending):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteRevenueWithdrawalStatePending

    def test_concrete_instantiation(self, concrete_revenue_withdrawal_state_pending):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_revenue_withdrawal_state_pending()
        assert isinstance(instance, RevenueWithdrawalStatePending)


class TestRevenueWithdrawalStatePendingsFactory:
    """Tests for RevenueWithdrawalStatePendingsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        RevenueWithdrawalStatePendingsFactory.REVENUEWITHDRAWALSTATEPENDINGS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(RevenueWithdrawalStatePending):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        RevenueWithdrawalStatePendingsFactory.register_revenue_withdrawal_state_pending(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.revenue_withdrawal_state_pending = mocker.MagicMock()
        mock_update.revenue_withdrawal_state_pending.type = "test_trigger"

        result = await RevenueWithdrawalStatePendingsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.revenue_withdrawal_state_pending = mocker.MagicMock()
        mock_update.revenue_withdrawal_state_pending.type = "unknown_trigger"

        assert await RevenueWithdrawalStatePendingsFactory.create(mock_update) is None
