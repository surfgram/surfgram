import pytest
from surfgram.types.paid_media_purchased import PaidMediaPurchased
from surfgram.types.paid_media_purchased.factory import PaidMediaPurchasedsFactory


class TestPaidMediaPurchased:
    """Tests for PaidMediaPurchased base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PaidMediaPurchased()

    @pytest.fixture
    def concrete_paid_media_purchased(self):
        """Concrete PaidMediaPurchased implementation for testing."""

        class ConcretePaidMediaPurchased(PaidMediaPurchased):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcretePaidMediaPurchased

    def test_concrete_instantiation(self, concrete_paid_media_purchased):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_paid_media_purchased()
        assert isinstance(instance, PaidMediaPurchased)


class TestPaidMediaPurchasedsFactory:
    """Tests for PaidMediaPurchasedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PaidMediaPurchasedsFactory.PAIDMEDIAPURCHASEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PaidMediaPurchased):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        PaidMediaPurchasedsFactory.register_paid_media_purchased(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.paid_media_purchased = mocker.MagicMock()
        mock_update.paid_media_purchased.paid_media_payload = "test_trigger"

        result = await PaidMediaPurchasedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.paid_media_purchased = mocker.MagicMock()
        mock_update.paid_media_purchased.paid_media_payload = "unknown_trigger"

        assert await PaidMediaPurchasedsFactory.create(mock_update) is None
