import pytest
from surfgram.types.revenue_withdrawal_state_succeeded import (
    RevenueWithdrawalStateSucceeded,
)
from surfgram.types.revenue_withdrawal_state_succeeded.factory import (
    RevenueWithdrawalStateSucceededsFactory,
)


class TestRevenueWithdrawalStateSucceeded:
    """Tests for RevenueWithdrawalStateSucceeded base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            RevenueWithdrawalStateSucceeded()

    @pytest.fixture
    def concrete_revenue_withdrawal_state_succeeded(self):
        """Concrete RevenueWithdrawalStateSucceeded implementation for testing."""

        class ConcreteRevenueWithdrawalStateSucceeded(RevenueWithdrawalStateSucceeded):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteRevenueWithdrawalStateSucceeded

    def test_concrete_instantiation(self, concrete_revenue_withdrawal_state_succeeded):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_revenue_withdrawal_state_succeeded()
        assert isinstance(instance, RevenueWithdrawalStateSucceeded)


class TestRevenueWithdrawalStateSucceededsFactory:
    """Tests for RevenueWithdrawalStateSucceededsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        RevenueWithdrawalStateSucceededsFactory.REVENUEWITHDRAWALSTATESUCCEEDEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(RevenueWithdrawalStateSucceeded):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        RevenueWithdrawalStateSucceededsFactory.register_revenue_withdrawal_state_succeeded(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.revenue_withdrawal_state_succeeded = mocker.MagicMock()
        mock_update.revenue_withdrawal_state_succeeded.type = "test_trigger"

        result = await RevenueWithdrawalStateSucceededsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.revenue_withdrawal_state_succeeded = mocker.MagicMock()
        mock_update.revenue_withdrawal_state_succeeded.type = "unknown_trigger"

        assert await RevenueWithdrawalStateSucceededsFactory.create(mock_update) is None
