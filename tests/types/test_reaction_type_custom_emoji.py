import pytest
from surfgram.types.reaction_type_custom_emoji import ReactionTypeCustomEmoji
from surfgram.types.reaction_type_custom_emoji.factory import (
    ReactionTypeCustomEmojisFactory,
)


class TestReactionTypeCustomEmoji:
    """Tests for ReactionTypeCustomEmoji base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ReactionTypeCustomEmoji()

    @pytest.fixture
    def concrete_reaction_type_custom_emoji(self):
        """Concrete ReactionTypeCustomEmoji implementation for testing."""

        class ConcreteReactionTypeCustomEmoji(ReactionTypeCustomEmoji):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteReactionTypeCustomEmoji

    def test_concrete_instantiation(self, concrete_reaction_type_custom_emoji):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_reaction_type_custom_emoji()
        assert isinstance(instance, ReactionTypeCustomEmoji)


class TestReactionTypeCustomEmojisFactory:
    """Tests for ReactionTypeCustomEmojisFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ReactionTypeCustomEmojisFactory.REACTIONTYPECUSTOMEMOJIS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ReactionTypeCustomEmoji):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ReactionTypeCustomEmojisFactory.register_reaction_type_custom_emoji(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.reaction_type_custom_emoji = mocker.MagicMock()
        mock_update.reaction_type_custom_emoji.type = "test_trigger"

        result = await ReactionTypeCustomEmojisFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.reaction_type_custom_emoji = mocker.MagicMock()
        mock_update.reaction_type_custom_emoji.type = "unknown_trigger"

        assert await ReactionTypeCustomEmojisFactory.create(mock_update) is None
