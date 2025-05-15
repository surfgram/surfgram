import pytest
from surfgram.types.transaction_partner_telegram_ads import (
    TransactionPartnerTelegramAds,
)
from surfgram.types.transaction_partner_telegram_ads.factory import (
    TransactionPartnerTelegramAdsFactory,
)


class TestTransactionPartnerTelegramAds:
    """Tests for TransactionPartnerTelegramAds base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            TransactionPartnerTelegramAds()

    @pytest.fixture
    def concrete_transaction_partner_telegram_ads(self):
        """Concrete TransactionPartnerTelegramAds implementation for testing."""

        class ConcreteTransactionPartnerTelegramAds(TransactionPartnerTelegramAds):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteTransactionPartnerTelegramAds

    def test_concrete_instantiation(self, concrete_transaction_partner_telegram_ads):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_transaction_partner_telegram_ads()
        assert isinstance(instance, TransactionPartnerTelegramAds)


class TestTransactionPartnerTelegramAdsFactory:
    """Tests for TransactionPartnerTelegramAdsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        TransactionPartnerTelegramAdsFactory.TRANSACTIONPARTNERTELEGRAMADS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(TransactionPartnerTelegramAds):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        TransactionPartnerTelegramAdsFactory.register_transaction_partner_telegram_ads(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.transaction_partner_telegram_ads = mocker.MagicMock()
        mock_update.transaction_partner_telegram_ads.type = "test_trigger"

        result = await TransactionPartnerTelegramAdsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.transaction_partner_telegram_ads = mocker.MagicMock()
        mock_update.transaction_partner_telegram_ads.type = "unknown_trigger"

        assert await TransactionPartnerTelegramAdsFactory.create(mock_update) is None
