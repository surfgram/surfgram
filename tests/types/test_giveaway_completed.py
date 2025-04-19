import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.giveaway_completed import GiveawayCompleted
from surfgram.types.giveaway_completed.factory import GiveawayCompletedsFactory


class TestGiveawayCompleted:
    """Tests for GiveawayCompleted base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            GiveawayCompleted()

    @pytest.fixture
    def concrete_giveaway_completed(self):
        """Concrete GiveawayCompleted implementation for testing."""

        class ConcreteGiveawayCompleted(GiveawayCompleted):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteGiveawayCompleted()

    def test_concrete_instantiation(self, concrete_giveaway_completed):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_giveaway_completed, GiveawayCompleted)


class TestGiveawayCompletedsFactory:
    """Tests for GiveawayCompletedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        GiveawayCompletedsFactory.GIVEAWAYCOMPLETEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(GiveawayCompleted):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        GiveawayCompletedsFactory.register_giveaway_completed(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.giveaway_completed = MagicMock()
        mock_update.giveaway_completed.winner_count = "test_trigger"

        result = await GiveawayCompletedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.giveaway_completed = MagicMock()
        mock_update.giveaway_completed.winner_count = "unknown_trigger"

        assert await GiveawayCompletedsFactory.create(mock_update) is None
