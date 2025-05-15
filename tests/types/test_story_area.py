import pytest
from surfgram.types.story_area import StoryArea
from surfgram.types.story_area.factory import StoryAreasFactory


class TestStoryArea:
    """Tests for StoryArea base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            StoryArea()

    @pytest.fixture
    def concrete_story_area(self):
        """Concrete StoryArea implementation for testing."""

        class ConcreteStoryArea(StoryArea):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteStoryArea

    def test_concrete_instantiation(self, concrete_story_area):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_story_area()
        assert isinstance(instance, StoryArea)


class TestStoryAreasFactory:
    """Tests for StoryAreasFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        StoryAreasFactory.STORYAREAS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(StoryArea):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        StoryAreasFactory.register_story_area(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.story_area = mocker.MagicMock()
        mock_update.story_area.position = "test_trigger"

        result = await StoryAreasFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.story_area = mocker.MagicMock()
        mock_update.story_area.position = "unknown_trigger"

        assert await StoryAreasFactory.create(mock_update) is None
