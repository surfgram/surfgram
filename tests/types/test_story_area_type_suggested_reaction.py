import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.story_area_type_suggested_reaction import (
    StoryAreaTypeSuggestedReaction,
)
from surfgram.types.story_area_type_suggested_reaction.factory import (
    StoryAreaTypeSuggestedReactionsFactory,
)


class TestStoryAreaTypeSuggestedReaction:
    """Tests for StoryAreaTypeSuggestedReaction base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            StoryAreaTypeSuggestedReaction()

    @pytest.fixture
    def concrete_story_area_type_suggested_reaction(self):
        """Concrete StoryAreaTypeSuggestedReaction implementation for testing."""

        class ConcreteStoryAreaTypeSuggestedReaction(StoryAreaTypeSuggestedReaction):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteStoryAreaTypeSuggestedReaction()

    def test_concrete_instantiation(self, concrete_story_area_type_suggested_reaction):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_story_area_type_suggested_reaction, StoryAreaTypeSuggestedReaction
        )


class TestStoryAreaTypeSuggestedReactionsFactory:
    """Tests for StoryAreaTypeSuggestedReactionsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        StoryAreaTypeSuggestedReactionsFactory.STORYAREATYPESUGGESTEDREACTIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(StoryAreaTypeSuggestedReaction):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        StoryAreaTypeSuggestedReactionsFactory.register_story_area_type_suggested_reaction(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.story_area_type_suggested_reaction = MagicMock()
        mock_update.story_area_type_suggested_reaction.type = "test_trigger"

        result = await StoryAreaTypeSuggestedReactionsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.story_area_type_suggested_reaction = MagicMock()
        mock_update.story_area_type_suggested_reaction.type = "unknown_trigger"

        assert await StoryAreaTypeSuggestedReactionsFactory.create(mock_update) is None
