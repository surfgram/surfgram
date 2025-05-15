import pytest
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

            async def __callback__(self):
                return None

        return ConcreteUniqueGiftInfo

    def test_concrete_instantiation(self, concrete_unique_gift_info):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_unique_gift_info()
        assert isinstance(instance, UniqueGiftInfo)


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

            async def __callback__(self):
                return None

        UniqueGiftInfosFactory.register_unique_gift_info(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.unique_gift_info = mocker.MagicMock()
        mock_update.unique_gift_info.origin = "test_trigger"

        result = await UniqueGiftInfosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.unique_gift_info = mocker.MagicMock()
        mock_update.unique_gift_info.origin = "unknown_trigger"

        assert await UniqueGiftInfosFactory.create(mock_update) is None
