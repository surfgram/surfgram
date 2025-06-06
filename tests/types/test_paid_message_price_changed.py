import pytest
from surfgram.types.paid_message_price_changed import PaidMessagePriceChanged
from surfgram.types.paid_message_price_changed.factory import (
    PaidMessagePriceChangedsFactory,
)


class TestPaidMessagePriceChanged:
    """Tests for PaidMessagePriceChanged base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PaidMessagePriceChanged()

    @pytest.fixture
    def concrete_paid_message_price_changed(self):
        """Concrete PaidMessagePriceChanged implementation for testing."""

        class ConcretePaidMessagePriceChanged(PaidMessagePriceChanged):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcretePaidMessagePriceChanged

    def test_concrete_instantiation(self, concrete_paid_message_price_changed):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_paid_message_price_changed()
        assert isinstance(instance, PaidMessagePriceChanged)


class TestPaidMessagePriceChangedsFactory:
    """Tests for PaidMessagePriceChangedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PaidMessagePriceChangedsFactory.PAIDMESSAGEPRICECHANGEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PaidMessagePriceChanged):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        PaidMessagePriceChangedsFactory.register_paid_message_price_changed(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.paid_message_price_changed = mocker.MagicMock()
        mock_update.paid_message_price_changed.paid_message_star_count = "test_trigger"

        result = await PaidMessagePriceChangedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.paid_message_price_changed = mocker.MagicMock()
        mock_update.paid_message_price_changed.paid_message_star_count = (
            "unknown_trigger"
        )

        assert await PaidMessagePriceChangedsFactory.create(mock_update) is None
