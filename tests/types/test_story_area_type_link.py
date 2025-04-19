import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.story_area_type_link import StoryAreaTypeLink
from surfgram.types.story_area_type_link.factory import StoryAreaTypeLinksFactory


class TestStoryAreaTypeLink:
    """Tests for StoryAreaTypeLink base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            StoryAreaTypeLink()

    @pytest.fixture
    def concrete_story_area_type_link(self):
        """Concrete StoryAreaTypeLink implementation for testing."""

        class ConcreteStoryAreaTypeLink(StoryAreaTypeLink):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteStoryAreaTypeLink()

    def test_concrete_instantiation(self, concrete_story_area_type_link):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_story_area_type_link, StoryAreaTypeLink)


class TestStoryAreaTypeLinksFactory:
    """Tests for StoryAreaTypeLinksFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        StoryAreaTypeLinksFactory.STORYAREATYPELINKS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(StoryAreaTypeLink):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        StoryAreaTypeLinksFactory.register_story_area_type_link(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.story_area_type_link = MagicMock()
        mock_update.story_area_type_link.type = "test_trigger"

        result = await StoryAreaTypeLinksFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.story_area_type_link = MagicMock()
        mock_update.story_area_type_link.type = "unknown_trigger"

        assert await StoryAreaTypeLinksFactory.create(mock_update) is None
