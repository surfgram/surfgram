import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.dice import Dice
from surfgram.types.dice.factory import DiceFactory


class TestDice:
    """Tests for Dice base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Dice()

    @pytest.fixture
    def concrete_dice(self):
        """Concrete Dice implementation for testing."""

        class ConcreteDice(Dice):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteDice()

    def test_concrete_instantiation(self, concrete_dice):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_dice, Dice)


class TestDiceFactory:
    """Tests for DiceFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        DiceFactory.DICE_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Dice):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        DiceFactory.register_dice(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.dice = MagicMock()
        mock_update.dice.emoji = "test_trigger"

        result = await DiceFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.dice = MagicMock()
        mock_update.dice.emoji = "unknown_trigger"

        assert await DiceFactory.create(mock_update) is None
