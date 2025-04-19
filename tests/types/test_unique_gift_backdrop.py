import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.unique_gift_backdrop import UniqueGiftBackdrop
from surfgram.types.unique_gift_backdrop.factory import UniqueGiftBackdropsFactory


class TestUniqueGiftBackdrop:
    """Tests for UniqueGiftBackdrop base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            UniqueGiftBackdrop()

    @pytest.fixture
    def concrete_unique_gift_backdrop(self):
        """Concrete UniqueGiftBackdrop implementation for testing."""

        class ConcreteUniqueGiftBackdrop(UniqueGiftBackdrop):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteUniqueGiftBackdrop()

    def test_concrete_instantiation(self, concrete_unique_gift_backdrop):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_unique_gift_backdrop, UniqueGiftBackdrop)


class TestUniqueGiftBackdropsFactory:
    """Tests for UniqueGiftBackdropsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        UniqueGiftBackdropsFactory.UNIQUEGIFTBACKDROPS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(UniqueGiftBackdrop):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        UniqueGiftBackdropsFactory.register_unique_gift_backdrop(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.unique_gift_backdrop = MagicMock()
        mock_update.unique_gift_backdrop.name = "test_trigger"

        result = await UniqueGiftBackdropsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.unique_gift_backdrop = MagicMock()
        mock_update.unique_gift_backdrop.name = "unknown_trigger"

        assert await UniqueGiftBackdropsFactory.create(mock_update) is None
