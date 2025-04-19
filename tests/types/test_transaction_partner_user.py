import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.transaction_partner_user import TransactionPartnerUser
from surfgram.types.transaction_partner_user.factory import (
    TransactionPartnerUsersFactory,
)


class TestTransactionPartnerUser:
    """Tests for TransactionPartnerUser base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            TransactionPartnerUser()

    @pytest.fixture
    def concrete_transaction_partner_user(self):
        """Concrete TransactionPartnerUser implementation for testing."""

        class ConcreteTransactionPartnerUser(TransactionPartnerUser):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteTransactionPartnerUser()

    def test_concrete_instantiation(self, concrete_transaction_partner_user):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_transaction_partner_user, TransactionPartnerUser)


class TestTransactionPartnerUsersFactory:
    """Tests for TransactionPartnerUsersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        TransactionPartnerUsersFactory.TRANSACTIONPARTNERUSERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(TransactionPartnerUser):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        TransactionPartnerUsersFactory.register_transaction_partner_user(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.transaction_partner_user = MagicMock()
        mock_update.transaction_partner_user.invoice_payload = "test_trigger"

        result = await TransactionPartnerUsersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.transaction_partner_user = MagicMock()
        mock_update.transaction_partner_user.invoice_payload = "unknown_trigger"

        assert await TransactionPartnerUsersFactory.create(mock_update) is None
