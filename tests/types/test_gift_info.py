import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.gift_info import GiftInfo
from surfgram.types.gift_info.factory import GiftInfosFactory


class TestGiftInfo:
    """Tests for GiftInfo base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            GiftInfo()

    @pytest.fixture
    def concrete_gift_info(self):
        """Concrete GiftInfo implementation for testing."""

        class ConcreteGiftInfo(GiftInfo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteGiftInfo()

    def test_concrete_instantiation(self, concrete_gift_info):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_gift_info, GiftInfo)


class TestGiftInfosFactory:
    """Tests for GiftInfosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        GiftInfosFactory.GIFTINFOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(GiftInfo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        GiftInfosFactory.register_gift_info(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.gift_info = MagicMock()
        mock_update.gift_info.text = "test_trigger"

        result = await GiftInfosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.gift_info = MagicMock()
        mock_update.gift_info.text = "unknown_trigger"

        assert await GiftInfosFactory.create(mock_update) is None
