import pytest
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

            async def __callback__(self):
                return None

        return ConcreteUniqueGiftBackdrop

    def test_concrete_instantiation(self, concrete_unique_gift_backdrop):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_unique_gift_backdrop()
        assert isinstance(instance, UniqueGiftBackdrop)


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

            async def __callback__(self):
                return None

        UniqueGiftBackdropsFactory.register_unique_gift_backdrop(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.unique_gift_backdrop = mocker.MagicMock()
        mock_update.unique_gift_backdrop.name = "test_trigger"

        result = await UniqueGiftBackdropsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.unique_gift_backdrop = mocker.MagicMock()
        mock_update.unique_gift_backdrop.name = "unknown_trigger"

        assert await UniqueGiftBackdropsFactory.create(mock_update) is None
