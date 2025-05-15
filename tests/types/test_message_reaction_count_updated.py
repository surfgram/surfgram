import pytest
from surfgram.types.message_reaction_count_updated import MessageReactionCountUpdated
from surfgram.types.message_reaction_count_updated.factory import (
    MessageReactionCountUpdatedsFactory,
)


class TestMessageReactionCountUpdated:
    """Tests for MessageReactionCountUpdated base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            MessageReactionCountUpdated()

    @pytest.fixture
    def concrete_message_reaction_count_updated(self):
        """Concrete MessageReactionCountUpdated implementation for testing."""

        class ConcreteMessageReactionCountUpdated(MessageReactionCountUpdated):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteMessageReactionCountUpdated

    def test_concrete_instantiation(self, concrete_message_reaction_count_updated):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_message_reaction_count_updated()
        assert isinstance(instance, MessageReactionCountUpdated)


class TestMessageReactionCountUpdatedsFactory:
    """Tests for MessageReactionCountUpdatedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        MessageReactionCountUpdatedsFactory.MESSAGEREACTIONCOUNTUPDATEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(MessageReactionCountUpdated):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        MessageReactionCountUpdatedsFactory.register_message_reaction_count_updated(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.message_reaction_count_updated = mocker.MagicMock()
        mock_update.message_reaction_count_updated.reactions = "test_trigger"

        result = await MessageReactionCountUpdatedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.message_reaction_count_updated = mocker.MagicMock()
        mock_update.message_reaction_count_updated.reactions = "unknown_trigger"

        assert await MessageReactionCountUpdatedsFactory.create(mock_update) is None
