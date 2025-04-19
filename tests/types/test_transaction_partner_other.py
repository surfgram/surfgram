import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.transaction_partner_other import TransactionPartnerOther
from surfgram.types.transaction_partner_other.factory import (
    TransactionPartnerOthersFactory,
)


class TestTransactionPartnerOther:
    """Tests for TransactionPartnerOther base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            TransactionPartnerOther()

    @pytest.fixture
    def concrete_transaction_partner_other(self):
        """Concrete TransactionPartnerOther implementation for testing."""

        class ConcreteTransactionPartnerOther(TransactionPartnerOther):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteTransactionPartnerOther()

    def test_concrete_instantiation(self, concrete_transaction_partner_other):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_transaction_partner_other, TransactionPartnerOther)


class TestTransactionPartnerOthersFactory:
    """Tests for TransactionPartnerOthersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        TransactionPartnerOthersFactory.TRANSACTIONPARTNEROTHERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(TransactionPartnerOther):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        TransactionPartnerOthersFactory.register_transaction_partner_other(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.transaction_partner_other = MagicMock()
        mock_update.transaction_partner_other.type = "test_trigger"

        result = await TransactionPartnerOthersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.transaction_partner_other = MagicMock()
        mock_update.transaction_partner_other.type = "unknown_trigger"

        assert await TransactionPartnerOthersFactory.create(mock_update) is None
