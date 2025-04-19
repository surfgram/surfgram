import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.story_area_type_weather import StoryAreaTypeWeather
from surfgram.types.story_area_type_weather.factory import StoryAreaTypeWeathersFactory


class TestStoryAreaTypeWeather:
    """Tests for StoryAreaTypeWeather base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            StoryAreaTypeWeather()

    @pytest.fixture
    def concrete_story_area_type_weather(self):
        """Concrete StoryAreaTypeWeather implementation for testing."""

        class ConcreteStoryAreaTypeWeather(StoryAreaTypeWeather):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteStoryAreaTypeWeather()

    def test_concrete_instantiation(self, concrete_story_area_type_weather):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_story_area_type_weather, StoryAreaTypeWeather)


class TestStoryAreaTypeWeathersFactory:
    """Tests for StoryAreaTypeWeathersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        StoryAreaTypeWeathersFactory.STORYAREATYPEWEATHERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(StoryAreaTypeWeather):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        StoryAreaTypeWeathersFactory.register_story_area_type_weather(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.story_area_type_weather = MagicMock()
        mock_update.story_area_type_weather.type = "test_trigger"

        result = await StoryAreaTypeWeathersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.story_area_type_weather = MagicMock()
        mock_update.story_area_type_weather.type = "unknown_trigger"

        assert await StoryAreaTypeWeathersFactory.create(mock_update) is None
