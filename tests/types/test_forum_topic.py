import pytest
from surfgram.types.forum_topic import ForumTopic
from surfgram.types.forum_topic.factory import ForumTopicsFactory


class TestForumTopic:
    """Tests for ForumTopic base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ForumTopic()

    @pytest.fixture
    def concrete_forum_topic(self):
        """Concrete ForumTopic implementation for testing."""

        class ConcreteForumTopic(ForumTopic):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteForumTopic

    def test_concrete_instantiation(self, concrete_forum_topic):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_forum_topic()
        assert isinstance(instance, ForumTopic)


class TestForumTopicsFactory:
    """Tests for ForumTopicsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ForumTopicsFactory.FORUMTOPICS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ForumTopic):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ForumTopicsFactory.register_forum_topic(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.forum_topic = mocker.MagicMock()
        mock_update.forum_topic.name = "test_trigger"

        result = await ForumTopicsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.forum_topic = mocker.MagicMock()
        mock_update.forum_topic.name = "unknown_trigger"

        assert await ForumTopicsFactory.create(mock_update) is None
