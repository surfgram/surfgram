import pytest
from surfgram.types.story_area_type_location import StoryAreaTypeLocation
from surfgram.types.story_area_type_location.factory import (
    StoryAreaTypeLocationsFactory,
)


class TestStoryAreaTypeLocation:
    """Tests for StoryAreaTypeLocation base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            StoryAreaTypeLocation()

    @pytest.fixture
    def concrete_story_area_type_location(self):
        """Concrete StoryAreaTypeLocation implementation for testing."""

        class ConcreteStoryAreaTypeLocation(StoryAreaTypeLocation):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteStoryAreaTypeLocation

    def test_concrete_instantiation(self, concrete_story_area_type_location):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_story_area_type_location()
        assert isinstance(instance, StoryAreaTypeLocation)


class TestStoryAreaTypeLocationsFactory:
    """Tests for StoryAreaTypeLocationsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        StoryAreaTypeLocationsFactory.STORYAREATYPELOCATIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(StoryAreaTypeLocation):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        StoryAreaTypeLocationsFactory.register_story_area_type_location(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.story_area_type_location = mocker.MagicMock()
        mock_update.story_area_type_location.address = "test_trigger"

        result = await StoryAreaTypeLocationsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.story_area_type_location = mocker.MagicMock()
        mock_update.story_area_type_location.address = "unknown_trigger"

        assert await StoryAreaTypeLocationsFactory.create(mock_update) is None
