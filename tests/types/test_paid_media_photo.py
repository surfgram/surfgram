import pytest
from surfgram.types.paid_media_photo import PaidMediaPhoto
from surfgram.types.paid_media_photo.factory import PaidMediaPhotosFactory


class TestPaidMediaPhoto:
    """Tests for PaidMediaPhoto base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PaidMediaPhoto()

    @pytest.fixture
    def concrete_paid_media_photo(self):
        """Concrete PaidMediaPhoto implementation for testing."""

        class ConcretePaidMediaPhoto(PaidMediaPhoto):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcretePaidMediaPhoto

    def test_concrete_instantiation(self, concrete_paid_media_photo):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_paid_media_photo()
        assert isinstance(instance, PaidMediaPhoto)


class TestPaidMediaPhotosFactory:
    """Tests for PaidMediaPhotosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PaidMediaPhotosFactory.PAIDMEDIAPHOTOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PaidMediaPhoto):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        PaidMediaPhotosFactory.register_paid_media_photo(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.paid_media_photo = mocker.MagicMock()
        mock_update.paid_media_photo.photo = "test_trigger"

        result = await PaidMediaPhotosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.paid_media_photo = mocker.MagicMock()
        mock_update.paid_media_photo.photo = "unknown_trigger"

        assert await PaidMediaPhotosFactory.create(mock_update) is None
