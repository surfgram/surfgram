import pytest
from surfgram.types.unique_gift import UniqueGift
from surfgram.types.unique_gift.factory import UniqueGiftsFactory


class TestUniqueGift:
    """Tests for UniqueGift base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            UniqueGift()

    @pytest.fixture
    def concrete_unique_gift(self):
        """Concrete UniqueGift implementation for testing."""

        class ConcreteUniqueGift(UniqueGift):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteUniqueGift

    def test_concrete_instantiation(self, concrete_unique_gift):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_unique_gift()
        assert isinstance(instance, UniqueGift)


class TestUniqueGiftsFactory:
    """Tests for UniqueGiftsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        UniqueGiftsFactory.UNIQUEGIFTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(UniqueGift):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        UniqueGiftsFactory.register_unique_gift(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.unique_gift = mocker.MagicMock()
        mock_update.unique_gift.base_name = "test_trigger"

        result = await UniqueGiftsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.unique_gift = mocker.MagicMock()
        mock_update.unique_gift.base_name = "unknown_trigger"

        assert await UniqueGiftsFactory.create(mock_update) is None
