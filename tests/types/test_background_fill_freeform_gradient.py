import pytest
from surfgram.types.background_fill_freeform_gradient import (
    BackgroundFillFreeformGradient,
)
from surfgram.types.background_fill_freeform_gradient.factory import (
    BackgroundFillFreeformGradientsFactory,
)


class TestBackgroundFillFreeformGradient:
    """Tests for BackgroundFillFreeformGradient base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BackgroundFillFreeformGradient()

    @pytest.fixture
    def concrete_background_fill_freeform_gradient(self):
        """Concrete BackgroundFillFreeformGradient implementation for testing."""

        class ConcreteBackgroundFillFreeformGradient(BackgroundFillFreeformGradient):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBackgroundFillFreeformGradient

    def test_concrete_instantiation(self, concrete_background_fill_freeform_gradient):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_background_fill_freeform_gradient()
        assert isinstance(instance, BackgroundFillFreeformGradient)


class TestBackgroundFillFreeformGradientsFactory:
    """Tests for BackgroundFillFreeformGradientsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BackgroundFillFreeformGradientsFactory.BACKGROUNDFILLFREEFORMGRADIENTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BackgroundFillFreeformGradient):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BackgroundFillFreeformGradientsFactory.register_background_fill_freeform_gradient(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.background_fill_freeform_gradient = mocker.MagicMock()
        mock_update.background_fill_freeform_gradient.type = "test_trigger"

        result = await BackgroundFillFreeformGradientsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.background_fill_freeform_gradient = mocker.MagicMock()
        mock_update.background_fill_freeform_gradient.type = "unknown_trigger"

        assert await BackgroundFillFreeformGradientsFactory.create(mock_update) is None
