import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.transaction_partner_affiliate_program import (
    TransactionPartnerAffiliateProgram,
)
from surfgram.types.transaction_partner_affiliate_program.factory import (
    TransactionPartnerAffiliateProgramsFactory,
)


class TestTransactionPartnerAffiliateProgram:
    """Tests for TransactionPartnerAffiliateProgram base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            TransactionPartnerAffiliateProgram()

    @pytest.fixture
    def concrete_transaction_partner_affiliate_program(self):
        """Concrete TransactionPartnerAffiliateProgram implementation for testing."""

        class ConcreteTransactionPartnerAffiliateProgram(
            TransactionPartnerAffiliateProgram
        ):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteTransactionPartnerAffiliateProgram()

    def test_concrete_instantiation(
        self, concrete_transaction_partner_affiliate_program
    ):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_transaction_partner_affiliate_program,
            TransactionPartnerAffiliateProgram,
        )


class TestTransactionPartnerAffiliateProgramsFactory:
    """Tests for TransactionPartnerAffiliateProgramsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        TransactionPartnerAffiliateProgramsFactory.TRANSACTIONPARTNERAFFILIATEPROGRAMS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(TransactionPartnerAffiliateProgram):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        TransactionPartnerAffiliateProgramsFactory.register_transaction_partner_affiliate_program(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.transaction_partner_affiliate_program = MagicMock()
        mock_update.transaction_partner_affiliate_program.type = "test_trigger"

        result = await TransactionPartnerAffiliateProgramsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.transaction_partner_affiliate_program = MagicMock()
        mock_update.transaction_partner_affiliate_program.type = "unknown_trigger"

        assert (
            await TransactionPartnerAffiliateProgramsFactory.create(mock_update) is None
        )
