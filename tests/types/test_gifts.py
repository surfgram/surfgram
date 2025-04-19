import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.gifts import Gifts
from surfgram.types.gifts.factory import GiftsFactory


class TestGifts:
    """Tests for Gifts base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Gifts()

    @pytest.fixture
    def concrete_gifts(self):
        """Concrete Gifts implementation for testing."""

        class ConcreteGifts(Gifts):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteGifts()

    def test_concrete_instantiation(self, concrete_gifts):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_gifts, Gifts)


class TestGiftsFactory:
    """Tests for GiftsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        GiftsFactory.GIFTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Gifts):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        GiftsFactory.register_gifts(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.gifts = MagicMock()
        mock_update.gifts.gifts = "test_trigger"

        result = await GiftsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.gifts = MagicMock()
        mock_update.gifts.gifts = "unknown_trigger"

        assert await GiftsFactory.create(mock_update) is None
