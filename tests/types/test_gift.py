import pytest
from surfgram.types.gift import Gift
from surfgram.types.gift.factory import GiftsFactory


class TestGift:
    """Tests for Gift base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Gift()

    @pytest.fixture
    def concrete_gift(self):
        """Concrete Gift implementation for testing."""

        class ConcreteGift(Gift):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteGift

    def test_concrete_instantiation(self, concrete_gift):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_gift()
        assert isinstance(instance, Gift)


class TestGiftsFactory:
    """Tests for GiftsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        GiftsFactory.GIFTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Gift):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        GiftsFactory.register_gift(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.gift = mocker.MagicMock()
        mock_update.gift.sticker = "test_trigger"

        result = await GiftsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.gift = mocker.MagicMock()
        mock_update.gift.sticker = "unknown_trigger"

        assert await GiftsFactory.create(mock_update) is None
