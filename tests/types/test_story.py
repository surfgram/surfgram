import pytest
from surfgram.types.story import Story
from surfgram.types.story.factory import StoriesFactory


class TestStory:
    """Tests for Story base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Story()

    @pytest.fixture
    def concrete_story(self):
        """Concrete Story implementation for testing."""

        class ConcreteStory(Story):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteStory

    def test_concrete_instantiation(self, concrete_story):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_story()
        assert isinstance(instance, Story)


class TestStoriesFactory:
    """Tests for StoriesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        StoriesFactory.STORIES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Story):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        StoriesFactory.register_story(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.story = mocker.MagicMock()
        mock_update.story.chat = "test_trigger"

        result = await StoriesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.story = mocker.MagicMock()
        mock_update.story.chat = "unknown_trigger"

        assert await StoriesFactory.create(mock_update) is None
