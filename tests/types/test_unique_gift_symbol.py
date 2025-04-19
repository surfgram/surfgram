import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.unique_gift_symbol import UniqueGiftSymbol
from surfgram.types.unique_gift_symbol.factory import UniqueGiftSymbolsFactory


class TestUniqueGiftSymbol:
    """Tests for UniqueGiftSymbol base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            UniqueGiftSymbol()

    @pytest.fixture
    def concrete_unique_gift_symbol(self):
        """Concrete UniqueGiftSymbol implementation for testing."""

        class ConcreteUniqueGiftSymbol(UniqueGiftSymbol):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteUniqueGiftSymbol()

    def test_concrete_instantiation(self, concrete_unique_gift_symbol):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_unique_gift_symbol, UniqueGiftSymbol)


class TestUniqueGiftSymbolsFactory:
    """Tests for UniqueGiftSymbolsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        UniqueGiftSymbolsFactory.UNIQUEGIFTSYMBOLS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(UniqueGiftSymbol):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        UniqueGiftSymbolsFactory.register_unique_gift_symbol(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.unique_gift_symbol = MagicMock()
        mock_update.unique_gift_symbol.sticker = "test_trigger"

        result = await UniqueGiftSymbolsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.unique_gift_symbol = MagicMock()
        mock_update.unique_gift_symbol.sticker = "unknown_trigger"

        assert await UniqueGiftSymbolsFactory.create(mock_update) is None
