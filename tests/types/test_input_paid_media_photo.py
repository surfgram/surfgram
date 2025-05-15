import pytest
from surfgram.types.input_paid_media_photo import InputPaidMediaPhoto
from surfgram.types.input_paid_media_photo.factory import InputPaidMediaPhotosFactory


class TestInputPaidMediaPhoto:
    """Tests for InputPaidMediaPhoto base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputPaidMediaPhoto()

    @pytest.fixture
    def concrete_input_paid_media_photo(self):
        """Concrete InputPaidMediaPhoto implementation for testing."""

        class ConcreteInputPaidMediaPhoto(InputPaidMediaPhoto):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInputPaidMediaPhoto

    def test_concrete_instantiation(self, concrete_input_paid_media_photo):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_input_paid_media_photo()
        assert isinstance(instance, InputPaidMediaPhoto)


class TestInputPaidMediaPhotosFactory:
    """Tests for InputPaidMediaPhotosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputPaidMediaPhotosFactory.INPUTPAIDMEDIAPHOTOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputPaidMediaPhoto):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InputPaidMediaPhotosFactory.register_input_paid_media_photo(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_paid_media_photo = mocker.MagicMock()
        mock_update.input_paid_media_photo.type = "test_trigger"

        result = await InputPaidMediaPhotosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_paid_media_photo = mocker.MagicMock()
        mock_update.input_paid_media_photo.type = "unknown_trigger"

        assert await InputPaidMediaPhotosFactory.create(mock_update) is None
