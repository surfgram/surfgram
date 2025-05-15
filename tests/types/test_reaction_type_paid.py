import pytest
from surfgram.types.reaction_type_paid import ReactionTypePaid
from surfgram.types.reaction_type_paid.factory import ReactionTypePaidsFactory


class TestReactionTypePaid:
    """Tests for ReactionTypePaid base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ReactionTypePaid()

    @pytest.fixture
    def concrete_reaction_type_paid(self):
        """Concrete ReactionTypePaid implementation for testing."""

        class ConcreteReactionTypePaid(ReactionTypePaid):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteReactionTypePaid

    def test_concrete_instantiation(self, concrete_reaction_type_paid):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_reaction_type_paid()
        assert isinstance(instance, ReactionTypePaid)


class TestReactionTypePaidsFactory:
    """Tests for ReactionTypePaidsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ReactionTypePaidsFactory.REACTIONTYPEPAIDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ReactionTypePaid):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ReactionTypePaidsFactory.register_reaction_type_paid(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.reaction_type_paid = mocker.MagicMock()
        mock_update.reaction_type_paid.type = "test_trigger"

        result = await ReactionTypePaidsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.reaction_type_paid = mocker.MagicMock()
        mock_update.reaction_type_paid.type = "unknown_trigger"

        assert await ReactionTypePaidsFactory.create(mock_update) is None
