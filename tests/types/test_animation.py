import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.animation import Animation
from surfgram.types.animation.factory import AnimationsFactory


class TestAnimation:
    """Tests for Animation base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Animation()

    @pytest.fixture
    def concrete_animation(self):
        """Concrete Animation implementation for testing."""

        class ConcreteAnimation(Animation):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteAnimation()

    def test_concrete_instantiation(self, concrete_animation):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_animation, Animation)


class TestAnimationsFactory:
    """Tests for AnimationsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        AnimationsFactory.ANIMATIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Animation):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        AnimationsFactory.register_animation(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.animation = MagicMock()
        mock_update.animation.mime_type = "test_trigger"

        result = await AnimationsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.animation = MagicMock()
        mock_update.animation.mime_type = "unknown_trigger"

        assert await AnimationsFactory.create(mock_update) is None
