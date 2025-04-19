import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.mask_position import MaskPosition
from surfgram.types.mask_position.factory import MaskPositionsFactory


class TestMaskPosition:
    """Tests for MaskPosition base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            MaskPosition()

    @pytest.fixture
    def concrete_mask_position(self):
        """Concrete MaskPosition implementation for testing."""

        class ConcreteMaskPosition(MaskPosition):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteMaskPosition()

    def test_concrete_instantiation(self, concrete_mask_position):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_mask_position, MaskPosition)


class TestMaskPositionsFactory:
    """Tests for MaskPositionsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        MaskPositionsFactory.MASKPOSITIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(MaskPosition):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        MaskPositionsFactory.register_mask_position(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.mask_position = MagicMock()
        mock_update.mask_position.point = "test_trigger"

        result = await MaskPositionsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.mask_position = MagicMock()
        mock_update.mask_position.point = "unknown_trigger"

        assert await MaskPositionsFactory.create(mock_update) is None
