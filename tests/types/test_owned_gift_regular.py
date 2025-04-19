import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.owned_gift_regular import OwnedGiftRegular
from surfgram.types.owned_gift_regular.factory import OwnedGiftRegularsFactory


class TestOwnedGiftRegular:
    """Tests for OwnedGiftRegular base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            OwnedGiftRegular()

    @pytest.fixture
    def concrete_owned_gift_regular(self):
        """Concrete OwnedGiftRegular implementation for testing."""

        class ConcreteOwnedGiftRegular(OwnedGiftRegular):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteOwnedGiftRegular()

    def test_concrete_instantiation(self, concrete_owned_gift_regular):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_owned_gift_regular, OwnedGiftRegular)


class TestOwnedGiftRegularsFactory:
    """Tests for OwnedGiftRegularsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        OwnedGiftRegularsFactory.OWNEDGIFTREGULARS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(OwnedGiftRegular):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        OwnedGiftRegularsFactory.register_owned_gift_regular(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.owned_gift_regular = MagicMock()
        mock_update.owned_gift_regular.text = "test_trigger"

        result = await OwnedGiftRegularsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.owned_gift_regular = MagicMock()
        mock_update.owned_gift_regular.text = "unknown_trigger"

        assert await OwnedGiftRegularsFactory.create(mock_update) is None
