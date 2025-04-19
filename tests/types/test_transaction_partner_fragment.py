import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.transaction_partner_fragment import TransactionPartnerFragment
from surfgram.types.transaction_partner_fragment.factory import (
    TransactionPartnerFragmentsFactory,
)


class TestTransactionPartnerFragment:
    """Tests for TransactionPartnerFragment base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            TransactionPartnerFragment()

    @pytest.fixture
    def concrete_transaction_partner_fragment(self):
        """Concrete TransactionPartnerFragment implementation for testing."""

        class ConcreteTransactionPartnerFragment(TransactionPartnerFragment):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteTransactionPartnerFragment()

    def test_concrete_instantiation(self, concrete_transaction_partner_fragment):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_transaction_partner_fragment, TransactionPartnerFragment
        )


class TestTransactionPartnerFragmentsFactory:
    """Tests for TransactionPartnerFragmentsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        TransactionPartnerFragmentsFactory.TRANSACTIONPARTNERFRAGMENTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(TransactionPartnerFragment):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        TransactionPartnerFragmentsFactory.register_transaction_partner_fragment(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.transaction_partner_fragment = MagicMock()
        mock_update.transaction_partner_fragment.type = "test_trigger"

        result = await TransactionPartnerFragmentsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.transaction_partner_fragment = MagicMock()
        mock_update.transaction_partner_fragment.type = "unknown_trigger"

        assert await TransactionPartnerFragmentsFactory.create(mock_update) is None
