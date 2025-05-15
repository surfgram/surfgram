import pytest
from surfgram.types.story_area_position import StoryAreaPosition
from surfgram.types.story_area_position.factory import StoryAreaPositionsFactory


class TestStoryAreaPosition:
    """Tests for StoryAreaPosition base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            StoryAreaPosition()

    @pytest.fixture
    def concrete_story_area_position(self):
        """Concrete StoryAreaPosition implementation for testing."""

        class ConcreteStoryAreaPosition(StoryAreaPosition):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteStoryAreaPosition

    def test_concrete_instantiation(self, concrete_story_area_position):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_story_area_position()
        assert isinstance(instance, StoryAreaPosition)


class TestStoryAreaPositionsFactory:
    """Tests for StoryAreaPositionsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        StoryAreaPositionsFactory.STORYAREAPOSITIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(StoryAreaPosition):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        StoryAreaPositionsFactory.register_story_area_position(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.story_area_position = mocker.MagicMock()
        mock_update.story_area_position.x_percentage = "test_trigger"

        result = await StoryAreaPositionsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.story_area_position = mocker.MagicMock()
        mock_update.story_area_position.x_percentage = "unknown_trigger"

        assert await StoryAreaPositionsFactory.create(mock_update) is None
