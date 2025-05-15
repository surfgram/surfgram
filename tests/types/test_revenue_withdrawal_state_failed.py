import pytest
from surfgram.types.revenue_withdrawal_state_failed import RevenueWithdrawalStateFailed
from surfgram.types.revenue_withdrawal_state_failed.factory import (
    RevenueWithdrawalStateFailedsFactory,
)


class TestRevenueWithdrawalStateFailed:
    """Tests for RevenueWithdrawalStateFailed base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            RevenueWithdrawalStateFailed()

    @pytest.fixture
    def concrete_revenue_withdrawal_state_failed(self):
        """Concrete RevenueWithdrawalStateFailed implementation for testing."""

        class ConcreteRevenueWithdrawalStateFailed(RevenueWithdrawalStateFailed):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteRevenueWithdrawalStateFailed

    def test_concrete_instantiation(self, concrete_revenue_withdrawal_state_failed):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_revenue_withdrawal_state_failed()
        assert isinstance(instance, RevenueWithdrawalStateFailed)


class TestRevenueWithdrawalStateFailedsFactory:
    """Tests for RevenueWithdrawalStateFailedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        RevenueWithdrawalStateFailedsFactory.REVENUEWITHDRAWALSTATEFAILEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(RevenueWithdrawalStateFailed):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        RevenueWithdrawalStateFailedsFactory.register_revenue_withdrawal_state_failed(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.revenue_withdrawal_state_failed = mocker.MagicMock()
        mock_update.revenue_withdrawal_state_failed.type = "test_trigger"

        result = await RevenueWithdrawalStateFailedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.revenue_withdrawal_state_failed = mocker.MagicMock()
        mock_update.revenue_withdrawal_state_failed.type = "unknown_trigger"

        assert await RevenueWithdrawalStateFailedsFactory.create(mock_update) is None
