import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.labeled_price import LabeledPrice
from surfgram.types.labeled_price.factory import LabeledPricesFactory


class TestLabeledPrice:
    """Tests for LabeledPrice base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            LabeledPrice()

    @pytest.fixture
    def concrete_labeled_price(self):
        """Concrete LabeledPrice implementation for testing."""

        class ConcreteLabeledPrice(LabeledPrice):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteLabeledPrice()

    def test_concrete_instantiation(self, concrete_labeled_price):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_labeled_price, LabeledPrice)


class TestLabeledPricesFactory:
    """Tests for LabeledPricesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        LabeledPricesFactory.LABELEDPRICES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(LabeledPrice):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        LabeledPricesFactory.register_labeled_price(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.labeled_price = MagicMock()
        mock_update.labeled_price.label = "test_trigger"

        result = await LabeledPricesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.labeled_price = MagicMock()
        mock_update.labeled_price.label = "unknown_trigger"

        assert await LabeledPricesFactory.create(mock_update) is None
