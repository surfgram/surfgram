import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.unique_gift_backdrop_colors import UniqueGiftBackdropColors
from surfgram.types.unique_gift_backdrop_colors.factory import (
    UniqueGiftBackdropColorsFactory,
)


class TestUniqueGiftBackdropColors:
    """Tests for UniqueGiftBackdropColors base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            UniqueGiftBackdropColors()

    @pytest.fixture
    def concrete_unique_gift_backdrop_colors(self):
        """Concrete UniqueGiftBackdropColors implementation for testing."""

        class ConcreteUniqueGiftBackdropColors(UniqueGiftBackdropColors):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteUniqueGiftBackdropColors()

    def test_concrete_instantiation(self, concrete_unique_gift_backdrop_colors):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_unique_gift_backdrop_colors, UniqueGiftBackdropColors
        )


class TestUniqueGiftBackdropColorsFactory:
    """Tests for UniqueGiftBackdropColorsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        UniqueGiftBackdropColorsFactory.UNIQUEGIFTBACKDROPCOLORS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(UniqueGiftBackdropColors):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        UniqueGiftBackdropColorsFactory.register_unique_gift_backdrop_colors(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.unique_gift_backdrop_colors = MagicMock()
        mock_update.unique_gift_backdrop_colors.text_color = "test_trigger"

        result = await UniqueGiftBackdropColorsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.unique_gift_backdrop_colors = MagicMock()
        mock_update.unique_gift_backdrop_colors.text_color = "unknown_trigger"

        assert await UniqueGiftBackdropColorsFactory.create(mock_update) is None
