import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.star_amount import StarAmount
from surfgram.types.star_amount.factory import StarAmountsFactory


class TestStarAmount:
    """Tests for StarAmount base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            StarAmount()

    @pytest.fixture
    def concrete_star_amount(self):
        """Concrete StarAmount implementation for testing."""

        class ConcreteStarAmount(StarAmount):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteStarAmount()

    def test_concrete_instantiation(self, concrete_star_amount):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_star_amount, StarAmount)


class TestStarAmountsFactory:
    """Tests for StarAmountsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        StarAmountsFactory.STARAMOUNTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(StarAmount):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        StarAmountsFactory.register_star_amount(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.star_amount = MagicMock()
        mock_update.star_amount.amount = "test_trigger"

        result = await StarAmountsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.star_amount = MagicMock()
        mock_update.star_amount.amount = "unknown_trigger"

        assert await StarAmountsFactory.create(mock_update) is None
