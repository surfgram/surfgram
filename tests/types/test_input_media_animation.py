import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.input_media_animation import InputMediaAnimation
from surfgram.types.input_media_animation.factory import InputMediaAnimationsFactory


class TestInputMediaAnimation:
    """Tests for InputMediaAnimation base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputMediaAnimation()

    @pytest.fixture
    def concrete_input_media_animation(self):
        """Concrete InputMediaAnimation implementation for testing."""

        class ConcreteInputMediaAnimation(InputMediaAnimation):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInputMediaAnimation()

    def test_concrete_instantiation(self, concrete_input_media_animation):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_input_media_animation, InputMediaAnimation)


class TestInputMediaAnimationsFactory:
    """Tests for InputMediaAnimationsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputMediaAnimationsFactory.INPUTMEDIAANIMATIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputMediaAnimation):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InputMediaAnimationsFactory.register_input_media_animation(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.input_media_animation = MagicMock()
        mock_update.input_media_animation.caption = "test_trigger"

        result = await InputMediaAnimationsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.input_media_animation = MagicMock()
        mock_update.input_media_animation.caption = "unknown_trigger"

        assert await InputMediaAnimationsFactory.create(mock_update) is None
