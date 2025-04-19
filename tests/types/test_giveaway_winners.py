import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.giveaway_winners import GiveawayWinners
from surfgram.types.giveaway_winners.factory import GiveawayWinnersFactory


class TestGiveawayWinners:
    """Tests for GiveawayWinners base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            GiveawayWinners()

    @pytest.fixture
    def concrete_giveaway_winners(self):
        """Concrete GiveawayWinners implementation for testing."""

        class ConcreteGiveawayWinners(GiveawayWinners):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteGiveawayWinners()

    def test_concrete_instantiation(self, concrete_giveaway_winners):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_giveaway_winners, GiveawayWinners)


class TestGiveawayWinnersFactory:
    """Tests for GiveawayWinnersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        GiveawayWinnersFactory.GIVEAWAYWINNERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(GiveawayWinners):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        GiveawayWinnersFactory.register_giveaway_winners(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.giveaway_winners = MagicMock()
        mock_update.giveaway_winners.prize_description = "test_trigger"

        result = await GiveawayWinnersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.giveaway_winners = MagicMock()
        mock_update.giveaway_winners.prize_description = "unknown_trigger"

        assert await GiveawayWinnersFactory.create(mock_update) is None
