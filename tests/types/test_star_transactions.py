import pytest
from surfgram.types.star_transactions import StarTransactions
from surfgram.types.star_transactions.factory import StarTransactionsFactory


class TestStarTransactions:
    """Tests for StarTransactions base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            StarTransactions()

    @pytest.fixture
    def concrete_star_transactions(self):
        """Concrete StarTransactions implementation for testing."""

        class ConcreteStarTransactions(StarTransactions):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteStarTransactions

    def test_concrete_instantiation(self, concrete_star_transactions):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_star_transactions()
        assert isinstance(instance, StarTransactions)


class TestStarTransactionsFactory:
    """Tests for StarTransactionsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        StarTransactionsFactory.STARTRANSACTIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(StarTransactions):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        StarTransactionsFactory.register_star_transactions(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.star_transactions = mocker.MagicMock()
        mock_update.star_transactions.transactions = "test_trigger"

        result = await StarTransactionsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.star_transactions = mocker.MagicMock()
        mock_update.star_transactions.transactions = "unknown_trigger"

        assert await StarTransactionsFactory.create(mock_update) is None
