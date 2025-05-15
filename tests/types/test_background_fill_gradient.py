import pytest
from surfgram.types.background_fill_gradient import BackgroundFillGradient
from surfgram.types.background_fill_gradient.factory import (
    BackgroundFillGradientsFactory,
)


class TestBackgroundFillGradient:
    """Tests for BackgroundFillGradient base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BackgroundFillGradient()

    @pytest.fixture
    def concrete_background_fill_gradient(self):
        """Concrete BackgroundFillGradient implementation for testing."""

        class ConcreteBackgroundFillGradient(BackgroundFillGradient):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBackgroundFillGradient

    def test_concrete_instantiation(self, concrete_background_fill_gradient):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_background_fill_gradient()
        assert isinstance(instance, BackgroundFillGradient)


class TestBackgroundFillGradientsFactory:
    """Tests for BackgroundFillGradientsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BackgroundFillGradientsFactory.BACKGROUNDFILLGRADIENTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BackgroundFillGradient):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BackgroundFillGradientsFactory.register_background_fill_gradient(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.background_fill_gradient = mocker.MagicMock()
        mock_update.background_fill_gradient.type = "test_trigger"

        result = await BackgroundFillGradientsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.background_fill_gradient = mocker.MagicMock()
        mock_update.background_fill_gradient.type = "unknown_trigger"

        assert await BackgroundFillGradientsFactory.create(mock_update) is None
