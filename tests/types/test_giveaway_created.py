import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.giveaway_created import GiveawayCreated
from surfgram.types.giveaway_created.factory import GiveawayCreatedsFactory


class TestGiveawayCreated:
    """Tests for GiveawayCreated base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            GiveawayCreated()

    @pytest.fixture
    def concrete_giveaway_created(self):
        """Concrete GiveawayCreated implementation for testing."""

        class ConcreteGiveawayCreated(GiveawayCreated):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteGiveawayCreated()

    def test_concrete_instantiation(self, concrete_giveaway_created):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_giveaway_created, GiveawayCreated)


class TestGiveawayCreatedsFactory:
    """Tests for GiveawayCreatedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        GiveawayCreatedsFactory.GIVEAWAYCREATEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(GiveawayCreated):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        GiveawayCreatedsFactory.register_giveaway_created(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.giveaway_created = MagicMock()
        mock_update.giveaway_created.prize_star_count = "test_trigger"

        result = await GiveawayCreatedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.giveaway_created = MagicMock()
        mock_update.giveaway_created.prize_star_count = "unknown_trigger"

        assert await GiveawayCreatedsFactory.create(mock_update) is None
