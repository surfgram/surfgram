import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.background_type_wallpaper import BackgroundTypeWallpaper
from surfgram.types.background_type_wallpaper.factory import (
    BackgroundTypeWallpapersFactory,
)


class TestBackgroundTypeWallpaper:
    """Tests for BackgroundTypeWallpaper base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BackgroundTypeWallpaper()

    @pytest.fixture
    def concrete_background_type_wallpaper(self):
        """Concrete BackgroundTypeWallpaper implementation for testing."""

        class ConcreteBackgroundTypeWallpaper(BackgroundTypeWallpaper):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteBackgroundTypeWallpaper()

    def test_concrete_instantiation(self, concrete_background_type_wallpaper):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_background_type_wallpaper, BackgroundTypeWallpaper)


class TestBackgroundTypeWallpapersFactory:
    """Tests for BackgroundTypeWallpapersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BackgroundTypeWallpapersFactory.BACKGROUNDTYPEWALLPAPERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BackgroundTypeWallpaper):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        BackgroundTypeWallpapersFactory.register_background_type_wallpaper(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.background_type_wallpaper = MagicMock()
        mock_update.background_type_wallpaper.document = "test_trigger"

        result = await BackgroundTypeWallpapersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.background_type_wallpaper = MagicMock()
        mock_update.background_type_wallpaper.document = "unknown_trigger"

        assert await BackgroundTypeWallpapersFactory.create(mock_update) is None
