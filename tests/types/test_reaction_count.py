import pytest
from surfgram.types.reaction_count import ReactionCount
from surfgram.types.reaction_count.factory import ReactionCountsFactory


class TestReactionCount:
    """Tests for ReactionCount base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ReactionCount()

    @pytest.fixture
    def concrete_reaction_count(self):
        """Concrete ReactionCount implementation for testing."""

        class ConcreteReactionCount(ReactionCount):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteReactionCount

    def test_concrete_instantiation(self, concrete_reaction_count):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_reaction_count()
        assert isinstance(instance, ReactionCount)


class TestReactionCountsFactory:
    """Tests for ReactionCountsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ReactionCountsFactory.REACTIONCOUNTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ReactionCount):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ReactionCountsFactory.register_reaction_count(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.reaction_count = mocker.MagicMock()
        mock_update.reaction_count.type = "test_trigger"

        result = await ReactionCountsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.reaction_count = mocker.MagicMock()
        mock_update.reaction_count.type = "unknown_trigger"

        assert await ReactionCountsFactory.create(mock_update) is None
