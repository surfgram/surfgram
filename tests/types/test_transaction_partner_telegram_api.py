import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.transaction_partner_telegram_api import (
    TransactionPartnerTelegramApi,
)
from surfgram.types.transaction_partner_telegram_api.factory import (
    TransactionPartnerTelegramApisFactory,
)


class TestTransactionPartnerTelegramApi:
    """Tests for TransactionPartnerTelegramApi base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            TransactionPartnerTelegramApi()

    @pytest.fixture
    def concrete_transaction_partner_telegram_api(self):
        """Concrete TransactionPartnerTelegramApi implementation for testing."""

        class ConcreteTransactionPartnerTelegramApi(TransactionPartnerTelegramApi):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteTransactionPartnerTelegramApi()

    def test_concrete_instantiation(self, concrete_transaction_partner_telegram_api):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_transaction_partner_telegram_api, TransactionPartnerTelegramApi
        )


class TestTransactionPartnerTelegramApisFactory:
    """Tests for TransactionPartnerTelegramApisFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        TransactionPartnerTelegramApisFactory.TRANSACTIONPARTNERTELEGRAMAPIS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(TransactionPartnerTelegramApi):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        TransactionPartnerTelegramApisFactory.register_transaction_partner_telegram_api(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.transaction_partner_telegram_api = MagicMock()
        mock_update.transaction_partner_telegram_api.type = "test_trigger"

        result = await TransactionPartnerTelegramApisFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.transaction_partner_telegram_api = MagicMock()
        mock_update.transaction_partner_telegram_api.type = "unknown_trigger"

        assert await TransactionPartnerTelegramApisFactory.create(mock_update) is None
