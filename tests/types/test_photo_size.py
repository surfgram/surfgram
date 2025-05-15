import pytest
from surfgram.types.photo_size import PhotoSize
from surfgram.types.photo_size.factory import PhotoSizesFactory


class TestPhotoSize:
    """Tests for PhotoSize base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PhotoSize()

    @pytest.fixture
    def concrete_photo_size(self):
        """Concrete PhotoSize implementation for testing."""

        class ConcretePhotoSize(PhotoSize):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcretePhotoSize

    def test_concrete_instantiation(self, concrete_photo_size):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_photo_size()
        assert isinstance(instance, PhotoSize)


class TestPhotoSizesFactory:
    """Tests for PhotoSizesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PhotoSizesFactory.PHOTOSIZES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PhotoSize):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        PhotoSizesFactory.register_photo_size(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.photo_size = mocker.MagicMock()
        mock_update.photo_size.file_id = "test_trigger"

        result = await PhotoSizesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.photo_size = mocker.MagicMock()
        mock_update.photo_size.file_id = "unknown_trigger"

        assert await PhotoSizesFactory.create(mock_update) is None
