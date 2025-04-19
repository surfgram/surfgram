import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.giveaway import Giveaway
from surfgram.types.giveaway.factory import GiveawaysFactory


class TestGiveaway:
    """Tests for Giveaway base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Giveaway()

    @pytest.fixture
    def concrete_giveaway(self):
        """Concrete Giveaway implementation for testing."""

        class ConcreteGiveaway(Giveaway):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteGiveaway()

    def test_concrete_instantiation(self, concrete_giveaway):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_giveaway, Giveaway)


class TestGiveawaysFactory:
    """Tests for GiveawaysFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        GiveawaysFactory.GIVEAWAYS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Giveaway):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        GiveawaysFactory.register_giveaway(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.giveaway = MagicMock()
        mock_update.giveaway.prize_description = "test_trigger"

        result = await GiveawaysFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.giveaway = MagicMock()
        mock_update.giveaway.prize_description = "unknown_trigger"

        assert await GiveawaysFactory.create(mock_update) is None
