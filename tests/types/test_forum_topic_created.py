import pytest
from surfgram.types.forum_topic_created import ForumTopicCreated
from surfgram.types.forum_topic_created.factory import ForumTopicCreatedsFactory


class TestForumTopicCreated:
    """Tests for ForumTopicCreated base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ForumTopicCreated()

    @pytest.fixture
    def concrete_forum_topic_created(self):
        """Concrete ForumTopicCreated implementation for testing."""

        class ConcreteForumTopicCreated(ForumTopicCreated):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteForumTopicCreated

    def test_concrete_instantiation(self, concrete_forum_topic_created):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_forum_topic_created()
        assert isinstance(instance, ForumTopicCreated)


class TestForumTopicCreatedsFactory:
    """Tests for ForumTopicCreatedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ForumTopicCreatedsFactory.FORUMTOPICCREATEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ForumTopicCreated):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ForumTopicCreatedsFactory.register_forum_topic_created(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.forum_topic_created = mocker.MagicMock()
        mock_update.forum_topic_created.name = "test_trigger"

        result = await ForumTopicCreatedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.forum_topic_created = mocker.MagicMock()
        mock_update.forum_topic_created.name = "unknown_trigger"

        assert await ForumTopicCreatedsFactory.create(mock_update) is None
