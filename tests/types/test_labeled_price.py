import pytest
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

            async def __callback__(self):
                return None

        return ConcreteLabeledPrice

    def test_concrete_instantiation(self, concrete_labeled_price):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_labeled_price()
        assert isinstance(instance, LabeledPrice)


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

            async def __callback__(self):
                return None

        LabeledPricesFactory.register_labeled_price(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.labeled_price = mocker.MagicMock()
        mock_update.labeled_price.label = "test_trigger"

        result = await LabeledPricesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.labeled_price = mocker.MagicMock()
        mock_update.labeled_price.label = "unknown_trigger"

        assert await LabeledPricesFactory.create(mock_update) is None
