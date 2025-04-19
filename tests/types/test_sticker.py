import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.sticker import Sticker
from surfgram.types.sticker.factory import StickersFactory


class TestSticker:
    """Tests for Sticker base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Sticker()

    @pytest.fixture
    def concrete_sticker(self):
        """Concrete Sticker implementation for testing."""

        class ConcreteSticker(Sticker):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteSticker()

    def test_concrete_instantiation(self, concrete_sticker):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_sticker, Sticker)


class TestStickersFactory:
    """Tests for StickersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        StickersFactory.STICKERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Sticker):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        StickersFactory.register_sticker(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.sticker = MagicMock()
        mock_update.sticker.is_video = "test_trigger"

        result = await StickersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.sticker = MagicMock()
        mock_update.sticker.is_video = "unknown_trigger"

        assert await StickersFactory.create(mock_update) is None
