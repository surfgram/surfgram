import pytest
from surfgram.types.star_transaction import StarTransaction
from surfgram.types.star_transaction.factory import StarTransactionsFactory


class TestStarTransaction:
    """Tests for StarTransaction base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            StarTransaction()

    @pytest.fixture
    def concrete_star_transaction(self):
        """Concrete StarTransaction implementation for testing."""

        class ConcreteStarTransaction(StarTransaction):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteStarTransaction

    def test_concrete_instantiation(self, concrete_star_transaction):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_star_transaction()
        assert isinstance(instance, StarTransaction)


class TestStarTransactionsFactory:
    """Tests for StarTransactionsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        StarTransactionsFactory.STARTRANSACTIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(StarTransaction):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        StarTransactionsFactory.register_star_transaction(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.star_transaction = mocker.MagicMock()
        mock_update.star_transaction.amount = "test_trigger"

        result = await StarTransactionsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.star_transaction = mocker.MagicMock()
        mock_update.star_transaction.amount = "unknown_trigger"

        assert await StarTransactionsFactory.create(mock_update) is None
