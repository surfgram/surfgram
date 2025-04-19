import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.owned_gifts import OwnedGifts
from surfgram.types.owned_gifts.factory import OwnedGiftsFactory


class TestOwnedGifts:
    """Tests for OwnedGifts base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            OwnedGifts()

    @pytest.fixture
    def concrete_owned_gifts(self):
        """Concrete OwnedGifts implementation for testing."""

        class ConcreteOwnedGifts(OwnedGifts):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteOwnedGifts()

    def test_concrete_instantiation(self, concrete_owned_gifts):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_owned_gifts, OwnedGifts)


class TestOwnedGiftsFactory:
    """Tests for OwnedGiftsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        OwnedGiftsFactory.OWNEDGIFTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(OwnedGifts):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        OwnedGiftsFactory.register_owned_gifts(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.owned_gifts = MagicMock()
        mock_update.owned_gifts.next_offset = "test_trigger"

        result = await OwnedGiftsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.owned_gifts = MagicMock()
        mock_update.owned_gifts.next_offset = "unknown_trigger"

        assert await OwnedGiftsFactory.create(mock_update) is None
