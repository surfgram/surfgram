import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.forum_topic_edited import ForumTopicEdited
from surfgram.types.forum_topic_edited.factory import ForumTopicEditedsFactory


class TestForumTopicEdited:
    """Tests for ForumTopicEdited base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ForumTopicEdited()

    @pytest.fixture
    def concrete_forum_topic_edited(self):
        """Concrete ForumTopicEdited implementation for testing."""

        class ConcreteForumTopicEdited(ForumTopicEdited):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteForumTopicEdited()

    def test_concrete_instantiation(self, concrete_forum_topic_edited):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_forum_topic_edited, ForumTopicEdited)


class TestForumTopicEditedsFactory:
    """Tests for ForumTopicEditedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ForumTopicEditedsFactory.FORUMTOPICEDITEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ForumTopicEdited):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        ForumTopicEditedsFactory.register_forum_topic_edited(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.forum_topic_edited = MagicMock()
        mock_update.forum_topic_edited.name = "test_trigger"

        result = await ForumTopicEditedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.forum_topic_edited = MagicMock()
        mock_update.forum_topic_edited.name = "unknown_trigger"

        assert await ForumTopicEditedsFactory.create(mock_update) is None
