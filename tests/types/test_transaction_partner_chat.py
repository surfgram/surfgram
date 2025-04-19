import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.transaction_partner_chat import TransactionPartnerChat
from surfgram.types.transaction_partner_chat.factory import (
    TransactionPartnerChatsFactory,
)


class TestTransactionPartnerChat:
    """Tests for TransactionPartnerChat base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            TransactionPartnerChat()

    @pytest.fixture
    def concrete_transaction_partner_chat(self):
        """Concrete TransactionPartnerChat implementation for testing."""

        class ConcreteTransactionPartnerChat(TransactionPartnerChat):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteTransactionPartnerChat()

    def test_concrete_instantiation(self, concrete_transaction_partner_chat):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_transaction_partner_chat, TransactionPartnerChat)


class TestTransactionPartnerChatsFactory:
    """Tests for TransactionPartnerChatsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        TransactionPartnerChatsFactory.TRANSACTIONPARTNERCHATS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(TransactionPartnerChat):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        TransactionPartnerChatsFactory.register_transaction_partner_chat(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.transaction_partner_chat = MagicMock()
        mock_update.transaction_partner_chat.type = "test_trigger"

        result = await TransactionPartnerChatsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.transaction_partner_chat = MagicMock()
        mock_update.transaction_partner_chat.type = "unknown_trigger"

        assert await TransactionPartnerChatsFactory.create(mock_update) is None
