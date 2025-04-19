import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.story_area_type_unique_gift import StoryAreaTypeUniqueGift
from surfgram.types.story_area_type_unique_gift.factory import (
    StoryAreaTypeUniqueGiftsFactory,
)


class TestStoryAreaTypeUniqueGift:
    """Tests for StoryAreaTypeUniqueGift base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            StoryAreaTypeUniqueGift()

    @pytest.fixture
    def concrete_story_area_type_unique_gift(self):
        """Concrete StoryAreaTypeUniqueGift implementation for testing."""

        class ConcreteStoryAreaTypeUniqueGift(StoryAreaTypeUniqueGift):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteStoryAreaTypeUniqueGift()

    def test_concrete_instantiation(self, concrete_story_area_type_unique_gift):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_story_area_type_unique_gift, StoryAreaTypeUniqueGift)


class TestStoryAreaTypeUniqueGiftsFactory:
    """Tests for StoryAreaTypeUniqueGiftsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        StoryAreaTypeUniqueGiftsFactory.STORYAREATYPEUNIQUEGIFTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(StoryAreaTypeUniqueGift):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        StoryAreaTypeUniqueGiftsFactory.register_story_area_type_unique_gift(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.story_area_type_unique_gift = MagicMock()
        mock_update.story_area_type_unique_gift.type = "test_trigger"

        result = await StoryAreaTypeUniqueGiftsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.story_area_type_unique_gift = MagicMock()
        mock_update.story_area_type_unique_gift.type = "unknown_trigger"

        assert await StoryAreaTypeUniqueGiftsFactory.create(mock_update) is None
