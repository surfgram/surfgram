import pytest
from surfgram.types.reaction_type_emoji import ReactionTypeEmoji
from surfgram.types.reaction_type_emoji.factory import ReactionTypeEmojisFactory


class TestReactionTypeEmoji:
    """Tests for ReactionTypeEmoji base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ReactionTypeEmoji()

    @pytest.fixture
    def concrete_reaction_type_emoji(self):
        """Concrete ReactionTypeEmoji implementation for testing."""

        class ConcreteReactionTypeEmoji(ReactionTypeEmoji):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteReactionTypeEmoji

    def test_concrete_instantiation(self, concrete_reaction_type_emoji):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_reaction_type_emoji()
        assert isinstance(instance, ReactionTypeEmoji)


class TestReactionTypeEmojisFactory:
    """Tests for ReactionTypeEmojisFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ReactionTypeEmojisFactory.REACTIONTYPEEMOJIS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ReactionTypeEmoji):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ReactionTypeEmojisFactory.register_reaction_type_emoji(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.reaction_type_emoji = mocker.MagicMock()
        mock_update.reaction_type_emoji.type = "test_trigger"

        result = await ReactionTypeEmojisFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.reaction_type_emoji = mocker.MagicMock()
        mock_update.reaction_type_emoji.type = "unknown_trigger"

        assert await ReactionTypeEmojisFactory.create(mock_update) is None
