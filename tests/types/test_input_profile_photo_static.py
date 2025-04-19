import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.input_profile_photo_static import InputProfilePhotoStatic
from surfgram.types.input_profile_photo_static.factory import (
    InputProfilePhotoStaticsFactory,
)


class TestInputProfilePhotoStatic:
    """Tests for InputProfilePhotoStatic base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputProfilePhotoStatic()

    @pytest.fixture
    def concrete_input_profile_photo_static(self):
        """Concrete InputProfilePhotoStatic implementation for testing."""

        class ConcreteInputProfilePhotoStatic(InputProfilePhotoStatic):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInputProfilePhotoStatic()

    def test_concrete_instantiation(self, concrete_input_profile_photo_static):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_input_profile_photo_static, InputProfilePhotoStatic)


class TestInputProfilePhotoStaticsFactory:
    """Tests for InputProfilePhotoStaticsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputProfilePhotoStaticsFactory.INPUTPROFILEPHOTOSTATICS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputProfilePhotoStatic):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InputProfilePhotoStaticsFactory.register_input_profile_photo_static(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.input_profile_photo_static = MagicMock()
        mock_update.input_profile_photo_static.photo = "test_trigger"

        result = await InputProfilePhotoStaticsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.input_profile_photo_static = MagicMock()
        mock_update.input_profile_photo_static.photo = "unknown_trigger"

        assert await InputProfilePhotoStaticsFactory.create(mock_update) is None
