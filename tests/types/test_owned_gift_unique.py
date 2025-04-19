import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.owned_gift_unique import OwnedGiftUnique
from surfgram.types.owned_gift_unique.factory import OwnedGiftUniquesFactory


class TestOwnedGiftUnique:
    """Tests for OwnedGiftUnique base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            OwnedGiftUnique()

    @pytest.fixture
    def concrete_owned_gift_unique(self):
        """Concrete OwnedGiftUnique implementation for testing."""

        class ConcreteOwnedGiftUnique(OwnedGiftUnique):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteOwnedGiftUnique()

    def test_concrete_instantiation(self, concrete_owned_gift_unique):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_owned_gift_unique, OwnedGiftUnique)


class TestOwnedGiftUniquesFactory:
    """Tests for OwnedGiftUniquesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        OwnedGiftUniquesFactory.OWNEDGIFTUNIQUES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(OwnedGiftUnique):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        OwnedGiftUniquesFactory.register_owned_gift_unique(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.owned_gift_unique = MagicMock()
        mock_update.owned_gift_unique.type = "test_trigger"

        result = await OwnedGiftUniquesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.owned_gift_unique = MagicMock()
        mock_update.owned_gift_unique.type = "unknown_trigger"

        assert await OwnedGiftUniquesFactory.create(mock_update) is None
