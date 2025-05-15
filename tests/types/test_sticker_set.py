import pytest
from surfgram.types.sticker_set import StickerSet
from surfgram.types.sticker_set.factory import StickerSetsFactory


class TestStickerSet:
    """Tests for StickerSet base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            StickerSet()

    @pytest.fixture
    def concrete_sticker_set(self):
        """Concrete StickerSet implementation for testing."""

        class ConcreteStickerSet(StickerSet):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteStickerSet

    def test_concrete_instantiation(self, concrete_sticker_set):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_sticker_set()
        assert isinstance(instance, StickerSet)


class TestStickerSetsFactory:
    """Tests for StickerSetsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        StickerSetsFactory.STICKERSETS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(StickerSet):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        StickerSetsFactory.register_sticker_set(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.sticker_set = mocker.MagicMock()
        mock_update.sticker_set.title = "test_trigger"

        result = await StickerSetsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.sticker_set = mocker.MagicMock()
        mock_update.sticker_set.title = "unknown_trigger"

        assert await StickerSetsFactory.create(mock_update) is None
