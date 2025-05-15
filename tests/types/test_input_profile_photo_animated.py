import pytest
from surfgram.types.input_profile_photo_animated import InputProfilePhotoAnimated
from surfgram.types.input_profile_photo_animated.factory import (
    InputProfilePhotoAnimatedsFactory,
)


class TestInputProfilePhotoAnimated:
    """Tests for InputProfilePhotoAnimated base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputProfilePhotoAnimated()

    @pytest.fixture
    def concrete_input_profile_photo_animated(self):
        """Concrete InputProfilePhotoAnimated implementation for testing."""

        class ConcreteInputProfilePhotoAnimated(InputProfilePhotoAnimated):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInputProfilePhotoAnimated

    def test_concrete_instantiation(self, concrete_input_profile_photo_animated):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_input_profile_photo_animated()
        assert isinstance(instance, InputProfilePhotoAnimated)


class TestInputProfilePhotoAnimatedsFactory:
    """Tests for InputProfilePhotoAnimatedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputProfilePhotoAnimatedsFactory.INPUTPROFILEPHOTOANIMATEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputProfilePhotoAnimated):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InputProfilePhotoAnimatedsFactory.register_input_profile_photo_animated(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_profile_photo_animated = mocker.MagicMock()
        mock_update.input_profile_photo_animated.type = "test_trigger"

        result = await InputProfilePhotoAnimatedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_profile_photo_animated = mocker.MagicMock()
        mock_update.input_profile_photo_animated.type = "unknown_trigger"

        assert await InputProfilePhotoAnimatedsFactory.create(mock_update) is None
