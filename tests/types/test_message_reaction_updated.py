import pytest
from surfgram.types.message_reaction_updated import MessageReactionUpdated
from surfgram.types.message_reaction_updated.factory import (
    MessageReactionUpdatedsFactory,
)


class TestMessageReactionUpdated:
    """Tests for MessageReactionUpdated base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            MessageReactionUpdated()

    @pytest.fixture
    def concrete_message_reaction_updated(self):
        """Concrete MessageReactionUpdated implementation for testing."""

        class ConcreteMessageReactionUpdated(MessageReactionUpdated):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteMessageReactionUpdated

    def test_concrete_instantiation(self, concrete_message_reaction_updated):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_message_reaction_updated()
        assert isinstance(instance, MessageReactionUpdated)


class TestMessageReactionUpdatedsFactory:
    """Tests for MessageReactionUpdatedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        MessageReactionUpdatedsFactory.MESSAGEREACTIONUPDATEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(MessageReactionUpdated):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        MessageReactionUpdatedsFactory.register_message_reaction_updated(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.message_reaction_updated = mocker.MagicMock()
        mock_update.message_reaction_updated.actor_chat = "test_trigger"

        result = await MessageReactionUpdatedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.message_reaction_updated = mocker.MagicMock()
        mock_update.message_reaction_updated.actor_chat = "unknown_trigger"

        assert await MessageReactionUpdatedsFactory.create(mock_update) is None
