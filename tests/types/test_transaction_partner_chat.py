import pytest
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

            async def __callback__(self):
                return None

        return ConcreteTransactionPartnerChat

    def test_concrete_instantiation(self, concrete_transaction_partner_chat):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_transaction_partner_chat()
        assert isinstance(instance, TransactionPartnerChat)


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

            async def __callback__(self):
                return None

        TransactionPartnerChatsFactory.register_transaction_partner_chat(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.transaction_partner_chat = mocker.MagicMock()
        mock_update.transaction_partner_chat.type = "test_trigger"

        result = await TransactionPartnerChatsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.transaction_partner_chat = mocker.MagicMock()
        mock_update.transaction_partner_chat.type = "unknown_trigger"

        assert await TransactionPartnerChatsFactory.create(mock_update) is None
