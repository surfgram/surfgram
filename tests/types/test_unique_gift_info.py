import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.unique_gift_info import UniqueGiftInfo
from surfgram.types.unique_gift_info.factory import UniqueGiftInfosFactory


class TestUniqueGiftInfo:
    """Tests for UniqueGiftInfo base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            UniqueGiftInfo()

    @pytest.fixture
    def concrete_unique_gift_info(self):
        """Concrete UniqueGiftInfo implementation for testing."""

        class ConcreteUniqueGiftInfo(UniqueGiftInfo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteUniqueGiftInfo()

    def test_concrete_instantiation(self, concrete_unique_gift_info):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_unique_gift_info, UniqueGiftInfo)


class TestUniqueGiftInfosFactory:
    """Tests for UniqueGiftInfosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        UniqueGiftInfosFactory.UNIQUEGIFTINFOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(UniqueGiftInfo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        UniqueGiftInfosFactory.register_unique_gift_info(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.unique_gift_info = MagicMock()
        mock_update.unique_gift_info.origin = "test_trigger"

        result = await UniqueGiftInfosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.unique_gift_info = MagicMock()
        mock_update.unique_gift_info.origin = "unknown_trigger"

        assert await UniqueGiftInfosFactory.create(mock_update) is None
